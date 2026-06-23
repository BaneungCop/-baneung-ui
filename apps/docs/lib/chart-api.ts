/**
 * Chart 패키지의 props 데이터 — /chart/props 페이지와 각 데모 페이지가 공유.
 * `desc: [ko, en]` 형식으로 locale 분기.
 */

export interface ChartApiRow {
  prop: string;
  type: string;
  defaultValue: string;
  /** [ko, en] */
  desc: [string, string];
}

/** ChartBaseProps — 모든 차트가 공유. */
export const chartBaseProps: ChartApiRow[] = [
  {
    prop: 'data',
    type: 'Record<string, unknown>[]',
    defaultValue: '필수',
    desc: ['차트 데이터 배열', 'Chart data array'],
  },
  {
    prop: 'height',
    type: 'number',
    defaultValue: '300',
    desc: ['차트 높이(px). 너비는 부모 100%', 'Chart height (px). Width fills parent'],
  },
  {
    prop: 'colors',
    type: 'readonly string[]',
    defaultValue: 'DEFAULT_COLORS',
    desc: [
      '시리즈 컬러 팔레트 (navy/teal 기반 10색)',
      'Series color palette (10 navy/teal colors)',
    ],
  },
  {
    prop: 'showGrid',
    type: 'boolean',
    defaultValue: 'true',
    desc: ['그리드 표시 (Pie/Doughnut에는 무시)', 'Show grid (ignored on Pie/Doughnut)'],
  },
  { prop: 'showLegend', type: 'boolean', defaultValue: 'true', desc: ['범례 표시', 'Show legend'] },
  {
    prop: 'showTooltip',
    type: 'boolean',
    defaultValue: 'true',
    desc: ['툴팁 표시', 'Show tooltip'],
  },
  {
    prop: 'emptyState',
    type: 'ReactNode',
    defaultValue: '-',
    desc: ['빈 데이터일 때 표시', 'Shown when data is empty'],
  },
  {
    prop: 'className',
    type: 'string',
    defaultValue: '-',
    desc: ['외부 wrapper className', 'Outer wrapper className'],
  },
  {
    prop: 'valueFormat',
    type: "'plain' | 'comma' | 'korean' | (n: number) => string",
    defaultValue: "'plain'",
    desc: [
      '숫자 포맷 (tooltip / 라벨 / y축 tick 일관 적용). `korean` → 125만/1.2억, `comma` → 1,250,000, 함수로 단위 suffix 가능',
      'Number format applied uniformly (tooltip / labels / y-axis ticks). `korean` → 125만/1.2억, `comma` → 1,250,000, function for unit suffix',
    ],
  },
  {
    prop: 'a11yTable',
    type: 'boolean',
    defaultValue: 'true',
    desc: [
      '접근성용 sr-only 데이터 테이블 자동 렌더 (스크린리더가 canvas 차트 데이터를 읽을 수 있게 함)',
      'Auto-render sr-only data table for screen readers (lets them read canvas chart data)',
    ],
  },
  {
    prop: 'a11yCaption',
    type: 'string',
    defaultValue: '-',
    desc: [
      'sr-only 테이블 caption (스크린리더가 먼저 읽음)',
      'sr-only table caption (read first by screen readers)',
    ],
  },
];

export const barChartProps: ChartApiRow[] = [
  { prop: 'xKey', type: 'string', defaultValue: '필수', desc: ['X축 키', 'X-axis key'] },
  {
    prop: 'yKeys',
    type: 'string[]',
    defaultValue: '필수',
    desc: ['Y축 키들 (시리즈)', 'Y-axis keys (series)'],
  },
  {
    prop: 'labels',
    type: 'Record<string, string>',
    defaultValue: '-',
    desc: ['시리즈 표시명 (범례·툴팁)', 'Series labels (legend/tooltip)'],
  },
  {
    prop: 'horizontal',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['가로 막대 모드', 'Horizontal bars'],
  },
  { prop: 'stacked', type: 'boolean', defaultValue: 'false', desc: ['누적 표시', 'Stacked'] },
  {
    prop: 'showValues',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['각 막대 중앙에 값 표시', 'Show value at center of each bar'],
  },
];

export const lineChartProps: ChartApiRow[] = [
  { prop: 'xKey', type: 'string', defaultValue: '필수', desc: ['X축 키', 'X-axis key'] },
  {
    prop: 'yKeys',
    type: 'string[]',
    defaultValue: '필수',
    desc: ['Y축 키들 (시리즈)', 'Y-axis keys (series)'],
  },
  {
    prop: 'labels',
    type: 'Record<string, string>',
    defaultValue: '-',
    desc: ['시리즈 표시명', 'Series labels'],
  },
  {
    prop: 'smooth',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['곡선 보간 (monotone)', 'Smooth interpolation (monotone)'],
  },
  {
    prop: 'showDots',
    type: 'boolean',
    defaultValue: 'true',
    desc: ['데이터 포인트 dot 표시', 'Show data point dots'],
  },
];

export const areaChartProps: ChartApiRow[] = [
  { prop: 'xKey', type: 'string', defaultValue: '필수', desc: ['X축 키', 'X-axis key'] },
  {
    prop: 'yKeys',
    type: 'string[]',
    defaultValue: '필수',
    desc: ['Y축 키들 (시리즈)', 'Y-axis keys (series)'],
  },
  {
    prop: 'labels',
    type: 'Record<string, string>',
    defaultValue: '-',
    desc: ['시리즈 표시명', 'Series labels'],
  },
  {
    prop: 'smooth',
    type: 'boolean',
    defaultValue: 'true',
    desc: ['곡선 보간 (기본 true)', 'Smooth interpolation (default true)'],
  },
  { prop: 'stacked', type: 'boolean', defaultValue: 'false', desc: ['누적 영역', 'Stacked areas'] },
  {
    prop: 'fillOpacity',
    type: 'number',
    defaultValue: '0.3',
    desc: ['채움 투명도 (0~1)', 'Fill opacity (0~1)'],
  },
];

export const mixedChartProps: ChartApiRow[] = [
  { prop: 'xKey', type: 'string', defaultValue: '필수', desc: ['X축 키', 'X-axis key'] },
  {
    prop: 'barKeys',
    type: 'string[]',
    defaultValue: '필수',
    desc: ['막대로 표시할 시리즈 키', 'Keys rendered as bars'],
  },
  {
    prop: 'lineKeys',
    type: 'string[]',
    defaultValue: '필수',
    desc: ['선으로 표시할 시리즈 키', 'Keys rendered as lines'],
  },
  {
    prop: 'labels',
    type: 'Record<string, string>',
    defaultValue: '-',
    desc: ['시리즈 라벨', 'Series labels'],
  },
  {
    prop: 'rightAxisKeys',
    type: 'string[]',
    defaultValue: '[]',
    desc: [
      '우측 보조 y축에 매핑할 시리즈 키 (bar/line 둘 다 가능)',
      'Keys mapped to right (secondary) y-axis (bar or line)',
    ],
  },
  {
    prop: 'rightAxisPercent',
    type: 'boolean',
    defaultValue: 'false',
    desc: [
      '우측 y축을 0~100% 범위로 고정 + "%" 단위 표시',
      'Fix right y-axis to 0~100 with "%" tick suffix',
    ],
  },
  {
    prop: 'smooth',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['선 곡선 보간', 'Smooth interpolation'],
  },
  {
    prop: 'stacked',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['막대 누적', 'Stacked bars'],
  },
  {
    prop: 'showValues',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['막대 위에 값 라벨 표시', 'Show value labels on bars'],
  },
];

export const flowChartProps: ChartApiRow[] = [
  {
    prop: 'nodes',
    type: 'FlowNode[]',
    defaultValue: '필수',
    desc: [
      '노드 배열. 각 노드: { id, label?, x, y, width?, height?, fill?, stroke?, textColor? }',
      'Node array. Each: { id, label?, x, y, width?, height?, fill?, stroke?, textColor? }',
    ],
  },
  {
    prop: 'edges',
    type: 'FlowEdge[]',
    defaultValue: '필수',
    desc: [
      '엣지 배열. { source, target, type?, label?, color?, animated?, dashed?, arrow?, sourcePosition?, targetPosition? }',
      'Edge array. { source, target, type?, label?, color?, animated?, dashed?, arrow?, sourcePosition?, targetPosition? }',
    ],
  },
  {
    prop: 'edgeTypes',
    type: 'Record<string, FlowEdgePathFn>',
    defaultValue: '{}',
    desc: [
      '사용자 정의 edge path. (sourceX, sourceY, targetX, targetY, ...) → SVG path d 문자열 반환',
      'Custom edge path functions. Receive coords + handle positions, return SVG path d string',
    ],
  },
  {
    prop: 'height',
    type: 'number',
    defaultValue: '400',
    desc: ['SVG 캔버스 높이(px)', 'SVG canvas height (px)'],
  },
  {
    prop: 'pannable',
    type: 'boolean',
    defaultValue: 'true',
    desc: ['마우스 드래그로 캔버스 pan 가능 여부', 'Allow mouse drag to pan canvas'],
  },
  {
    prop: 'showGrid',
    type: 'boolean',
    defaultValue: 'true',
    desc: ['배경 dot grid 표시', 'Show background dot grid'],
  },
  {
    prop: 'className',
    type: 'string',
    defaultValue: '-',
    desc: ['외부 wrapper className', 'Outer wrapper className'],
  },
  {
    prop: 'emptyState',
    type: 'ReactNode',
    defaultValue: '-',
    desc: ['nodes가 비어있을 때 표시', 'Shown when nodes is empty'],
  },
];

export const radarChartProps: ChartApiRow[] = [
  {
    prop: 'axes',
    type: 'string[]',
    defaultValue: '필수',
    desc: ['축으로 사용할 키 목록', 'Keys used as radar axes'],
  },
  {
    prop: 'labelKey',
    type: 'string',
    defaultValue: '필수',
    desc: [
      '시리즈 이름이 들어있는 키 (행=하나의 radar)',
      'Key holding series name (row = one radar)',
    ],
  },
  {
    prop: 'axisLabels',
    type: 'Record<string, string>',
    defaultValue: '-',
    desc: ['축 키 → 표시명 매핑', 'Axis key → display name mapping'],
  },
  {
    prop: 'max',
    type: 'number',
    defaultValue: '자동',
    desc: ['방사형 스케일 최대값 (외곽)', 'Outer radial scale max'],
  },
  {
    prop: 'fillOpacity',
    type: 'number',
    defaultValue: '0.25',
    desc: ['시리즈 채움 투명도 (0이면 외곽선만)', 'Series fill opacity (0 = outline only)'],
  },
  {
    prop: 'showLine',
    type: 'boolean',
    defaultValue: 'true',
    desc: [
      'radar 외곽선 표시. false면 채움 영역만 보임',
      'Show radar outline. false = fill area only',
    ],
  },
];

export const scatterChartProps: ChartApiRow[] = [
  { prop: 'xKey', type: 'string', defaultValue: '필수', desc: ['X 좌표 키', 'X-coordinate key'] },
  { prop: 'yKey', type: 'string', defaultValue: '필수', desc: ['Y 좌표 키', 'Y-coordinate key'] },
  {
    prop: 'groupKey',
    type: 'string',
    defaultValue: '-',
    desc: [
      '시리즈 그룹 키. 같은 값끼리 한 시리즈(같은 색)로 묶임',
      'Series group key. Rows with the same value form one series (same color)',
    ],
  },
  {
    prop: 'labels',
    type: 'Record<string, string>',
    defaultValue: '-',
    desc: ['groupKey 값 → 표시명 매핑', 'Group value → display name mapping'],
  },
  {
    prop: 'pointRadius',
    type: 'number',
    defaultValue: '5',
    desc: ['점 반지름 (px)', 'Point radius (px)'],
  },
  {
    prop: 'pointStyle',
    type: 'ScatterPointStyle | ScatterPointStyle[]',
    defaultValue: "'circle'",
    desc: [
      "점 모양. 단일 값 또는 시리즈별 배열. 'circle' | 'triangle' | 'rect' | 'rectRot' | 'star' | 'cross' | 'crossRot' | 'rectRounded' | 'dash' | 'line'",
      "Point shape. Single value or per-series array. 'circle' | 'triangle' | 'rect' | 'rectRot' | 'star' | 'cross' | 'crossRot' | 'rectRounded' | 'dash' | 'line'",
    ],
  },
  {
    prop: 'xUnit',
    type: 'string',
    defaultValue: '-',
    desc: ['X축 ticks suffix (예: "cm")', 'X-axis tick suffix (e.g. "cm")'],
  },
  {
    prop: 'yUnit',
    type: 'string',
    defaultValue: '-',
    desc: ['Y축 ticks suffix (예: "kg")', 'Y-axis tick suffix (e.g. "kg")'],
  },
];

export const waterfallChartProps: ChartApiRow[] = [
  {
    prop: 'data',
    type: 'WaterfallStep[]',
    defaultValue: '필수',
    desc: [
      '스텝 배열. `WaterfallStep`: { label, value?, total? }',
      'Step array. `WaterfallStep`: { label, value?, total? }',
    ],
  },
  {
    prop: 'positiveColor',
    type: 'string',
    defaultValue: '#10B981',
    desc: [
      '양수 기여 색상 (DEFAULT_COLORS의 emerald)',
      'Positive contribution color (emerald from DEFAULT_COLORS)',
    ],
  },
  {
    prop: 'negativeColor',
    type: 'string',
    defaultValue: '#EF4444',
    desc: [
      '음수 기여 색상 (DEFAULT_COLORS의 red)',
      'Negative contribution color (red from DEFAULT_COLORS)',
    ],
  },
  {
    prop: 'totalColor',
    type: 'string',
    defaultValue: '#1F2937',
    desc: [
      '시작/끝/소계 색상 (바능 navy-900 브랜드 메인)',
      'Start/end/subtotal color (baneung navy-900 brand main)',
    ],
  },
  {
    prop: 'showValues',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['각 막대에 변화량(+/-) 표시', 'Show signed delta on each bar'],
  },
];

export const pieChartProps: ChartApiRow[] = [
  {
    prop: 'nameKey',
    type: 'string',
    defaultValue: '필수',
    desc: ['카테고리 이름 키', 'Category name key'],
  },
  { prop: 'valueKey', type: 'string', defaultValue: '필수', desc: ['값 키', 'Value key'] },
  {
    prop: 'innerRadius',
    type: 'number',
    defaultValue: '0',
    desc: [
      '안쪽 비율(0~1). 0보다 크면 도넛. (chart.js cutout 매핑)',
      'Inner ratio (0~1). >0 makes a doughnut. (maps to chart.js cutout)',
    ],
  },
  {
    prop: 'showValues',
    type: 'boolean',
    defaultValue: 'false',
    desc: [
      '조각 내부에 퍼센트 라벨 표시 (작은 조각은 자동 숨김)',
      'Show percent label in each slice (auto-hide for small ones)',
    ],
  },
];

export const doughnutChartProps: ChartApiRow[] = [
  {
    prop: 'nameKey',
    type: 'string',
    defaultValue: '필수',
    desc: ['카테고리 이름 키', 'Category name key'],
  },
  { prop: 'valueKey', type: 'string', defaultValue: '필수', desc: ['값 키', 'Value key'] },
  {
    prop: 'thickness',
    type: 'number',
    defaultValue: '0.6',
    desc: [
      '도넛 안쪽 빈 비율 (0~1). 내부적으로 PieChart의 innerRadius로 전달',
      'Doughnut inner ratio (0~1). Passed to PieChart.innerRadius',
    ],
  },
  {
    prop: 'showValues',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['조각 내부에 퍼센트 라벨 표시', 'Show percent label in each slice'],
  },
];
