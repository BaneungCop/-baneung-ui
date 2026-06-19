import type { GridColumn } from './types';

/**
 * 컬럼에서 row 값 추출 (sort-filter.ts와 동일 로직 — 의존성 분리 위해 복제).
 */
function getValue<TRow>(column: GridColumn<TRow>, row: TRow): unknown {
  return typeof column.accessor === 'function'
    ? column.accessor(row)
    : (row as Record<string, unknown>)[column.accessor as string];
}

/**
 * 컬럼의 `aggregate` 옵션에 따라 행 집합에 대한 집계 값을 계산.
 *
 * - 'sum' / 'avg' / 'min' / 'max': 숫자로 변환 가능한 값만 대상
 * - 'count': null/undefined가 아닌 값 개수
 * - 함수: 호출자가 자유 형식 (ReactNode 반환)
 *
 * 입력 행은 보통 visibleFlatRows의 raw row (필터/검색 적용 후).
 * 숫자가 아닌 값은 sum/avg/min/max에서 무시.
 *
 * @returns 집계 값 또는 null (aggregate 미정의/계산 불가).
 */
export function computeAggregate<TRow>(
  column: GridColumn<TRow>,
  rows: TRow[],
): number | string | React.ReactNode | null {
  const agg = column.aggregate;
  if (!agg) return null;
  if (typeof agg === 'function') return agg(rows);

  // 숫자 추출
  const numbers: number[] = [];
  let countAll = 0;
  rows.forEach((row) => {
    const v = getValue(column, row);
    if (v == null) return;
    countAll += 1;
    const num = typeof v === 'number' ? v : Number(v);
    if (Number.isFinite(num)) numbers.push(num);
  });

  switch (agg) {
    case 'count':
      return countAll;
    case 'sum':
      return numbers.reduce((a, b) => a + b, 0);
    case 'avg':
      if (numbers.length === 0) return 0;
      return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    case 'min':
      return numbers.length === 0 ? null : Math.min(...numbers);
    case 'max':
      return numbers.length === 0 ? null : Math.max(...numbers);
    default:
      return null;
  }
}
