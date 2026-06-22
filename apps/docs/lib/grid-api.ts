/**
 * Grid 패키지의 props / GridColumn 필드 / GridHandle ref API 데이터.
 *
 * /grid/props 페이지와 각 /grid/* 데모 페이지가 공유.
 * `desc: [ko, en]` 형식으로 locale 분기.
 */

export interface GridApiRow {
  prop: string;
  type: string;
  defaultValue: string;
  /** [ko, en] */
  desc: [string, string];
}

export const gridProps: GridApiRow[] = [
  {
    prop: 'columns',
    type: 'GridColumn<TRow>[]',
    defaultValue: '필수',
    desc: ['컬럼 정의 배열', 'Column definition array'],
  },
  {
    prop: 'data',
    type: 'TRow[]',
    defaultValue: '필수',
    desc: ['행 데이터 배열', 'Row data array'],
  },
  {
    prop: 'virtualized',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['가상화 활성. 1000+ 행 권장', 'Enable virtualization. Recommended for 1000+ rows'],
  },
  {
    prop: 'rowHeight',
    type: 'number',
    defaultValue: '36',
    desc: ['가상화 모드에서 행 높이(px)', 'Row height (px) in virtualized mode'],
  },
  {
    prop: 'height',
    type: 'number | string',
    defaultValue: '400',
    desc: ['컨테이너 높이', 'Container height'],
  },
  {
    prop: 'autoSize',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['부모 컨테이너에 꽉 맞춤 (height 무시)', 'Fit parent container (overrides height)'],
  },
  {
    prop: 'pageSize',
    type: 'number',
    defaultValue: '0',
    desc: ['> 0 이면 페이지네이션 활성', '> 0 enables pagination'],
  },
  {
    prop: 'showPagination',
    type: 'boolean',
    defaultValue: 'true',
    desc: [
      '내장 페이지네이션 UI 표시. 외부 페이징 사용 시 false',
      'Show built-in pagination UI. Set false for external paging',
    ],
  },
  {
    prop: 'page',
    type: 'number',
    defaultValue: '-',
    desc: ['controlled 페이지 (1-based)', 'Controlled page (1-based)'],
  },
  {
    prop: 'onPageChange',
    type: '(page: number) => void',
    defaultValue: '-',
    desc: ['controlled 모드 콜백', 'Controlled mode callback'],
  },
  {
    prop: 'emptyState',
    type: 'ReactNode',
    defaultValue: '-',
    desc: ['데이터 없을 때 표시', 'Shown when data is empty'],
  },
  {
    prop: 'getRowId',
    type: '(row, idx) => string | number',
    defaultValue: '-',
    desc: [
      '행 키 추출. 편집/선택/트리 사용 시 필수 권장',
      'Row key extractor. Required for edit / select / tree',
    ],
  },
  {
    prop: 'selectable',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['첫 컬럼에 체크박스 자동 추가', 'Auto-add checkbox column at the start'],
  },
  {
    prop: 'onRowChange',
    type: '(row, id) => void',
    defaultValue: '-',
    desc: ['편집 commit 시 콜백', 'Callback on edit commit'],
  },
  {
    prop: 'tree',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['Tree(계층) 모드 활성', 'Enable tree (hierarchical) mode'],
  },
  {
    prop: 'getChildren',
    type: '(row) => TRow[] | undefined',
    defaultValue: '-',
    desc: ['tree=true 시 자식 추출 함수 (필수)', 'Required children extractor when tree=true'],
  },
  {
    prop: 'defaultExpandedIds',
    type: "'all' | 'none' | (string | number)[]",
    defaultValue: "'none'",
    desc: ['초기 펼침 상태', 'Initial expanded state'],
  },
  {
    prop: 'cellSelection',
    type: "'none' | 'single' | 'multi'",
    defaultValue: "'single'",
    desc: ['셀 선택 모드', 'Cell selection mode'],
  },
  {
    prop: 'clearOnDelete',
    type: 'boolean',
    defaultValue: 'false',
    desc: [
      'Delete/Backspace 키로 선택 셀 값 클리어',
      'Clear selected cell value with Delete/Backspace',
    ],
  },
  {
    prop: 'clipboard',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['Ctrl+C/V로 Excel 호환 클립보드 (TSV)', 'Excel-compatible clipboard via Ctrl+C/V (TSV)'],
  },
  {
    prop: 'quickFilter',
    type: 'string',
    defaultValue: '-',
    desc: ['모든 visible 컬럼 부분 일치 검색', 'Partial match across all visible columns'],
  },
  {
    prop: 'resizable',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['헤더 우측 드래그로 컬럼 폭 조절', 'Drag header right edge to resize'],
  },
  {
    prop: 'onColumnResize',
    type: '(colId, width) => void',
    defaultValue: '-',
    desc: ['리사이즈 콜백 (영속화용)', 'Resize callback (for persistence)'],
  },
  {
    prop: 'reorderable',
    type: 'boolean',
    defaultValue: 'false',
    desc: [
      '헤더 drag&drop으로 컬럼 순서 변경 (pin 그룹 내)',
      'Reorder columns via header drag&drop (within pin group)',
    ],
  },
  {
    prop: 'onColumnReorder',
    type: '(order: string[]) => void',
    defaultValue: '-',
    desc: ['순서 변경 콜백', 'Reorder callback'],
  },
  {
    prop: 'columnVisibility',
    type: 'Record<string, boolean>',
    defaultValue: '-',
    desc: ['controlled 표시/숨김', 'Controlled visibility'],
  },
  {
    prop: 'onColumnVisibilityChange',
    type: '(v) => void',
    defaultValue: '-',
    desc: ['표시/숨김 변경 콜백', 'Visibility change callback'],
  },
  {
    prop: 'showColumnMenu',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['우상단 ⚙️ 컬럼 표시 메뉴 버튼', 'Show ⚙️ column visibility menu at top-right'],
  },
  {
    prop: 'showFooter',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['column.aggregate 푸터 행 표시', 'Show aggregate footer row (column.aggregate)'],
  },
  {
    prop: 'contextMenu',
    type: 'boolean | (ctx) => Item[]',
    defaultValue: '-',
    desc: ['우클릭 메뉴 (기본 또는 동적)', 'Right-click menu (default or dynamic)'],
  },
  {
    prop: 'viewKey',
    type: 'string',
    defaultValue: '-',
    desc: [
      '정렬/폭/표시/순서 localStorage 자동 저장 키',
      'localStorage auto-save key for sort/width/visibility/order',
    ],
  },
  {
    prop: 'onViewChange',
    type: '(view) => void',
    defaultValue: '-',
    desc: ['view 변경 콜백 (외부 영속화)', 'View change callback (external persistence)'],
  },
  {
    prop: 'ref',
    type: 'Ref<GridHandle<TRow>>',
    defaultValue: '-',
    desc: ['imperative API 접근', 'Imperative API access'],
  },
];

export const gridColumnFields: GridApiRow[] = [
  {
    prop: 'id',
    type: 'string',
    defaultValue: '필수',
    desc: ['컬럼 고유 식별자', 'Unique column id'],
  },
  {
    prop: 'header',
    type: 'ReactNode',
    defaultValue: '필수',
    desc: ['헤더 표시 노드', 'Header display node'],
  },
  {
    prop: 'accessor',
    type: 'keyof TRow | (row) => unknown',
    defaultValue: '필수',
    desc: ['행에서 값 추출 (key 또는 함수)', 'Value extractor (key or function)'],
  },
  {
    prop: 'width',
    type: 'number | string',
    defaultValue: '-',
    desc: ['셀 너비 (px 또는 CSS)', 'Cell width (px or CSS)'],
  },
  {
    prop: 'minWidth / maxWidth',
    type: 'number',
    defaultValue: '-',
    desc: ['리사이즈 시 폭 범위', 'Width range when resized'],
  },
  {
    prop: 'resizable',
    type: 'boolean',
    defaultValue: '-',
    desc: ['개별 리사이즈 예외', 'Per-column resize opt-out'],
  },
  {
    prop: 'draggable',
    type: 'boolean',
    defaultValue: '-',
    desc: ['개별 reorder 예외', 'Per-column reorder opt-out'],
  },
  {
    prop: 'pin',
    type: "'left' | 'right'",
    defaultValue: '-',
    desc: ['좌/우 sticky 고정', 'Sticky pin to left/right'],
  },
  {
    prop: 'hidden',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['초기 숨김', 'Initially hidden'],
  },
  {
    prop: 'hideable',
    type: 'boolean',
    defaultValue: 'true',
    desc: ['컬럼 메뉴에서 토글 허용 여부', 'Whether toggle is allowed in column menu'],
  },
  {
    prop: 'align',
    type: "'left' | 'center' | 'right'",
    defaultValue: "'left'",
    desc: ['컬럼 정렬', 'Text alignment'],
  },
  {
    prop: 'renderer',
    type: "'text' | 'progress' | 'date' | (v, r) => ReactNode",
    defaultValue: "'text'",
    desc: ['셀 렌더링 방식', 'Cell render mode'],
  },
  {
    prop: 'cellStyle',
    type: '(v, r) => CSSProperties',
    defaultValue: '-',
    desc: ['값/행 기준 인라인 스타일', 'Inline style by value/row'],
  },
  {
    prop: 'cellClassName',
    type: '(v, r) => string',
    defaultValue: '-',
    desc: ['값/행 기준 클래스', 'Class name by value/row'],
  },
  {
    prop: 'aggregate',
    type: "'sum'|'avg'|'count'|'min'|'max' | (rows) => ReactNode",
    defaultValue: '-',
    desc: ['푸터 집계 (showFooter=true 필요)', 'Footer aggregate (requires showFooter=true)'],
  },
  {
    prop: 'editable',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['더블클릭 인라인 편집 활성', 'Double-click inline edit'],
  },
  {
    prop: 'editor',
    type: "'text' | 'number' | 'date' | 'dropdown'",
    defaultValue: "'text'",
    desc: ['편집 모드 input 종류', 'Editor input type'],
  },
  {
    prop: 'options',
    type: '{ value, label }[]',
    defaultValue: '-',
    desc: ["editor='dropdown' 시 선택지", "Options when editor='dropdown'"],
  },
  {
    prop: 'min / max',
    type: 'number',
    defaultValue: '0 / 100',
    desc: ["renderer='progress' 범위", "renderer='progress' range"],
  },
  {
    prop: 'dateFormat',
    type: 'string',
    defaultValue: "'YYYY-MM-DD'",
    desc: [
      "renderer='date' 포맷 (YYYY/MM/DD/HH/mm/ss)",
      "renderer='date' format (YYYY/MM/DD/HH/mm/ss)",
    ],
  },
  {
    prop: 'sortable',
    type: 'boolean',
    defaultValue: 'false',
    desc: [
      '헤더 클릭 정렬 (3-state). Shift+클릭=다중',
      'Click header to sort (3-state). Shift+click for multi',
    ],
  },
  {
    prop: 'filterable',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['헤더 funnel + popover 필터', 'Funnel button + popover filter'],
  },
];

export interface GridHandleMethod {
  method: string;
  ret: string;
  /** [ko, en] */
  desc: [string, string];
}

export const gridHandleMethods: GridHandleMethod[] = [
  {
    method: 'getSavedData()',
    ret: 'TRow[]',
    desc: [
      '편집 반영, 삭제 제외한 현재 데이터',
      'Current data with edits applied, excluding deleted',
    ],
  },
  {
    method: 'getChangedData()',
    ret: 'TRow[]',
    desc: ['편집된 행만 (PATCH 페이로드)', 'Edited rows only (PATCH payload)'],
  },
  {
    method: 'getDeletedData()',
    ret: 'TRow[]',
    desc: ['삭제된 행의 원본 스냅샷', 'Original snapshot of deleted rows'],
  },
  {
    method: 'getSelectedIds()',
    ret: '(string | number)[]',
    desc: ['체크박스로 선택된 행 ID', 'Row IDs selected via checkbox'],
  },
  {
    method: 'deleteSelected()',
    ret: 'void',
    desc: [
      '체크박스 선택 행을 모두 삭제 bucket으로',
      'Move all checkbox-selected rows to deleted bucket',
    ],
  },
  {
    method: 'clearSelection()',
    ret: 'void',
    desc: ['체크박스 선택 해제', 'Clear checkbox selection'],
  },
  {
    method: 'reset()',
    ret: 'void',
    desc: [
      '편집·삭제·추가 내역 폐기, 원본 복원',
      'Discard edits / deletes / inserts; restore original',
    ],
  },
  {
    method: 'addRow(row, position)',
    ret: 'void',
    desc: [
      "행 추가: 'first' | 'last' | 'above-active' | 'below-active'",
      "Insert: 'first' | 'last' | 'above-active' | 'below-active'",
    ],
  },
  {
    method: 'removeSelectedRows()',
    ret: 'void',
    desc: ['셀 선택된 행을 모두 삭제 bucket으로', 'Move cell-selected rows to deleted bucket'],
  },
  {
    method: 'clearSelectedCells()',
    ret: 'void',
    desc: ['셀 선택된 셀의 값을 빈 문자열로', 'Clear values of cell-selected cells'],
  },
  {
    method: 'exportCsv(filename?, options?)',
    ret: 'void',
    desc: ['CSV 다운로드 (UTF-8 BOM, Excel 호환)', 'CSV download (UTF-8 BOM, Excel compatible)'],
  },
  {
    method: 'exportXlsx(options?)',
    ret: 'Promise<void>',
    desc: ['XLSX 다운로드 (exceljs 동적 로드)', 'XLSX download (exceljs loaded dynamically)'],
  },
  {
    method: 'getColumnVisibility()',
    ret: 'Record<string, boolean>',
    desc: ['표시/숨김 상태 반환', 'Return visibility state'],
  },
  {
    method: 'toggleColumnVisibility(colId)',
    ret: 'void',
    desc: ['표시/숨김 토글', 'Toggle visibility'],
  },
  { method: 'getView()', ret: 'GridView', desc: ['현재 view 스냅샷', 'Current view snapshot'] },
  { method: 'setView(view)', ret: 'void', desc: ['view 부분 적용', 'Apply partial view'] },
  { method: 'clearView()', ret: 'void', desc: ['view 초기 상태 리셋', 'Reset view to defaults'] },
];

/** prop 이름 배열로 GridProps에서 필터. */
export function pickGridProps(names: string[]): GridApiRow[] {
  const set = new Set(names);
  return gridProps.filter((r) => set.has(r.prop));
}

/** prop 이름 배열로 GridColumn 필드에서 필터. */
export function pickGridColumnFields(names: string[]): GridApiRow[] {
  const set = new Set(names);
  return gridColumnFields.filter((r) => set.has(r.prop));
}

/** 메서드 이름(괄호 제외) 배열로 GridHandle에서 필터. */
export function pickGridHandleMethods(names: string[]): GridHandleMethod[] {
  const set = new Set(names);
  return gridHandleMethods.filter((m) => {
    const baseName = m.method.replace(/\(.*$/, '');
    return set.has(baseName);
  });
}
