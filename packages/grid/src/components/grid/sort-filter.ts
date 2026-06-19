import { NULL_VALUE_KEY } from './filter-popover';

import type { FlatRow } from './tree-utils';
import type { GridColumn, GridSortState } from './types';

/**
 * 값 비교 — null/undefined은 끝으로, Date는 timestamp, number는 산술,
 * 그 외는 localeCompare(numeric=true)로 비교.
 */
function compareValues(a: unknown, b: unknown): number {
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;
  if (a instanceof Date && b instanceof Date) return a.getTime() - b.getTime();
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a).localeCompare(String(b), undefined, { numeric: true });
}

/** 컬럼에서 row 값 추출 (accessor 함수/key 모두 지원). */
function getValue<TRow>(column: GridColumn<TRow>, row: TRow): unknown {
  return typeof column.accessor === 'function'
    ? column.accessor(row)
    : (row as Record<string, unknown>)[column.accessor as string];
}

/** 값을 필터 set 키로 정규화 (null/undefined → NULL_VALUE_KEY). */
function toFilterKey(v: unknown): string {
  return v == null ? NULL_VALUE_KEY : String(v);
}

/**
 * filter + quickFilter + multi-column sort를 차례로 적용.
 *
 * 우선순위:
 * 1. 컬럼별 제외 필터 (popover 체크박스 결과)
 * 2. quickFilter — 모든 visible 컬럼에 대한 부분 일치 (case-insensitive)
 * 3. multi-column sort — 배열의 앞쪽 컬럼이 1차 정렬, 동률 시 2차 컬럼으로 tie-break
 *
 * - 트리 모드는 sort skip (부모-자식 구조 보존).
 * - sort가 단일 GridSortState로 들어오면 길이 1 배열로 정규화 (backward compat).
 */
export function applySortAndFilter<TRow>(
  rows: FlatRow<TRow>[],
  columns: GridColumn<TRow>[],
  filters: Record<string, Set<string>>,
  sort: GridSortState | GridSortState[] | null,
  tree: boolean,
  quickFilter?: string,
): FlatRow<TRow>[] {
  let result = rows;

  // 1. 컬럼별 제외 필터
  const active = Object.entries(filters).filter(([, s]) => s.size > 0);
  if (active.length > 0) {
    result = result.filter((fr) =>
      active.every(([colId, excluded]) => {
        const col = columns.find((c) => c.id === colId);
        if (!col) return true;
        return !excluded.has(toFilterKey(getValue(col, fr.row)));
      }),
    );
  }

  // 2. quickFilter — 모든 컬럼에 대해 부분 일치 검색 (case-insensitive)
  const q = quickFilter?.trim().toLowerCase();
  if (q) {
    result = result.filter((fr) =>
      columns.some((col) => {
        const v = getValue(col, fr.row);
        if (v == null) return false;
        // Date는 ISO 변환 후 검색
        const str = v instanceof Date ? v.toISOString() : String(v);
        return str.toLowerCase().includes(q);
      }),
    );
  }

  // 3. multi-column sort
  if (sort && !tree) {
    const sortList = Array.isArray(sort) ? sort : [sort];
    const validSorts = sortList
      .map((s) => ({ s, col: columns.find((c) => c.id === s.columnId) }))
      .filter((x): x is { s: GridSortState; col: GridColumn<TRow> } => Boolean(x.col));
    if (validSorts.length > 0) {
      result = [...result].sort((a, b) => {
        for (const { s, col } of validSorts) {
          const dir = s.direction === 'asc' ? 1 : -1;
          const cmp = compareValues(getValue(col, a.row), getValue(col, b.row)) * dir;
          if (cmp !== 0) return cmp;
        }
        return 0;
      });
    }
  }

  return result;
}

/** sort 3-state 토글: 없음 → asc → desc → 없음. */
export function nextSortState(
  current: GridSortState | null,
  columnId: string,
): GridSortState | null {
  if (!current || current.columnId !== columnId) return { columnId, direction: 'asc' };
  if (current.direction === 'asc') return { columnId, direction: 'desc' };
  return null;
}

/**
 * 다중 컬럼 정렬 토글 — Shift+클릭 시 호출.
 *
 * - 클릭한 컬럼이 정렬 배열에 없으면 끝에 'asc'로 추가
 * - 'asc'였으면 'desc'로 전환 (같은 위치 유지)
 * - 'desc'였으면 배열에서 제거
 *
 * Shift 안 누른 일반 클릭은 nextSortState로 단일 토글 → 호출자가 단일 배열로 set.
 */
export function nextMultiSortStates(current: GridSortState[], columnId: string): GridSortState[] {
  const idx = current.findIndex((s) => s.columnId === columnId);
  if (idx === -1) return [...current, { columnId, direction: 'asc' }];
  const existing = current[idx]!;
  if (existing.direction === 'asc') {
    const next = [...current];
    next[idx] = { columnId, direction: 'desc' };
    return next;
  }
  // 'desc' → 제거
  return current.filter((_, i) => i !== idx);
}

/**
 * 컬럼의 unique 값 목록 생성 (필터 popover의 체크박스용).
 * 트리 모드면 자식 행까지 재귀로 모음. 결과는 정렬된 문자열 배열, null이 있으면
 * 마지막에 NULL_VALUE_KEY를 추가.
 */
export function collectUniqueValues<TRow>(
  column: GridColumn<TRow>,
  data: TRow[],
  getChildren?: (row: TRow) => TRow[] | undefined,
): string[] {
  const set = new Set<string>();
  let hasNull = false;
  const walk = (rs: TRow[]) => {
    rs.forEach((row) => {
      const v = getValue(column, row);
      if (v == null) {
        hasNull = true;
      } else {
        set.add(String(v));
      }
      const kids = getChildren?.(row);
      if (kids) walk(kids);
    });
  };
  walk(data);
  const result = Array.from(set).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  if (hasNull) result.push(NULL_VALUE_KEY);
  return result;
}
