type RowId = string | number;

/**
 * Tree 모드에서 화면에 보일 한 행의 메타 정보.
 *
 * 일반 모드(`tree=false`)에서도 같은 형태로 wrap해서 사용하면 렌더 코드를 단일화
 * 가능 (level=0, hasChildren=false, expanded=false로 채움).
 */
export interface FlatRow<TRow> {
  row: TRow;
  id: RowId;
  level: number;
  hasChildren: boolean;
  expanded: boolean;
}

/**
 * 중첩 데이터를 펼침 상태 기반으로 flat 리스트로 변환.
 *
 * 자식이 있는 노드는 hasChildren=true, expanded=expanded(현재 펼침 상태).
 * 펼침 상태인 노드의 자식만 결과에 포함되어 visible row 목록을 만든다.
 */
export function flattenTree<TRow>(
  rows: TRow[],
  getChildren: (row: TRow) => TRow[] | undefined,
  expanded: Set<RowId>,
  resolveRowId: (row: TRow, index: number) => RowId,
  level = 0,
): FlatRow<TRow>[] {
  const result: FlatRow<TRow>[] = [];
  rows.forEach((row, idx) => {
    const id = resolveRowId(row, idx);
    const children = getChildren(row);
    const hasChildren = Array.isArray(children) && children.length > 0;
    const isExpanded = expanded.has(id);
    result.push({ row, id, level, hasChildren, expanded: isExpanded });
    if (hasChildren && isExpanded && children) {
      result.push(...flattenTree(children, getChildren, expanded, resolveRowId, level + 1));
    }
  });
  return result;
}

/**
 * 자식이 있는 모든 노드의 ID를 수집. `defaultExpandedIds='all'` 처리에 사용.
 */
export function collectExpandableIds<TRow>(
  rows: TRow[],
  getChildren: (row: TRow) => TRow[] | undefined,
  resolveRowId: (row: TRow, index: number) => RowId,
): Set<RowId> {
  const ids = new Set<RowId>();
  const walk = (rs: TRow[]) => {
    rs.forEach((row, idx) => {
      const children = getChildren(row);
      if (Array.isArray(children) && children.length > 0) {
        ids.add(resolveRowId(row, idx));
        walk(children);
      }
    });
  };
  walk(rows);
  return ids;
}
