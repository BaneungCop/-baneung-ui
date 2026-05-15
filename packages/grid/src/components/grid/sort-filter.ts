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
 * filter + sort를 차례로 적용.
 *
 * filter 상태: `Record<columnId, Set<excludedValueKey>>` — 빈 set이면 필터 없음.
 *
 * - 트리 모드는 sort skip (부모-자식 구조 보존).
 */
export function applySortAndFilter<TRow>(
  rows: FlatRow<TRow>[],
  columns: GridColumn<TRow>[],
  filters: Record<string, Set<string>>,
  sort: GridSortState | null,
  tree: boolean,
): FlatRow<TRow>[] {
  let result = rows;

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

  if (sort && !tree) {
    const col = columns.find((c) => c.id === sort.columnId);
    if (col) {
      const dir = sort.direction === 'asc' ? 1 : -1;
      result = [...result].sort(
        (a, b) => compareValues(getValue(col, a.row), getValue(col, b.row)) * dir,
      );
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
