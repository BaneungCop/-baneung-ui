/**
 * 다국어 사전 — 한국어(ko) / 영어(en) 키-값 매핑.
 *
 * 키 네이밍: `<영역>.<항목>` (예: `nav.gettingStarted`, `header.search`).
 * 누락된 키는 자동으로 ko 값으로 fallback.
 */

export type Locale = 'ko' | 'en';

type Dict = Record<string, string>;

const ko: Dict = {
  // 사이드바 섹션
  'nav.gettingStarted': '시작하기',
  'nav.packages': '패키지',
  'nav.guide': '가이드',
  // 시작하기
  'nav.intro': '소개',
  'nav.install': 'Install',
  'nav.tokens': '디자인 토큰',
  // UI 자식
  'nav.catalog': '카탈로그 (전체 보기)',
  // Grid 자식
  'nav.grid.props': 'Props',
  'nav.grid.basic': '기본 사용',
  'nav.grid.customRenderer': '커스텀 렌더러',
  'nav.grid.virtualized': '가상화 모드',
  'nav.grid.pagination': '내장 페이지네이션',
  'nav.grid.externalPagination': '외부 페이지네이션',
  'nav.grid.editing': '인라인 편집 · 선택 · ref API',
  'nav.grid.tree': 'Tree (계층) 모드',
  'nav.grid.editorsSortFilter': '빌트인 에디터 · 정렬 · 필터',
  'nav.grid.rowOperations': '행 추가 · 삭제 · 다중 셀 선택',
  'nav.grid.csvExport': 'CSV 다운로드',
  'nav.grid.quickFilter': '빠른 검색',
  'nav.grid.multiSortResize': '다중 정렬 · 컬럼 폭 조절',
  'nav.grid.columnVisibility': '컬럼 표시 설정',
  'nav.grid.columnPin': '컬럼 고정 (좌/우)',
  'nav.grid.columnReorder': '컬럼 순서 변경',
  'nav.grid.footerAggregate': '합계 행',
  'nav.grid.conditionalStyle': '조건부 셀 강조',
  'nav.grid.keyboardNav': '키보드로 셀 이동',
  'nav.grid.contextMenu': '우클릭 메뉴',
  'nav.grid.excel': 'Excel 내보내기 · 클립보드',
  'nav.grid.saveView': '설정 자동 저장',
  'nav.grid.allFeatures': '관리자 화면 통합 예제',
  // Chart 자식 (2-level: 차트 종류 > 변형)
  'nav.chart.props': 'Props',
  'nav.chart.bar': '막대 차트',
  'nav.chart.bar.basic': '기본',
  'nav.chart.bar.stacked': '누적',
  'nav.chart.bar.horizontal': '가로 막대',
  'nav.chart.bar.positiveNegative': '양수/음수',
  'nav.chart.bar.koreanFormat': '한글 숫자 포맷',
  'nav.chart.bar.mixed': '혼합 (Pareto)',
  'nav.chart.bar.mixedSimple': '혼합 (단순)',
  'nav.chart.line': '선 차트',
  'nav.chart.line.basic': '기본',
  'nav.chart.line.smooth': '곡선 보간',
  'nav.chart.area': '영역 차트',
  'nav.chart.area.basic': '기본',
  'nav.chart.area.stacked': '누적',
  'nav.chart.scatter': '산점도 차트',
  'nav.chart.scatter.basic': '기본',
  'nav.chart.scatter.shapes': '모양 변형',
  'nav.chart.radar': '레이더 차트',
  'nav.chart.radar.basic': '기본',
  'nav.chart.radar.filled': '채움만',
  'nav.chart.radar.outline': '외곽선만',
  'nav.chart.waterfall': '폭포 차트',
  'nav.chart.flow': '플로우 차트',
  'nav.chart.flow.basic': '기본',
  'nav.chart.flow.custom': '커스텀 엣지',
  'nav.chart.flow.workflow': '워크플로',
  'nav.chart.pie': '파이 차트',
  'nav.chart.doughnut': '도넛 차트',
  // Editor 자식
  'nav.editor.props': 'Props',
  'nav.editor.basic': '기본 사용',
  'nav.editor.controlled': '제어 · HTML 출력',
  'nav.editor.image': '이미지 붙여넣기 · 드롭',
  'nav.editor.customToolbar': '커스텀 툴바',
  'nav.editor.readonly': '읽기 전용',
  'nav.editor.full': '전체 기능 · ref API',
  // Effect 패키지
  'nav.effect.typewriter': 'Typewriter',
  'nav.effect.rotatingWords': 'RotatingWords',
  'nav.effect.scrambleText': 'ScrambleText',
  'nav.effect.splitTextReveal': 'SplitTextReveal',
  'nav.effect.countUp': 'CountUp',
  'nav.effect.gradientText': 'GradientText',
  'nav.effect.blurInText': 'BlurInText',
  'nav.effect.wavyText': 'WavyText',
  'nav.effect.glitchText': 'GlitchText',
  'nav.effect.variableFontHover': 'VariableFontHover',
  'nav.effect.circularText': 'CircularText',
  'nav.effect.gravityText': 'GravityText',
  'nav.effect.spotlightText': 'SpotlightText',
  'nav.effect.ripple': 'Ripple',
  'nav.effect.confetti': 'Confetti',
  // 가이드
  'nav.accessibility': '접근성',
  'nav.versions': 'Versions',
  // 헤더
  'header.search': '검색',
  'header.themeToggle': '테마 토글',
  'header.languageToggle': '언어 토글',
  'header.openMenu': '메뉴 열기',
  'header.contact': '프로젝트 문의',
  // 프로젝트 문의 다이얼로그
  'contact.title': '함께 만들 프로젝트가 있으신가요?',
  'contact.copy':
    'AI Agent · React · Java · C++ · Flutter · Python등 다양한 언어의 개발을 진행합니다. 지금 바로 문의해 주세요.',
  'contact.company': '주식회사 바능',
  'contact.homepageBadge': '홈페이지 바로가기',
  'contact.fieldTitle': '제목',
  'contact.fieldTitlePlaceholder': '예) 디자인 시스템 도입 컨설팅 요청',
  'contact.fieldContent': '내용',
  'contact.fieldContentPlaceholder':
    '프로젝트 개요, 기간, 예산, 연락 가능 시간 등을 자유롭게 작성해주세요.',
  'contact.fieldEmail': '답장 받을 이메일',
  'contact.fieldEmailHint': '답장이 필요하면 이메일을 남겨주세요. 미입력 시 회신이 어렵습니다.',
  'contact.optional': '선택',
  'contact.send': '보내기',
  'contact.sending': '보내는 중…',
  'contact.cancel': '취소',
  'contact.close': '닫기',
  'contact.successTitle': '문의가 정상적으로 접수되었습니다.',
  'contact.successBody': '빠른 시일 내에 답변 드리겠습니다. 감사합니다.',
  'contact.errorGeneric': '발송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
  'contact.errorNetwork': '네트워크 오류 — 잠시 후 다시 시도해 주세요.',
  // 공통
  'common.koLabel': '한국어',
  'common.enLabel': 'English',
  // 페이지: 인트로 (/)
  'intro.title': '바능 디자인 시스템',
  'intro.lead':
    '바능(Baneung) 브랜드 가이드라인을 따르는 React 디자인 시스템. 각진 디자인, 절제된 컬러, 강한 타이포 위계.',
  // 페이지: Install
  'install.title': 'Install',
  'install.lead': '바능 디자인 시스템 패키지 설치 가이드. 필요한 패키지만 골라서 설치하세요.',
  'install.packagesOverview': '패키지 개요',
  'install.commonPeerDeps': '공통 peer deps: React ^18 || ^19, React DOM ^18 || ^19.',
  'install.usage': '사용',
  'install.styleImport': '스타일 임포트',
  'install.cssIsolation': 'CSS 격리 (소비자 Tailwind 사용 시)',
  'install.basicUsage': '기본 사용',
  'install.nextSteps': '다음 단계',
  // 페이지: Versions
  'versions.title': 'Versions',
  'versions.lead': '각 패키지의 버전 변경 이력. 최신이 위에 표시됩니다.',
  'versions.current': '현재',
  'versions.viewOnNpm': 'npm에서 보기 →',
  // 페이지: Accessibility
  'a11y.title': '접근성',
  'a11y.lead': 'WCAG 2.1 AA 준수. 협상 불가 — 모든 컴포넌트는 키보드, 스크린리더, 색대비를 검증.',
  // 페이지: 디자인 토큰
  'tokens.title': '디자인 토큰',
  'tokens.lead':
    '컬러 · 타이포그래피 · 스페이싱 · 라디우스 · 모션의 단일 진실 공급원 (CSS / JSON / TS 동시 export).',
  // 컴포넌트 카탈로그
  'components.title': '컴포넌트',
  'components.leadSuffix':
    '개의 컴포넌트. 각 카드의 미리보기를 클릭하면 라이브 예제와 props API 표가 있는 상세 페이지로 이동합니다.',
  // Install 본문
  'install.tokensNote':
    'ui / grid / editor 패키지에 이미 포함돼 있어 별도 설치는 필요 없습니다. 토큰만 직접 쓰고 싶을 때만 단독 설치.',
  'install.uiLayerNote':
    'ui의 styles는 @layer baneung에 격리됩니다. Grid·Editor를 함께 쓰면 layer가 자동 머지됩니다.',
  'install.uiTailwindNote':
    '소비자가 Tailwind를 자체 임포트할 때 preflight↔라이브러리 utility 충돌을 회피하는 권장 패턴.',
  'install.gridDepsNote':
    '내부 의존: @tanstack/react-virtual (가상화), class-variance-authority, clsx, tailwind-merge. Excel 내보내기 사용 시 추가로 exceljs (peer-optional) 설치 권장.',
  'install.editorDepsNote':
    '외부 에디터 라이브러리 없이 동작 — 런타임 의존성은 clsx · tailwind-merge 둘뿐.',
  'install.editorClientNote':
    "Next.js App Router에서는 상태를 다루는 페이지/컴포넌트에 'use client'가 필요합니다 (패키지 자체에는 use client가 주입되어 있습니다).",
  'install.peerDeps': 'Peer dependencies',
  'install.commonOverview': '공통 peer deps',
  // Versions
  'versions.viewNpm': 'npm',
  // Accessibility 체크리스트
  'a11y.checklistTitle': '체크리스트',
  'a11y.checklistIntro': '모든 컴포넌트가 다음 항목을 충족하도록 검증됩니다.',
  'a11y.shortcutsTitle': '주요 키보드 단축키',
  'a11y.shortcutsIntro': '데모 사이트와 컴포넌트 공통 단축키.',
  // Grid 데모 lead
  'gridDemo.quickFilter':
    '모든 visible 컬럼에 대해 부분 일치(case-insensitive) 검색. 외부 input과 연결해 그리드에 quickFilter prop으로 전달합니다.',
  'gridDemo.multiSortResize':
    '헤더 클릭으로 단일 정렬, Shift+클릭으로 2차/3차 정렬 추가. 헤더 우측 경계 드래그로 컬럼 폭을 조절합니다. onColumnResize 콜백으로 localStorage 등에 영속화 가능.',
  'gridDemo.columnVisibility':
    'showColumnMenu=true 시 우상단 ⚙️ 버튼이 나오고 체크박스 popover로 컬럼 표시/숨김. column.hidden 또는 columnVisibility prop으로도 제어 가능합니다.',
  'gridDemo.columnPin':
    "column.pin: 'left' | 'right' 로 컬럼을 좌/우에 고정. 가로 스크롤해도 자리를 유지합니다. 보통 좌측은 ID/이름, 우측은 상태/액션 컬럼에 사용.",
  'gridDemo.columnReorder':
    'reorderable=true면 헤더를 드래그&드롭으로 순서 변경. 같은 pin 그룹 안에서만 이동되어 pin 경계는 유지됩니다.',
  'gridDemo.footerAggregate':
    'column.aggregate로 컬럼별 합계/평균/개수/최소/최대 또는 임의 함수를 푸터에 자동 표시. showFooter=true와 함께 사용하며, 필터·검색이 적용된 visible 행 기준으로 계산됩니다.',
  'gridDemo.conditionalStyle':
    'column.cellStyle (인라인 스타일) 또는 column.cellClassName (Tailwind 클래스)로 값/행에 따라 셀을 강조합니다. Excel의 조건부 서식과 같은 패턴.',
  'gridDemo.keyboardNav':
    "cellSelection이 'none'이 아닐 때 자동 활성. 화살표 / Tab / Enter / Home·End / Ctrl+Home·End로 셀 이동. active 셀이 화면 안으로 자동 스크롤됩니다.",
  'gridDemo.contextMenu':
    'contextMenu=true면 기본 메뉴 (복사·붙여넣기·셀 클리어·행 삭제·CSV/Excel). 함수로 넘기면 셀별로 동적 메뉴 항목을 생성할 수 있습니다.',
  'gridDemo.excel':
    'exportXlsx ref API로 .xlsx 다운로드 (exceljs 동적 로드, 번들 미포함). clipboard 옵션을 켜면 Ctrl+C/V로 Excel과 셀 범위를 호환되게 주고받을 수 있습니다 (TSV 직렬화).',
  'gridDemo.saveView':
    'viewKey만 지정하면 정렬·컬럼 폭·표시 여부·순서가 브라우저 localStorage에 자동 저장됩니다. 페이지를 떠났다 다시 와도 마지막 설정이 그대로 복원됩니다.',
  'gridDemo.allFeatures':
    '빠른 검색 · 다중 정렬 · 컬럼 폭 조절 · 표시 설정 · 순서 변경 · 컬럼 고정 · 합계 행 · 편집 · 다중 셀 선택 · 클립보드 · 우클릭 메뉴 · 설정 자동 저장. 실제 관리자 그리드 시나리오.',
  'gridDemo.basic': '컬럼 정의와 데이터만 전달해서 그리드를 그립니다. 좌/중/우 align 지원.',
  'gridDemo.customRenderer':
    'column.renderer로 셀 표시 방식 커스터마이즈 — Badge, 포맷된 숫자, 조건부 색 등.',
  'gridDemo.virtualized':
    '5,000행 데이터셋도 가상화 모드로 부드럽게 렌더. virtualized prop 한 줄로 전환.',
  'gridDemo.pagination': '페이지당 N행 — pageSize prop만 지정하면 페이지네이션 UI가 자동 노출.',
  'gridDemo.externalPagination':
    '외부 상태로 page/onPageChange controlled. showPagination={false}로 내장 UI 숨김.',
  'gridDemo.editing':
    '셀 더블클릭 → 인라인 편집. selectable, getSavedData/getChangedData/getDeletedData ref API.',
  'gridDemo.tree': 'tree mode — getChildren으로 자식 추출, defaultExpandedIds로 초기 펼침 상태.',
  'gridDemo.editorsSortFilter':
    '빌트인 에디터 (text/number/date/dropdown) + sortable + filterable (체크박스 popover).',
  'gridDemo.rowOperations':
    '행 추가 (above/below active) · 선택 행 삭제 · 다중 셀 드래그 선택 + Delete로 클리어.',
  'gridDemo.csvExport':
    'ref.exportCsv(filename) — 편집 반영 후 다운로드. 변경분만/전체 둘 다 export 가능.',
  // Chart 데모 lead
  'chartDemo.bar':
    '카테고리별 비교에 적합한 막대 차트. xKey + yKeys로 시리즈를 지정합니다. stacked / horizontal 옵션 지원.',
  'chartDemo.barStacked': '누적 막대 (stacked=true)',
  'chartDemo.barHorizontal': '가로 막대 (horizontal=true)',
  'chartDemo.barPositiveNegative':
    '양수/음수 혼합 — 데이터에 음수만 있으면 자동으로 0 기준선 아래로 그려짐',
  'chartDemo.barKoreanFormat':
    '한글 숫자 포맷 (valueFormat="korean") — 큰 수치를 자동으로 만/억/조 단위로 표시. tooltip · 막대 위 라벨 · y축 tick 모두 일관 적용. 접근성 sr-only 테이블도 자동 포함.',
  'chartDemo.line':
    '시계열 등 연속 데이터에 적합한 선 차트. smooth로 곡선 보간, showDots로 데이터 포인트 표시.',
  'chartDemo.lineSmooth': '곡선 보간 (smooth=true)',
  'chartDemo.area':
    '누적 추세·시장 점유율 변화 등에 적합한 영역 차트. stacked + fillOpacity 조절 가능.',
  'chartDemo.areaStacked': '누적 영역 (stacked=true)',
  'chartDemo.mixed':
    '막대 + 선 혼합 차트. 우측 보조 y축 옵션으로 Pareto, 매출+누적% 등 듀얼 스케일 표현 가능.',
  'chartDemo.mixedSimple': '듀얼 축 없는 단순 mix (좌측 축 공유)',
  'chartDemo.waterfall':
    '누적 변화 시각화 — 각 막대는 이전 누적값에서 시작해 양수(녹색)/음수(빨강)만큼 위·아래로 이동. 시작/끝 total(파랑)은 0부터 풀바.',
  'chartDemo.scatter':
    '산점도 — 두 변수의 상관관계 시각화. `groupKey`로 데이터를 자동 그룹핑해 시리즈별 다른 색 점으로 렌더.',
  'chartDemo.scatterShapes':
    '시리즈별 다른 모양 — `pointStyle` 배열로 색약 사용자도 형태로 구분 가능 (개발팀=▲, 디자인팀=◆)',
  'chartDemo.radar':
    '레이더 차트 — 여러 축의 값을 방사형으로 비교. 각 데이터 행이 하나의 radar 모양이 되며 시리즈별로 채움 영역이 겹쳐서 그려짐. 개발자 역량 평가 시나리오.',
  'chartDemo.radarFilled': '외곽선 없이 채움만 (showLine={false} + fillOpacity={0.45})',
  'chartDemo.radarOutline': '외곽선만 (fillOpacity={0}) — 시리즈 간 비교가 더 명확',
  'chartDemo.flow':
    '플로우 차트 — SVG 기반 노드-엣지 그래프. 내장 4종 edge(straight/bezier/step/smoothstep) + 사용자가 path 함수를 등록해 임의 모양 edge 추가. 마우스 드래그로 캔버스 pan 가능.',
  'chartDemo.flowCustom':
    '커스텀 edge — `edgeTypes` prop에 path 함수 등록 ({sourceX, sourceY, targetX, targetY, ...} → SVG path d). 여기선 wavy(사인파)와 arc(반원) 두 가지 사용자 정의.',
  'chartDemo.flowWorkflow':
    '분기/병합 워크플로 — 결제 승인 시나리오. 노드별 색상, animated edge로 진행 강조, dashed edge로 거절 경로 차별화.',
  'chartDemo.pie': '부분/전체 비율을 표시하는 파이 차트. innerRadius로 도넛 변환 가능.',
  'chartDemo.doughnut': '도넛 차트 — PieChart wrapper. thickness로 가운데 빈 비율 조절.',
  // Editor 데모 lead
  'editorDemo.basic':
    '컨트롤되지 않은 기본 사용 — defaultValue로 초기 HTML 설정. 사용자가 자유롭게 편집.',
  'editorDemo.controlled':
    'value / onChange로 외부 state와 동기화. HTML 출력을 그대로 다른 곳에 표시 가능.',
  'editorDemo.image':
    '클립보드 붙여넣기 · 드래그&드롭 · 파일 선택. 기본은 base64 인라인, onImageUpload로 서버 업로드 연동.',
  'editorDemo.customToolbar':
    'toolbar prop으로 표시할 도구만 선택. 기본 전체 도구 중 일부만 노출하거나 순서 재배치.',
  'editorDemo.readonly': 'readOnly={true} — 편집 불가, 표시 전용 모드.',
  'editorDemo.full': '모든 기능 활성 + ref API 시연 (getHTML / setHTML / insertHTML / focus).',
  'editorDemo.props': 'Editor 컴포넌트의 모든 props와 ref API.',
  // 컴포넌트 detail 페이지
  'componentShell.backToList': '← 컴포넌트 목록',
  'componentShell.exampleHeading': '예제',
  'componentShell.installHeading': '설치 / Import',
  'componentShell.apiHeading': 'API',
  'componentShell.subpathNote':
    '서브패스 import는 트리쉐이킹 친화 — 사용하지 않는 다른 컴포넌트는 번들에 포함되지 않습니다.',
  // API 표
  'api.property': 'Property',
  'api.description': '설명',
  'api.type': 'Type',
  'api.default': '기본값',
  'api.version': 'Version',
  'api.empty': '노출 props 없음 (children만 받습니다).',
  // ── Props 페이지 (chart / grid / editor) ──
  'propsPage.method': '메서드',
  'propsPage.returns': '반환',
  'propsPage.chart.title': 'Chart · Props',
  'propsPage.chart.lead':
    '@baneung-pack/chart의 전체 props 레퍼런스 (Bar / Line / Area / Pie / Doughnut).',
  'propsPage.chart.baseSection': 'ChartBaseProps (공통)',
  'propsPage.grid.title': 'Grid · Props',
  'propsPage.grid.lead':
    '@baneung-pack/grid의 전체 props와 GridColumn 필드, GridHandle ref API 레퍼런스.',
  'propsPage.grid.columnFields': 'GridColumn 필드',
  'propsPage.grid.handleMethods': 'GridHandle (ref API)',
  'propsPage.grid.cellSelectionNote':
    '💡 cellSelection ("none" | "single" | "multi")과 selectable은 별개 축입니다. cellSelection은 그리드 셀의 시각 선택, selectable은 체크박스 기반 행 선택.',
  'propsPage.editor.title': 'Editor · Props',
  'propsPage.editor.lead': 'Editor 컴포넌트의 props, ref 핸들 메서드, 툴바 항목 레퍼런스.',
  'propsPage.editor.handleHeading': 'EditorHandle (ref)',
  'propsPage.editor.handleNote': 'useRef<EditorHandle>로 명령형 API에 접근합니다.',
  'propsPage.editor.toolbarHeading': 'ToolbarItem',
  'propsPage.editor.toolbarNote':
    'toolbar prop에 넣을 수 있는 항목들. 2차원 배열로 그룹을 나눕니다.',
  'propsPage.editor.itemColumn': '항목',
  // 코드 보기 토글
  'exampleSection.showCode': '코드 보기',
  'exampleSection.hideCode': '코드 숨기기',
  // ── Install 본문 상세 ──
  'install.pkg.tokens': 'CSS / JSON / TS 디자인 토큰 (SSOT). 모든 패키지의 기반.',
  'install.pkg.ui': '58개 React 컴포넌트 (Radix 기반).',
  'install.pkg.grid': '데이터 그리드 (가상화, 정렬·필터, Excel 호환).',
  'install.pkg.editor': '리치 텍스트 WYSIWYG 에디터 (의존성 0).',
  'install.pkg.effect':
    'Typewriter · RotatingWords · ScrambleText · SplitTextReveal · CountUp 등 비주얼 이펙트 모음. 의존성 0, Tailwind 비종속.',
  'install.effectNote':
    '의존성 React peer만. inline style 기반이라 어떤 React 앱에서도 즉시 사용 가능. prefers-reduced-motion 자동 존중.',
  'install.pkg.chart':
    '차트 라이브러리 — Canvas(chart.js) 기반 (Bar / Line / Area / Pie / Doughnut).',
  'install.chartDepsNote':
    'chart.js ^4.4.0과 react-chartjs-2 ^5.2.0을 peer dependency로 함께 설치해야 합니다. Canvas 기반이라 대량 데이터 포인트에서 가볍게 동작합니다.',
  'install.next.catalog': '컴포넌트 카탈로그',
  'install.next.catalogDesc': 'UI 58개 컴포넌트',
  'install.next.grid': 'Grid 가이드',
  'install.next.gridDesc': '데이터 그리드 데모/Props',
  'install.next.editor': 'Editor 가이드',
  'install.next.editorDesc': '리치 텍스트 에디터 데모/Props',
  'install.next.tokens': '디자인 토큰',
  'install.next.tokensDesc': '컬러/스페이싱/타이포',
  // ── Tokens 본문 ──
  'tokens.semanticColorsHeading': '시맨틱 컬러',
  'tokens.semanticColorsDesc':
    '컴포넌트가 직접 참조하는 의미 단위. 라이트/다크 테마에서 같은 토큰이 다른 RGB로 매핑됩니다.',
  'tokens.typoHeading': '타이포그래피',
  'tokens.typoDesc': 'Pretendard Variable — 한·영 단일 폰트. 4px 베이스 스케일.',
  'tokens.radiusHeading': '라디우스',
  'tokens.radiusDesc':
    '바능의 각진 디자인 원칙 — 토큰은 0/2/4 세 개만 정의됩니다. 큰 라운드는 의도적으로 미정의.',
  'tokens.spacingHeading': '스페이싱',
  'tokens.spacingDesc': '4px 베이스 — 1=4px, 2=8px, 4=16px, 8=32px ...',
  'tokens.motionHeading': '모션',
  'tokens.motionDesc':
    'duration-fast 100ms · duration-base 150ms · duration-slow 250ms. prefers-reduced-motion 존중.',
  'tokens.color.canvas': '바탕',
  'tokens.color.surface': '표면',
  'tokens.color.surface-strong': '표면 강',
  'tokens.color.inverse': '반전',
  'tokens.color.foreground': '본문',
  'tokens.color.foreground-muted': '보조',
  'tokens.color.border-default': '보더',
  'tokens.color.ring': '포커스 링',
  'tokens.color.success': '성공',
  'tokens.color.warning': '경고',
  'tokens.color.danger': '오류',
  'tokens.color.info': '정보',
  // ── Accessibility 체크리스트 + 단축키 ──
  'a11y.checklist.0': '키보드만으로 모든 동작 가능 (Tab, Shift+Tab, Enter, Space, Esc, 화살표)',
  'a11y.checklist.1': ':focus-visible 스타일 명확 (2px 토큰 ring)',
  'a11y.checklist.2': '적절한 ARIA role/state/property',
  'a11y.checklist.3': '스크린리더 라벨 (aria-label / aria-labelledby)',
  'a11y.checklist.4': '색대비 WCAG AA — 본문 4.5:1, UI 3:1 (axe-core 검증)',
  'a11y.checklist.5': 'prefers-reduced-motion 존중 (모든 애니메이션 즉시화)',
  'a11y.checklist.6': 'IME(한글 입력) 도중 의도치 않은 submit 방지',
  'a11y.checklist.7': '모바일 터치 타겟 최소 44×44px',
  'a11y.shortcut.cmdK': '명령 팔레트 열기',
  'a11y.shortcut.esc': '오버레이 닫기',
  'a11y.shortcut.tab': '다음 포커스',
  'a11y.shortcut.shiftTab': '이전 포커스',
  'a11y.shortcut.space': '버튼/체크박스 활성',
  'a11y.shortcut.enter': '버튼 활성 / 옵션 선택',
  'a11y.shortcut.upDown': '메뉴/리스트 항목 이동',
  'a11y.shortcut.leftRight': '탭/슬라이더 이동',
  'a11y.shortcut.homeEnd': '처음/끝으로 이동',
  'a11y.shortcutKeyLabel': '키',
  'a11y.shortcutActionLabel': '동작',
  // Effect 패키지 — 모션 접근성
  'a11y.motionTitle': '모션 · 애니메이션 (@baneung-pack/effect)',
  'a11y.motionIntro':
    '13개 비주얼 이펙트 컴포넌트 모두 모션 줄임 사용자와 보조 기술 사용자에 대한 동일 원칙을 따릅니다.',
  'a11y.motion.reduced':
    '`prefers-reduced-motion: reduce` 자동 존중 — 모션 줄임 OS 설정 시 모든 애니메이션이 즉시 정적 상태로 표시됩니다 (등장 효과는 final state로 즉시 보임).',
  'a11y.motion.ariaLabel':
    '`aria-label`로 원문 텍스트를 스크린리더에 한 번에 전달 — 글자 단위로 쪼개진 span을 읽지 않습니다.',
  'a11y.motion.ariaHidden':
    '애니메이션을 위해 쪼개진 글자/채널 span은 `aria-hidden="true"` — 보조 기술에 노출되지 않습니다.',
  'a11y.motion.touch':
    'hover 기반 인터랙션(VariableFontHover/SpotlightText/GravityText hover trigger)은 터치 디바이스에서는 자연스럽게 비활성 — 콘텐츠 접근 불가능하게 만들지 않습니다.',

  // 홈 페이지
  'home.tagline': '판교에서 만든 디자인 시스템 — UI · Grid · Chart · Editor.',
  'home.taglineSub': '각진 디자인, WCAG AA 접근성, 한글 우선.',
  'home.cta.explore': '패키지 둘러보기 →',
  'home.cta.install': '설치 가이드',
  'home.loading': '로딩 중…',

  // 소개 페이지 — Buttons & Toggles 데모
  'intro.demoSubtitle': 'Buttons & Toggles 데모',
  'intro.section.variantSize': 'Button — variant × size',
  'intro.section.loading': 'Loading + asChild',
  'intro.section.buttonGroup': 'ButtonGroup',
  'intro.section.toggle': 'Toggle & ToggleGroup',
  'intro.label.variantSize': 'variant \\ size',
  'intro.btn.saving': '저장 중',
  'intro.btn.github': 'GitHub로 이동',
  'intro.btn.prev': '이전',
  'intro.btn.current': '현재',
  'intro.btn.next': '다음',
  'intro.toggle.bold': '굵게',
  'intro.toggle.align': '정렬',
  'intro.toggle.left': '왼쪽',
  'intro.toggle.center': '가운데',
  'intro.toggle.right': '오른쪽',
  'intro.toggle.format': '포맷',
  'intro.aria.pagination': '페이지 이동',
  'intro.aria.vertical': '세로 그룹',
  'intro.footer.readyBadge': '출시 준비',

  // 토큰 페이지 — 타입 스케일 샘플 문구
  'tokens.typeSample': 'Baneung Design System — 바능 디자인 시스템',

  // 컴포넌트 데모 페이지 공통 라벨 (effect / 기타)
  'demo.livePreview': '라이브 미리보기',
  'demo.controls': '컨트롤',
  'demo.code': '코드',
  'demo.props': 'Props',

  // ── Effect demo pages — shared labels ──
  'effect.demo.usage': '사용',
  'effect.demo.colorPickerAria': '색상 선택',

  // ── Effect demo pages — per-page header / lead / control labels ──
  // typewriter
  'effect.demo.typewriter.title': 'Typewriter',
  'effect.demo.typewriter.lead':
    '한 글자씩 등장하는 텍스트 + 깜빡이는 커서. 1회 또는 무한 루프 모드, 크기·색·굵기·커서를 자유롭게 커스터마이즈.',
  'effect.demo.typewriter.control.text': '텍스트',
  'effect.demo.typewriter.control.mode': '모드',
  'effect.demo.typewriter.control.fontSize': '글자 크기',
  'effect.demo.typewriter.control.fontWeight': '굵기',
  'effect.demo.typewriter.control.color': '색상',
  'effect.demo.typewriter.control.cursorChar': '커서 글자 (비우면 막대)',
  'effect.demo.typewriter.modeOnce': '1회',
  'effect.demo.typewriter.modeLoop': 'Loop',
  'effect.demo.typewriter.textPlaceholder': '표시할 텍스트',
  'effect.demo.typewriter.cursorPlaceholder': '예: _, |, ▌, █',
  'effect.demo.typewriter.restart': '↻ 처음부터 다시',

  // rotating-words
  'effect.demo.rotatingWords.title': 'RotatingWords',
  'effect.demo.rotatingWords.lead':
    '고정 문구 뒤의 단어만 위로 슬라이드 + 페이드로 순환. 히어로 카피의 "We build [apps]" 같은 패턴.',
  'effect.demo.rotatingWords.control.words': '단어 (콤마로 구분)',
  'effect.demo.rotatingWords.control.mode': '모드',
  'effect.demo.rotatingWords.control.interval': '체류 시간',
  'effect.demo.rotatingWords.control.transition': '전환 시간',
  'effect.demo.rotatingWords.control.fontSize': '글자 크기',
  'effect.demo.rotatingWords.control.fontWeight': '굵기',
  'effect.demo.rotatingWords.control.color': '색상',
  'effect.demo.rotatingWords.modeOnce': '1회',
  'effect.demo.rotatingWords.modeLoop': 'Loop',

  // scramble-text
  'effect.demo.scrambleText.title': 'ScrambleText',
  'effect.demo.scrambleText.lead':
    '랜덤 글자가 빠르게 깜빡이다가 한 글자씩 자리를 찾아가는 해킹/디코딩 효과. 매트릭스/터미널 느낌의 등장 연출.',
  'effect.demo.scrambleText.control.text': '텍스트',
  'effect.demo.scrambleText.control.mode': '모드',
  'effect.demo.scrambleText.control.charPool': '글자 풀 (스크램블 소스)',
  'effect.demo.scrambleText.control.revealSpeed': 'Reveal 속도',
  'effect.demo.scrambleText.control.scrambleSpeed': 'Scramble 주기',
  'effect.demo.scrambleText.control.fontSize': '글자 크기',
  'effect.demo.scrambleText.control.fontWeight': '굵기',
  'effect.demo.scrambleText.control.color': '색상',

  // split-text-reveal
  'effect.demo.splitTextReveal.title': 'SplitTextReveal',
  'effect.demo.splitTextReveal.lead':
    '글자 또는 단어 단위로 순차적으로 페이드 + 슬라이드 인. 마운트 또는 스크롤로 들어올 때 발사.',
  'effect.demo.splitTextReveal.livePreviewMount': '라이브 미리보기 (mount 트리거)',
  'effect.demo.splitTextReveal.inViewSection': 'inView 트리거 (스크롤 reveal)',
  'effect.demo.splitTextReveal.control.text': '텍스트',
  'effect.demo.splitTextReveal.control.splitUnit': '분할 단위',
  'effect.demo.splitTextReveal.control.stagger': 'Stagger',
  'effect.demo.splitTextReveal.control.duration': 'Duration',
  'effect.demo.splitTextReveal.control.fontSize': '글자 크기',
  'effect.demo.splitTextReveal.control.fontWeight': '굵기',
  'effect.demo.splitTextReveal.control.color': '색상',

  // count-up
  'effect.demo.countUp.title': 'CountUp',
  'effect.demo.countUp.lead':
    '숫자가 부드럽게 증가/감소하는 카운터. 통계 섹션·KPI·achievement 카드에 사용. 마운트 또는 스크롤 진입 시 발사.',
  'effect.demo.countUp.inViewSection': 'inView 트리거 — KPI 섹션',
  'effect.demo.countUp.control.from': 'From',
  'effect.demo.countUp.control.to': 'To',
  'effect.demo.countUp.control.duration': 'Duration',
  'effect.demo.countUp.control.decimals': '소수점 자리수',
  'effect.demo.countUp.control.separator': '천 단위 구분자',
  'effect.demo.countUp.control.prefixSuffix': 'Prefix / Suffix',
  'effect.demo.countUp.control.fontSize': '글자 크기',
  'effect.demo.countUp.control.fontWeight': '굵기',
  'effect.demo.countUp.control.color': '색상',

  // gradient-text
  'effect.demo.gradientText.title': 'GradientText',
  'effect.demo.gradientText.lead':
    '그라데이션이 글자 위를 흐르거나 반짝이며 지나가는 효과. 히어로 타이틀·CTA 강조에 사용.',
  'effect.demo.gradientText.control.text': '텍스트',
  'effect.demo.gradientText.control.mode': '모드',
  'effect.demo.gradientText.control.direction': '흐름 방향',
  'effect.demo.gradientText.control.duration': 'Duration',
  'effect.demo.gradientText.control.flowColors': 'Flow 색상 (콤마로 구분)',
  'effect.demo.gradientText.control.shimmerBase': 'Shimmer 베이스 색',
  'effect.demo.gradientText.control.shimmerLight': 'Shimmer 빛 색상',
  'effect.demo.gradientText.control.fontSize': '글자 크기',
  'effect.demo.gradientText.control.fontWeight': '굵기',
  'effect.demo.gradientText.shimmerBaseAria': '베이스 색 선택',
  'effect.demo.gradientText.shimmerLightAria': '빛 색상 선택',

  // blur-in-text
  'effect.demo.blurInText.title': 'BlurInText',
  'effect.demo.blurInText.lead':
    '흐릿한 상태에서 선명해지며 등장하는 텍스트 효과. 마운트 또는 스크롤 진입 시 발사.',
  'effect.demo.blurInText.livePreviewMount': '라이브 미리보기 (mount 트리거)',
  'effect.demo.blurInText.control.text': '텍스트',
  'effect.demo.blurInText.control.splitUnit': '분할 단위',
  'effect.demo.blurInText.control.stagger': 'Stagger',
  'effect.demo.blurInText.control.duration': 'Duration',
  'effect.demo.blurInText.control.blurAmount': 'Blur 강도',
  'effect.demo.blurInText.control.fontSize': '글자 크기',
  'effect.demo.blurInText.control.fontWeight': '굵기',
  'effect.demo.blurInText.control.color': '색상',

  // wavy-text
  'effect.demo.wavyText.title': 'WavyText',
  'effect.demo.wavyText.lead':
    '글자들이 파도치듯(또는 통통 튀듯) 무한 반복하는 효과. 위상 차이로 자연스러운 파동 연출.',
  'effect.demo.wavyText.control.text': '텍스트',
  'effect.demo.wavyText.control.mode': '모드',
  'effect.demo.wavyText.control.amplitude': '진폭',
  'effect.demo.wavyText.control.duration': 'Duration',
  'effect.demo.wavyText.control.phaseStep': 'Phase step',
  'effect.demo.wavyText.control.fontSize': '글자 크기',
  'effect.demo.wavyText.control.fontWeight': '굵기',
  'effect.demo.wavyText.control.color': '색상',

  // glitch-text
  'effect.demo.glitchText.title': 'GlitchText',
  'effect.demo.glitchText.lead':
    'RGB 채널이 어긋나는 글리치 효과. 강도(intensity) 조절 가능, 항상 또는 hover 시에만 트리거.',
  'effect.demo.glitchText.control.text': '텍스트',
  'effect.demo.glitchText.control.trigger': '트리거',
  'effect.demo.glitchText.control.intensity': 'Intensity',
  'effect.demo.glitchText.control.speed': 'Speed',
  'effect.demo.glitchText.control.redChannel': '적색 채널',
  'effect.demo.glitchText.control.cyanChannel': '청록 채널',
  'effect.demo.glitchText.control.fontSize': '글자 크기',
  'effect.demo.glitchText.control.fontWeight': '굵기',
  'effect.demo.glitchText.control.baseColor': '베이스 색',

  // variable-font-hover
  'effect.demo.variableFontHover.title': 'VariableFontHover',
  'effect.demo.variableFontHover.lead':
    '마우스 커서가 지나가는 글자만 굵어지는 효과. Pretendard Variable / Inter Variable 등 가변 폰트와 함께 쓸 때 부드럽게 보간됨.',
  'effect.demo.variableFontHover.control.text': '텍스트',
  'effect.demo.variableFontHover.control.minWeight': '최소 굵기',
  'effect.demo.variableFontHover.control.maxWeight': '최대 굵기',
  'effect.demo.variableFontHover.control.radius': '반경',
  'effect.demo.variableFontHover.control.transition': '전환',
  'effect.demo.variableFontHover.control.fontSize': '글자 크기',
  'effect.demo.variableFontHover.control.color': '색상',

  // circular-text
  'effect.demo.circularText.title': 'CircularText',
  'effect.demo.circularText.lead':
    '원형 경로를 따라 배치된 텍스트가 회전. 배지·도장·CD 라벨·스피너 라벨에 활용.',
  'effect.demo.circularText.control.text': '텍스트 (마침표/구분자로 마무리 권장)',
  'effect.demo.circularText.control.direction': '회전 방향',
  'effect.demo.circularText.control.radius': '반지름',
  'effect.demo.circularText.control.duration': '회전 속도',
  'effect.demo.circularText.control.startAngle': '시작 각도',
  'effect.demo.circularText.control.fontSize': '글자 크기',
  'effect.demo.circularText.control.fontWeight': '굵기',
  'effect.demo.circularText.control.color': '색상',

  // gravity-text
  'effect.demo.gravityText.title': 'GravityText',
  'effect.demo.gravityText.lead':
    '글자가 중력에 떨어지거나 흩어지는 물리 효과. mount/hover/inView 트리거 지원.',
  'effect.demo.gravityText.control.text': '텍스트',
  'effect.demo.gravityText.control.trigger': '트리거',
  'effect.demo.gravityText.control.duration': 'Duration',
  'effect.demo.gravityText.control.stagger': 'Stagger',
  'effect.demo.gravityText.control.spread': 'Spread',
  'effect.demo.gravityText.control.gravity': 'Gravity',
  'effect.demo.gravityText.control.rotation': 'Rotation',
  'effect.demo.gravityText.control.fontSize': '글자 크기',
  'effect.demo.gravityText.control.fontWeight': '굵기',
  'effect.demo.gravityText.control.color': '색상',

  // spotlight-text
  'effect.demo.spotlightText.title': 'SpotlightText',
  'effect.demo.spotlightText.lead':
    '커서 주변의 글자만 밝아지고 나머지는 어두워지는 스포트라이트 효과. 다크 배경에서 가장 인상적.',
  'effect.demo.spotlightText.control.text': '텍스트',
  'effect.demo.spotlightText.control.radius': '반경',
  'effect.demo.spotlightText.control.dimOpacity': 'Dim opacity',
  'effect.demo.spotlightText.control.fontSize': '글자 크기',
  'effect.demo.spotlightText.control.fontWeight': '굵기',
  'effect.demo.spotlightText.control.baseColor': '베이스 색 (dim)',
  'effect.demo.spotlightText.control.highlightColor': '하이라이트 색',
  'effect.demo.spotlightText.baseColorAria': '베이스 색',
  'effect.demo.spotlightText.highlightColorAria': '하이라이트 색',

  // ripple
  'effect.demo.ripple.title': 'Ripple',
  'effect.demo.ripple.lead':
    '자식 요소를 감싸 클릭 위치에서 물결이 퍼지는 효과를 입혀주는 래퍼. 버튼·카드·아이콘 등 어디든 적용 가능.',
  'effect.demo.ripple.sectionButton': '버튼에 적용',
  'effect.demo.ripple.sectionCard': '카드 / 큰 영역에 적용',
  'effect.demo.ripple.sectionOptions': '옵션 컨트롤',
  'effect.demo.ripple.control.color': 'Ripple 색상 (RGBA 권장)',
  'effect.demo.ripple.control.duration': 'Duration',

  // confetti
  'effect.demo.confetti.title': 'Confetti',
  'effect.demo.confetti.lead':
    'ConfettiProvider + useConfetti() 명령형 트리거. 결제 완료·성공·축하 순간용. Canvas 기반, 0 dependency.',
  'effect.demo.confetti.sectionFire': '발사 트리거',
  'effect.demo.confetti.control.particleCount': '입자 개수',
  'effect.demo.confetti.control.spread': 'Spread',
  'effect.demo.confetti.control.shape': '입자 모양',
  'effect.demo.confetti.control.colors': '색상 (콤마 구분)',

  // animated-button
  'effect.demo.animatedButton.title': 'AnimatedButton',
  'effect.demo.animatedButton.lead':
    'idle → loading → success/error 상태가 부드럽게 모핑되는 버튼. onClick이 Promise면 자동 처리, 아니면 status prop으로 외부 제어.',
  'effect.demo.animatedButton.sectionPromise': '1. Promise 자동 모드',
  'effect.demo.animatedButton.sectionControlled': '2. 외부 제어 모드',
  'effect.demo.animatedButton.sectionSizeVariant': '3. 크기 / variant',

  // animated-tabs
  'effect.demo.animatedTabs.title': 'AnimatedTabs',
  'effect.demo.animatedTabs.lead':
    '활성 탭 인디케이터가 부드럽게 미끄러지는 탭. controlled/uncontrolled · ArrowLeft/Right 키 · role="tablist/tab/tabpanel" ARIA 완비.',
  'effect.demo.animatedTabs.sectionHorizontal': 'Horizontal (기본, Uncontrolled)',
  'effect.demo.animatedTabs.sectionVertical': 'Vertical orientation',
  'effect.demo.animatedTabs.sectionControlled': 'Controlled',
  'effect.demo.animatedTabs.sectionSizeColor': '크기 / 색상',

  // copy-button
  'effect.demo.copyButton.title': 'CopyButton',
  'effect.demo.copyButton.lead':
    '클릭 시 navigator.clipboard로 복사 + 아이콘이 copy → check로 모핑. 일정 시간 후 자동 복원, "Copied!" 툴팁 옵션.',
  'effect.demo.copyButton.sectionCodeBlock': '코드 블록 + Copy',

  // like-button
  'effect.demo.likeButton.title': 'LikeButton',
  'effect.demo.likeButton.lead':
    '클릭 시 하트가 채워지며 주변에 작은 입자가 터지는 burst 애니메이션. controlled/uncontrolled · 카운트 표시 · 키보드 토글.',
  'effect.demo.likeButton.sectionControlled': 'Controlled + count 자동 증감',
  'effect.demo.likeButton.sectionSize': '크기 변형',
  'effect.demo.likeButton.sectionColor': '색상 변형',
  'effect.demo.likeButton.sectionBurst': 'burst 입자 개수',
  'effect.demo.likeButton.sectionDisabled': '비활성화',

  // star-rating
  'effect.demo.starRating.title': 'StarRating',
  'effect.demo.starRating.lead':
    '별점 입력. hover preview · half-star · controlled/uncontrolled · 키보드 (Arrow / Home / End) · readOnly 모드.',
  'effect.demo.starRating.sectionControlled': 'Controlled (정수)',
  'effect.demo.starRating.sectionHalfStar': 'Half-star (0.5 단위)',
  'effect.demo.starRating.sectionSize': '크기 변형',
  'effect.demo.starRating.sectionMax10': '10점 만점',
  'effect.demo.starRating.sectionColor': '색상 커스터마이즈',
  'effect.demo.starRating.sectionReadOnly': 'readOnly (표시 전용)',
  'effect.demo.starRating.sectionDisabled': '비활성화',
  'effect.demo.starRating.sectionKeyboard': '키보드 접근성',

  // stepper
  'effect.demo.stepper.title': 'Stepper',
  'effect.demo.stepper.lead':
    '다단계 진행 표시기. 가로/세로, 연결선이 단계 전환에 부드럽게 채워짐. 클릭 이동 콜백 지원.',
  'effect.demo.stepper.sectionHorizontal': 'Horizontal — 체크아웃 예시 (클릭으로 이동)',
  'effect.demo.stepper.sectionVertical': 'Vertical',
  'effect.demo.stepper.sectionSize': '크기 변형',
  'effect.demo.stepper.sectionColor': '색상 변형',
};

const en: Dict = {
  // Sidebar sections
  'nav.gettingStarted': 'Getting started',
  'nav.packages': 'Packages',
  'nav.guide': 'Guide',
  // Getting started
  'nav.intro': 'Introduction',
  'nav.install': 'Install',
  'nav.tokens': 'Design tokens',
  // UI children
  'nav.catalog': 'Catalog (all)',
  // Grid children
  'nav.grid.props': 'Props',
  'nav.grid.basic': 'Basic usage',
  'nav.grid.customRenderer': 'Custom renderer',
  'nav.grid.virtualized': 'Virtualized mode',
  'nav.grid.pagination': 'Built-in pagination',
  'nav.grid.externalPagination': 'External pagination',
  'nav.grid.editing': 'Inline edit · select · ref API',
  'nav.grid.tree': 'Tree mode',
  'nav.grid.editorsSortFilter': 'Built-in editors · sort · filter',
  'nav.grid.rowOperations': 'Row add · delete · multi-cell select',
  'nav.grid.csvExport': 'CSV download',
  'nav.grid.quickFilter': 'Quick search',
  'nav.grid.multiSortResize': 'Multi-sort · column resize',
  'nav.grid.columnVisibility': 'Column visibility',
  'nav.grid.columnPin': 'Column pinning (L/R)',
  'nav.grid.columnReorder': 'Column reorder',
  'nav.grid.footerAggregate': 'Aggregate footer',
  'nav.grid.conditionalStyle': 'Conditional cell style',
  'nav.grid.keyboardNav': 'Keyboard navigation',
  'nav.grid.contextMenu': 'Context menu',
  'nav.grid.excel': 'Excel export · clipboard',
  'nav.grid.saveView': 'Auto-save view',
  'nav.grid.allFeatures': 'Admin screen — all features',
  // Chart children
  'nav.chart.props': 'Props',
  'nav.chart.bar': 'Bar chart',
  'nav.chart.bar.basic': 'Basic',
  'nav.chart.bar.stacked': 'Stacked',
  'nav.chart.bar.horizontal': 'Horizontal',
  'nav.chart.bar.positiveNegative': 'Positive / negative',
  'nav.chart.bar.koreanFormat': 'Korean number format',
  'nav.chart.bar.mixed': 'Mixed (Pareto)',
  'nav.chart.bar.mixedSimple': 'Mixed (simple)',
  'nav.chart.line': 'Line chart',
  'nav.chart.line.basic': 'Basic',
  'nav.chart.line.smooth': 'Smooth interpolation',
  'nav.chart.area': 'Area chart',
  'nav.chart.area.basic': 'Basic',
  'nav.chart.area.stacked': 'Stacked',
  'nav.chart.scatter': 'Scatter chart',
  'nav.chart.scatter.basic': 'Basic',
  'nav.chart.scatter.shapes': 'Shape variants',
  'nav.chart.radar': 'Radar chart',
  'nav.chart.radar.basic': 'Basic',
  'nav.chart.radar.filled': 'Fill only',
  'nav.chart.radar.outline': 'Outline only',
  'nav.chart.waterfall': 'Waterfall chart',
  'nav.chart.flow': 'Flow chart',
  'nav.chart.flow.basic': 'Basic',
  'nav.chart.flow.custom': 'Custom edges',
  'nav.chart.flow.workflow': 'Workflow',
  'nav.chart.pie': 'Pie chart',
  'nav.chart.doughnut': 'Doughnut chart',
  // Editor children
  'nav.editor.props': 'Props',
  'nav.editor.basic': 'Basic usage',
  'nav.editor.controlled': 'Controlled · HTML output',
  'nav.editor.image': 'Image paste · drop',
  'nav.editor.customToolbar': 'Custom toolbar',
  'nav.editor.readonly': 'Read-only',
  'nav.editor.full': 'Full features · ref API',
  // Effect package
  'nav.effect.typewriter': 'Typewriter',
  'nav.effect.rotatingWords': 'RotatingWords',
  'nav.effect.scrambleText': 'ScrambleText',
  'nav.effect.splitTextReveal': 'SplitTextReveal',
  'nav.effect.countUp': 'CountUp',
  'nav.effect.gradientText': 'GradientText',
  'nav.effect.blurInText': 'BlurInText',
  'nav.effect.wavyText': 'WavyText',
  'nav.effect.glitchText': 'GlitchText',
  'nav.effect.variableFontHover': 'VariableFontHover',
  'nav.effect.circularText': 'CircularText',
  'nav.effect.gravityText': 'GravityText',
  'nav.effect.spotlightText': 'SpotlightText',
  'nav.effect.ripple': 'Ripple',
  'nav.effect.confetti': 'Confetti',
  // Guide
  'nav.accessibility': 'Accessibility',
  'nav.versions': 'Versions',
  // Header
  'header.search': 'Search',
  'header.themeToggle': 'Toggle theme',
  'header.languageToggle': 'Toggle language',
  'header.openMenu': 'Open menu',
  'header.contact': 'Project Inquiry',
  // Project inquiry dialog
  'contact.title': 'Got a project to build together?',
  'contact.copy':
    'We work across AI Agents · React · Java · C++ · Flutter · Python and more. Reach out and let’s talk.',
  'contact.company': 'Baneung Inc.',
  'contact.homepageBadge': 'Visit homepage',
  'contact.fieldTitle': 'Subject',
  'contact.fieldTitlePlaceholder': 'e.g. Design system adoption consulting',
  'contact.fieldContent': 'Message',
  'contact.fieldContentPlaceholder':
    'Tell us about the project: scope, timeline, budget, best time to reach you, etc.',
  'contact.fieldEmail': 'Reply-to email',
  'contact.fieldEmailHint':
    'Add your email so we can reply. Without it, we cannot respond directly.',
  'contact.optional': 'optional',
  'contact.send': 'Send',
  'contact.sending': 'Sending…',
  'contact.cancel': 'Cancel',
  'contact.close': 'Close',
  'contact.successTitle': 'Your inquiry has been received.',
  'contact.successBody': 'We will get back to you shortly. Thank you.',
  'contact.errorGeneric': 'Failed to send. Please try again later.',
  'contact.errorNetwork': 'Network error — please try again later.',
  // Common
  'common.koLabel': '한국어',
  'common.enLabel': 'English',
  // Page: intro (/)
  'intro.title': 'Baneung Design System',
  'intro.lead':
    'A React design system following Baneung brand guidelines. Sharp design, restrained palette, strong typographic hierarchy.',
  // Page: Install
  'install.title': 'Install',
  'install.lead':
    'Installation guide for Baneung Design System packages. Pick the packages you need.',
  'install.packagesOverview': 'Package overview',
  'install.commonPeerDeps': 'Common peer deps: React ^18 || ^19, React DOM ^18 || ^19.',
  'install.usage': 'Usage',
  'install.styleImport': 'Style import',
  'install.cssIsolation': 'CSS isolation (when consumer uses Tailwind)',
  'install.basicUsage': 'Basic usage',
  'install.nextSteps': 'Next steps',
  // Page: Versions
  'versions.title': 'Versions',
  'versions.lead': 'Version history for each package. Latest at the top.',
  'versions.current': 'Current',
  'versions.viewOnNpm': 'View on npm →',
  // Page: Accessibility
  'a11y.title': 'Accessibility',
  'a11y.lead':
    'WCAG 2.1 AA compliant. Non-negotiable — every component is verified for keyboard, screen reader, and color contrast.',
  // Page: Design tokens
  'tokens.title': 'Design tokens',
  'tokens.lead':
    'Single source of truth for colors · typography · spacing · radius · motion (exported as CSS / JSON / TS).',
  // Components catalog
  'components.title': 'Components',
  'components.leadSuffix':
    ' components. Click any card preview to navigate to the detail page with live examples and a props API table.',
  // Install body
  'install.tokensNote':
    'Already bundled inside ui / grid / editor. Install standalone only if you want to use tokens directly.',
  'install.uiLayerNote':
    'ui styles are isolated in @layer baneung. The layer auto-merges when used together with Grid / Editor.',
  'install.uiTailwindNote':
    'Recommended pattern to avoid preflight↔library utility conflicts when the consumer imports Tailwind themselves.',
  'install.gridDepsNote':
    'Internal deps: @tanstack/react-virtual (virtualization), class-variance-authority, clsx, tailwind-merge. Install exceljs (peer-optional) for Excel export.',
  'install.editorDepsNote':
    'Works without any external editor library — runtime deps are only clsx and tailwind-merge.',
  'install.editorClientNote':
    "On Next.js App Router, pages / components handling state need 'use client' (the package itself injects use client).",
  'install.peerDeps': 'Peer dependencies',
  'install.commonOverview': 'Common peer deps',
  // Versions
  'versions.viewNpm': 'npm',
  // Accessibility checklist
  'a11y.checklistTitle': 'Checklist',
  'a11y.checklistIntro': 'Every component is verified against the following.',
  'a11y.shortcutsTitle': 'Common keyboard shortcuts',
  'a11y.shortcutsIntro': 'Shortcuts shared across the demo site and components.',
  // Grid demo leads
  'gridDemo.quickFilter':
    'Partial match (case-insensitive) search across all visible columns. Connect an external input via the quickFilter prop.',
  'gridDemo.multiSortResize':
    'Single sort on header click; Shift+click to add 2nd/3rd sort. Drag the header right edge to resize. Persist via onColumnResize (e.g. localStorage).',
  'gridDemo.columnVisibility':
    'showColumnMenu=true shows a ⚙️ button at the top-right that opens a checkbox popover. Also controllable via column.hidden or the columnVisibility prop.',
  'gridDemo.columnPin':
    "column.pin: 'left' | 'right' pins columns to either side; they stay put on horizontal scroll. Typical: ID/name on the left, status/actions on the right.",
  'gridDemo.columnReorder':
    'reorderable=true lets users drag column headers to reorder. Movement is bound within the same pin group, preserving pin boundaries.',
  'gridDemo.footerAggregate':
    'column.aggregate auto-displays sum/avg/count/min/max or a custom function in the footer. Combined with showFooter=true; computed over filter+search visible rows.',
  'gridDemo.conditionalStyle':
    'Highlight cells by value/row via column.cellStyle (inline) or column.cellClassName (Tailwind). Same pattern as Excel conditional formatting.',
  'gridDemo.keyboardNav':
    "Auto-enabled when cellSelection is not 'none'. Move cells via arrows / Tab / Enter / Home·End / Ctrl+Home·End. Active cell auto-scrolls into view.",
  'gridDemo.contextMenu':
    'contextMenu=true shows the default menu (copy · paste · clear · delete row · CSV/Excel). Pass a function to generate per-cell dynamic items.',
  'gridDemo.excel':
    'exportXlsx ref API downloads .xlsx (exceljs is loaded dynamically, not in the bundle). Enable clipboard to exchange cell ranges with Excel via Ctrl+C/V (TSV).',
  'gridDemo.saveView':
    'Just set viewKey — sort, column width, visibility, and order are auto-persisted to localStorage. Settings are restored on revisit.',
  'gridDemo.allFeatures':
    'Quick search · multi-sort · column resize · visibility · reorder · pin · aggregate footer · edit · multi-cell select · clipboard · context menu · auto-save view. Real-world admin grid scenario.',
  'gridDemo.basic':
    'Render a grid by passing columns and data only. Supports left/center/right align.',
  'gridDemo.customRenderer':
    'Customize cell rendering via column.renderer — Badge, formatted numbers, conditional colors, and more.',
  'gridDemo.virtualized':
    'Render even 5,000-row datasets smoothly with virtualized mode. Toggle with a single virtualized prop.',
  'gridDemo.pagination':
    'N rows per page — set pageSize and the pagination UI appears automatically.',
  'gridDemo.externalPagination':
    'Controlled page/onPageChange from outside. Hide built-in UI with showPagination={false}.',
  'gridDemo.editing':
    'Double-click a cell to edit inline. selectable, getSavedData/getChangedData/getDeletedData ref API.',
  'gridDemo.tree':
    'Tree mode — extract children via getChildren, set initial expanded state via defaultExpandedIds.',
  'gridDemo.editorsSortFilter':
    'Built-in editors (text/number/date/dropdown) + sortable + filterable (checkbox popover).',
  'gridDemo.rowOperations':
    'Add row (above/below active) · delete selected rows · multi-cell drag select + Delete to clear.',
  'gridDemo.csvExport':
    'ref.exportCsv(filename) — downloads after edits are applied. Export changed-only or full data.',
  // Chart demo leads
  'chartDemo.bar':
    'Bar chart for category comparison. Specify series via xKey + yKeys. Supports stacked / horizontal.',
  'chartDemo.barStacked': 'Stacked bars (stacked=true)',
  'chartDemo.barHorizontal': 'Horizontal bars (horizontal=true)',
  'chartDemo.barPositiveNegative':
    'Positive/negative mix — bars below the zero line render automatically from negative data',
  'chartDemo.barKoreanFormat':
    'Korean number format (valueFormat="korean") — large numbers auto-formatted as 만/억/조 units. Applied uniformly across tooltip, value labels, and y-axis ticks. Accessibility sr-only table included.',
  'chartDemo.line':
    'Line chart for continuous data (time series, etc.). Smooth via monotone interpolation; toggle dots with showDots.',
  'chartDemo.lineSmooth': 'Smooth interpolation (smooth=true)',
  'chartDemo.area':
    'Area chart for cumulative trends, market share over time, etc. Supports stacked + fillOpacity.',
  'chartDemo.areaStacked': 'Stacked areas (stacked=true)',
  'chartDemo.mixed':
    'Bar + Line mixed chart. Optional right y-axis enables dual-scale views like Pareto (sales + cumulative %).',
  'chartDemo.mixedSimple': 'Simple mix without dual axis (shared left axis)',
  'chartDemo.waterfall':
    'Cumulative-change visualization — each bar starts where the previous ended, going up (green) or down (red). Start/end totals (blue) are full bars from zero.',
  'chartDemo.scatter':
    'Scatter chart — visualize correlation between two variables. `groupKey` auto-groups rows into separate colored series.',
  'chartDemo.scatterShapes':
    'Different shapes per series — `pointStyle` array makes series distinguishable by form for colorblind users (Dev=▲, Design=◆)',
  'chartDemo.radar':
    'Radar chart — compare values across multiple axes radially. Each row becomes one radar shape; series overlap with translucent fill. Developer skill assessment scenario.',
  'chartDemo.radarFilled': 'Fill only, no outline (showLine={false} + fillOpacity={0.45})',
  'chartDemo.radarOutline': 'Outline only (fillOpacity={0}) — cleaner cross-series comparison',
  'chartDemo.flow':
    'Flow chart — SVG node-edge graph. 4 built-in edge types (straight/bezier/step/smoothstep) plus user-defined path functions for any shape. Mouse-drag to pan the canvas.',
  'chartDemo.flowCustom':
    'Custom edges — register path functions via `edgeTypes` prop ({sourceX, sourceY, ...} → SVG path d string). Shown here: wavy (sine) and arc (semicircle).',
  'chartDemo.flowWorkflow':
    'Branching workflow — payment approval scenario. Per-node colors, animated edges for in-flight steps, dashed edges for rejection path.',
  'chartDemo.pie': 'Pie chart for part-of-whole proportions. Set innerRadius to make a doughnut.',
  'chartDemo.doughnut':
    'Doughnut chart — a PieChart wrapper. Adjust the inner ratio with thickness.',
  // Editor demo leads
  'editorDemo.basic':
    'Uncontrolled basic usage — set initial HTML via defaultValue. Users edit freely.',
  'editorDemo.controlled':
    'Sync to external state via value / onChange. The HTML output can be displayed elsewhere as-is.',
  'editorDemo.image':
    'Clipboard paste · drag&drop · file picker. Default is base64 inline; wire up server upload via onImageUpload.',
  'editorDemo.customToolbar':
    'Use the toolbar prop to pick which tools to show. Expose a subset of the defaults or reorder them.',
  'editorDemo.readonly': 'readOnly={true} — non-editable, display-only mode.',
  'editorDemo.full':
    'All features enabled + ref API demo (getHTML / setHTML / insertHTML / focus).',
  'editorDemo.props': 'All props and ref API of the Editor component.',
  // Component detail page
  'componentShell.backToList': '← Back to components',
  'componentShell.exampleHeading': 'Example',
  'componentShell.installHeading': 'Install / Import',
  'componentShell.apiHeading': 'API',
  'componentShell.subpathNote':
    'Subpath imports are tree-shaking friendly — unused components are excluded from the bundle.',
  // API table
  'api.property': 'Property',
  'api.description': 'Description',
  'api.type': 'Type',
  'api.default': 'Default',
  'api.version': 'Version',
  'api.empty': 'No exposed props (accepts children only).',
  // ── Props pages (chart / grid / editor) ──
  'propsPage.method': 'Method',
  'propsPage.returns': 'Returns',
  'propsPage.chart.title': 'Chart · Props',
  'propsPage.chart.lead':
    'Reference for all props of @baneung-pack/chart (Bar / Line / Area / Pie / Doughnut).',
  'propsPage.chart.baseSection': 'ChartBaseProps (shared)',
  'propsPage.grid.title': 'Grid · Props',
  'propsPage.grid.lead':
    'Reference for all props of @baneung-pack/grid, the GridColumn fields, and the GridHandle ref API.',
  'propsPage.grid.columnFields': 'GridColumn fields',
  'propsPage.grid.handleMethods': 'GridHandle (ref API)',
  'propsPage.grid.cellSelectionNote':
    '💡 cellSelection ("none" | "single" | "multi") and selectable are independent axes — cellSelection is for visual cell selection, selectable is for checkbox-based row selection.',
  'propsPage.editor.title': 'Editor · Props',
  'propsPage.editor.lead':
    'Reference for Editor component props, ref handle methods, and toolbar items.',
  'propsPage.editor.handleHeading': 'EditorHandle (ref)',
  'propsPage.editor.handleNote': 'Use useRef<EditorHandle> to access the imperative API.',
  'propsPage.editor.toolbarHeading': 'ToolbarItem',
  'propsPage.editor.toolbarNote':
    'Items you can put in the toolbar prop. Use a 2D array to group them.',
  'propsPage.editor.itemColumn': 'Item',
  // Show code toggle
  'exampleSection.showCode': 'Show code',
  'exampleSection.hideCode': 'Hide code',
  // ── Install body ──
  'install.pkg.tokens': 'Design tokens (CSS / JSON / TS — SSOT). Foundation for all packages.',
  'install.pkg.ui': '58 React components (Radix-based).',
  'install.pkg.grid': 'Data grid (virtualization, sort/filter, Excel compatible).',
  'install.pkg.editor': 'Rich text WYSIWYG editor (zero dependencies).',
  'install.pkg.effect':
    'Visual effect components — Typewriter, RotatingWords, ScrambleText, SplitTextReveal, CountUp. Zero deps, Tailwind-independent.',
  'install.effectNote':
    'React peer only. Inline-style based — works in any React app. Honors prefers-reduced-motion automatically.',
  'install.pkg.chart':
    'Chart library — Canvas-based on chart.js (Bar / Line / Area / Pie / Doughnut).',
  'install.chartDepsNote':
    'Install chart.js ^4.4.0 and react-chartjs-2 ^5.2.0 alongside as peer dependencies. Canvas-based — light on large datasets.',
  'install.next.catalog': 'Component catalog',
  'install.next.catalogDesc': '58 UI components',
  'install.next.grid': 'Grid guide',
  'install.next.gridDesc': 'Data grid demos / props',
  'install.next.editor': 'Editor guide',
  'install.next.editorDesc': 'Rich text editor demos / props',
  'install.next.tokens': 'Design tokens',
  'install.next.tokensDesc': 'Colors / spacing / typography',
  // ── Tokens body ──
  'tokens.semanticColorsHeading': 'Semantic colors',
  'tokens.semanticColorsDesc':
    'Meaningful units that components reference directly. The same token maps to different RGB values in light/dark themes.',
  'tokens.typoHeading': 'Typography',
  'tokens.typoDesc': 'Pretendard Variable — a single font for Korean/English. 4px base scale.',
  'tokens.radiusHeading': 'Radius',
  'tokens.radiusDesc':
    "Following Baneung's sharp design principle — only three tokens defined (0/2/4). Large rounding is intentionally omitted.",
  'tokens.spacingHeading': 'Spacing',
  'tokens.spacingDesc': '4px base — 1=4px, 2=8px, 4=16px, 8=32px ...',
  'tokens.motionHeading': 'Motion',
  'tokens.motionDesc':
    'duration-fast 100ms · duration-base 150ms · duration-slow 250ms. Honors prefers-reduced-motion.',
  'tokens.color.canvas': 'Canvas',
  'tokens.color.surface': 'Surface',
  'tokens.color.surface-strong': 'Surface (strong)',
  'tokens.color.inverse': 'Inverse',
  'tokens.color.foreground': 'Foreground',
  'tokens.color.foreground-muted': 'Foreground (muted)',
  'tokens.color.border-default': 'Border',
  'tokens.color.ring': 'Focus ring',
  'tokens.color.success': 'Success',
  'tokens.color.warning': 'Warning',
  'tokens.color.danger': 'Danger',
  'tokens.color.info': 'Info',
  // ── Accessibility checklist + shortcuts ──
  'a11y.checklist.0':
    'Every interaction is keyboard-only (Tab, Shift+Tab, Enter, Space, Esc, arrows).',
  'a11y.checklist.1': 'Clear :focus-visible style (2px token ring).',
  'a11y.checklist.2': 'Proper ARIA role / state / property.',
  'a11y.checklist.3': 'Screen reader label (aria-label / aria-labelledby).',
  'a11y.checklist.4': 'WCAG AA color contrast — text 4.5:1, UI 3:1 (verified by axe-core).',
  'a11y.checklist.5': 'Honors prefers-reduced-motion (all animations become instant).',
  'a11y.checklist.6': 'Prevents unintended submit during IME composition.',
  'a11y.checklist.7': 'Mobile touch targets at least 44×44px.',
  'a11y.shortcut.cmdK': 'Open command palette',
  'a11y.shortcut.esc': 'Close overlay',
  'a11y.shortcut.tab': 'Next focus',
  'a11y.shortcut.shiftTab': 'Previous focus',
  'a11y.shortcut.space': 'Activate button / checkbox',
  'a11y.shortcut.enter': 'Activate button / select option',
  'a11y.shortcut.upDown': 'Move menu / list item',
  'a11y.shortcut.leftRight': 'Move tab / slider',
  'a11y.shortcut.homeEnd': 'Go to first / last',
  'a11y.shortcutKeyLabel': 'Keys',
  'a11y.shortcutActionLabel': 'Action',
  // Effect package — motion accessibility
  'a11y.motionTitle': 'Motion & animation (@baneung-pack/effect)',
  'a11y.motionIntro':
    'All 13 visual effect components follow the same principles for users with motion-reduction preferences and assistive tech.',
  'a11y.motion.reduced':
    'Auto-respects `prefers-reduced-motion: reduce` — when the OS setting is on, all animations switch to a static final state immediately (entry effects display fully shown right away).',
  'a11y.motion.ariaLabel':
    '`aria-label` exposes the original text to screen readers as one piece — split-letter spans are not read individually.',
  'a11y.motion.ariaHidden':
    'Letter / channel spans split for animation use `aria-hidden="true"` — invisible to assistive tech.',
  'a11y.motion.touch':
    'Hover-based interactions (VariableFontHover / SpotlightText / GravityText hover trigger) are naturally inactive on touch devices — content is never made inaccessible.',

  // Home page
  'home.tagline': 'A design system from Pangyo — UI · Grid · Chart · Editor.',
  'home.taglineSub': 'Sharp/angular design, WCAG AA accessibility, Korean-first.',
  'home.cta.explore': 'Explore packages →',
  'home.cta.install': 'Install guide',
  'home.loading': 'Loading…',

  // Intro page — Buttons & Toggles demo
  'intro.demoSubtitle': 'Buttons & Toggles demo',
  'intro.section.variantSize': 'Button — variant × size',
  'intro.section.loading': 'Loading + asChild',
  'intro.section.buttonGroup': 'ButtonGroup',
  'intro.section.toggle': 'Toggle & ToggleGroup',
  'intro.label.variantSize': 'variant \\ size',
  'intro.btn.saving': 'Saving',
  'intro.btn.github': 'Open GitHub',
  'intro.btn.prev': 'Prev',
  'intro.btn.current': 'Current',
  'intro.btn.next': 'Next',
  'intro.toggle.bold': 'Bold',
  'intro.toggle.align': 'Align',
  'intro.toggle.left': 'Left',
  'intro.toggle.center': 'Center',
  'intro.toggle.right': 'Right',
  'intro.toggle.format': 'Format',
  'intro.aria.pagination': 'Pagination',
  'intro.aria.vertical': 'Vertical group',
  'intro.footer.readyBadge': 'Ready',

  // Tokens page — type scale sample text
  'tokens.typeSample': 'Baneung Design System — 바능 디자인 시스템',

  // Demo page common labels (effect / etc.)
  'demo.livePreview': 'Live preview',
  'demo.controls': 'Controls',
  'demo.code': 'Code',
  'demo.props': 'Props',

  // ── Effect demo pages — shared labels ──
  'effect.demo.usage': 'Usage',
  'effect.demo.colorPickerAria': 'Pick color',

  // ── Effect demo pages — per-page header / lead / control labels ──
  // typewriter
  'effect.demo.typewriter.title': 'Typewriter',
  'effect.demo.typewriter.lead':
    'Text that appears one character at a time with a blinking cursor. One-shot or infinite loop mode, with full control over size, color, weight, and cursor.',
  'effect.demo.typewriter.control.text': 'Text',
  'effect.demo.typewriter.control.mode': 'Mode',
  'effect.demo.typewriter.control.fontSize': 'Font size',
  'effect.demo.typewriter.control.fontWeight': 'Weight',
  'effect.demo.typewriter.control.color': 'Color',
  'effect.demo.typewriter.control.cursorChar': 'Cursor char (empty = bar)',
  'effect.demo.typewriter.modeOnce': 'Once',
  'effect.demo.typewriter.modeLoop': 'Loop',
  'effect.demo.typewriter.textPlaceholder': 'Text to display',
  'effect.demo.typewriter.cursorPlaceholder': 'e.g. _, |, ▌, █',
  'effect.demo.typewriter.restart': '↻ Restart from beginning',

  // rotating-words
  'effect.demo.rotatingWords.title': 'RotatingWords',
  'effect.demo.rotatingWords.lead':
    'Cycles only the trailing word with a slide-up + fade transition. Pattern like the hero copy "We build [apps]".',
  'effect.demo.rotatingWords.control.words': 'Words (comma-separated)',
  'effect.demo.rotatingWords.control.mode': 'Mode',
  'effect.demo.rotatingWords.control.interval': 'Dwell time',
  'effect.demo.rotatingWords.control.transition': 'Transition time',
  'effect.demo.rotatingWords.control.fontSize': 'Font size',
  'effect.demo.rotatingWords.control.fontWeight': 'Weight',
  'effect.demo.rotatingWords.control.color': 'Color',
  'effect.demo.rotatingWords.modeOnce': 'Once',
  'effect.demo.rotatingWords.modeLoop': 'Loop',

  // scramble-text
  'effect.demo.scrambleText.title': 'ScrambleText',
  'effect.demo.scrambleText.lead':
    'Random characters flicker quickly and then settle into place one by one — a hacking / decoding effect. Matrix / terminal feel on entry.',
  'effect.demo.scrambleText.control.text': 'Text',
  'effect.demo.scrambleText.control.mode': 'Mode',
  'effect.demo.scrambleText.control.charPool': 'Char pool (scramble source)',
  'effect.demo.scrambleText.control.revealSpeed': 'Reveal speed',
  'effect.demo.scrambleText.control.scrambleSpeed': 'Scramble interval',
  'effect.demo.scrambleText.control.fontSize': 'Font size',
  'effect.demo.scrambleText.control.fontWeight': 'Weight',
  'effect.demo.scrambleText.control.color': 'Color',

  // split-text-reveal
  'effect.demo.splitTextReveal.title': 'SplitTextReveal',
  'effect.demo.splitTextReveal.lead':
    'Sequentially fade + slide-in by character or word. Triggers on mount or when scrolled into view.',
  'effect.demo.splitTextReveal.livePreviewMount': 'Live preview (mount trigger)',
  'effect.demo.splitTextReveal.inViewSection': 'inView trigger (scroll reveal)',
  'effect.demo.splitTextReveal.control.text': 'Text',
  'effect.demo.splitTextReveal.control.splitUnit': 'Split unit',
  'effect.demo.splitTextReveal.control.stagger': 'Stagger',
  'effect.demo.splitTextReveal.control.duration': 'Duration',
  'effect.demo.splitTextReveal.control.fontSize': 'Font size',
  'effect.demo.splitTextReveal.control.fontWeight': 'Weight',
  'effect.demo.splitTextReveal.control.color': 'Color',

  // count-up
  'effect.demo.countUp.title': 'CountUp',
  'effect.demo.countUp.lead':
    'Number counter that smoothly counts up or down. For stats sections, KPIs, and achievement cards. Fires on mount or when scrolled into view.',
  'effect.demo.countUp.inViewSection': 'inView trigger — KPI section',
  'effect.demo.countUp.control.from': 'From',
  'effect.demo.countUp.control.to': 'To',
  'effect.demo.countUp.control.duration': 'Duration',
  'effect.demo.countUp.control.decimals': 'Decimal places',
  'effect.demo.countUp.control.separator': 'Thousands separator',
  'effect.demo.countUp.control.prefixSuffix': 'Prefix / Suffix',
  'effect.demo.countUp.control.fontSize': 'Font size',
  'effect.demo.countUp.control.fontWeight': 'Weight',
  'effect.demo.countUp.control.color': 'Color',

  // gradient-text
  'effect.demo.gradientText.title': 'GradientText',
  'effect.demo.gradientText.lead':
    'Gradients that flow over the text or sweep across as a shimmer. Used to emphasize hero titles and CTAs.',
  'effect.demo.gradientText.control.text': 'Text',
  'effect.demo.gradientText.control.mode': 'Mode',
  'effect.demo.gradientText.control.direction': 'Flow direction',
  'effect.demo.gradientText.control.duration': 'Duration',
  'effect.demo.gradientText.control.flowColors': 'Flow colors (comma-separated)',
  'effect.demo.gradientText.control.shimmerBase': 'Shimmer base color',
  'effect.demo.gradientText.control.shimmerLight': 'Shimmer light color',
  'effect.demo.gradientText.control.fontSize': 'Font size',
  'effect.demo.gradientText.control.fontWeight': 'Weight',
  'effect.demo.gradientText.shimmerBaseAria': 'Pick base color',
  'effect.demo.gradientText.shimmerLightAria': 'Pick light color',

  // blur-in-text
  'effect.demo.blurInText.title': 'BlurInText',
  'effect.demo.blurInText.lead':
    'Text effect that comes into focus from a blurred state. Fires on mount or when scrolled into view.',
  'effect.demo.blurInText.livePreviewMount': 'Live preview (mount trigger)',
  'effect.demo.blurInText.control.text': 'Text',
  'effect.demo.blurInText.control.splitUnit': 'Split unit',
  'effect.demo.blurInText.control.stagger': 'Stagger',
  'effect.demo.blurInText.control.duration': 'Duration',
  'effect.demo.blurInText.control.blurAmount': 'Blur amount',
  'effect.demo.blurInText.control.fontSize': 'Font size',
  'effect.demo.blurInText.control.fontWeight': 'Weight',
  'effect.demo.blurInText.control.color': 'Color',

  // wavy-text
  'effect.demo.wavyText.title': 'WavyText',
  'effect.demo.wavyText.lead':
    'Characters that wave (or bounce) in an infinite loop. Phase offsets create a natural wave-like motion.',
  'effect.demo.wavyText.control.text': 'Text',
  'effect.demo.wavyText.control.mode': 'Mode',
  'effect.demo.wavyText.control.amplitude': 'Amplitude',
  'effect.demo.wavyText.control.duration': 'Duration',
  'effect.demo.wavyText.control.phaseStep': 'Phase step',
  'effect.demo.wavyText.control.fontSize': 'Font size',
  'effect.demo.wavyText.control.fontWeight': 'Weight',
  'effect.demo.wavyText.control.color': 'Color',

  // glitch-text
  'effect.demo.glitchText.title': 'GlitchText',
  'effect.demo.glitchText.lead':
    'A glitch effect where the RGB channels separate. Intensity is adjustable; always-on or hover-only trigger.',
  'effect.demo.glitchText.control.text': 'Text',
  'effect.demo.glitchText.control.trigger': 'Trigger',
  'effect.demo.glitchText.control.intensity': 'Intensity',
  'effect.demo.glitchText.control.speed': 'Speed',
  'effect.demo.glitchText.control.redChannel': 'Red channel',
  'effect.demo.glitchText.control.cyanChannel': 'Cyan channel',
  'effect.demo.glitchText.control.fontSize': 'Font size',
  'effect.demo.glitchText.control.fontWeight': 'Weight',
  'effect.demo.glitchText.control.baseColor': 'Base color',

  // variable-font-hover
  'effect.demo.variableFontHover.title': 'VariableFontHover',
  'effect.demo.variableFontHover.lead':
    'Characters thicken as the mouse passes over them. Smoothly interpolated when paired with a variable font like Pretendard Variable or Inter Variable.',
  'effect.demo.variableFontHover.control.text': 'Text',
  'effect.demo.variableFontHover.control.minWeight': 'Min weight',
  'effect.demo.variableFontHover.control.maxWeight': 'Max weight',
  'effect.demo.variableFontHover.control.radius': 'Radius',
  'effect.demo.variableFontHover.control.transition': 'Transition',
  'effect.demo.variableFontHover.control.fontSize': 'Font size',
  'effect.demo.variableFontHover.control.color': 'Color',

  // circular-text
  'effect.demo.circularText.title': 'CircularText',
  'effect.demo.circularText.lead':
    'Text laid out along a circular path that rotates. Useful for badges, stamps, CD labels, and spinner labels.',
  'effect.demo.circularText.control.text': 'Text (ending with a separator is recommended)',
  'effect.demo.circularText.control.direction': 'Direction',
  'effect.demo.circularText.control.radius': 'Radius',
  'effect.demo.circularText.control.duration': 'Rotation speed',
  'effect.demo.circularText.control.startAngle': 'Start angle',
  'effect.demo.circularText.control.fontSize': 'Font size',
  'effect.demo.circularText.control.fontWeight': 'Weight',
  'effect.demo.circularText.control.color': 'Color',

  // gravity-text
  'effect.demo.gravityText.title': 'GravityText',
  'effect.demo.gravityText.lead':
    'A physics effect where characters fall under gravity or scatter. Supports mount / hover / inView triggers.',
  'effect.demo.gravityText.control.text': 'Text',
  'effect.demo.gravityText.control.trigger': 'Trigger',
  'effect.demo.gravityText.control.duration': 'Duration',
  'effect.demo.gravityText.control.stagger': 'Stagger',
  'effect.demo.gravityText.control.spread': 'Spread',
  'effect.demo.gravityText.control.gravity': 'Gravity',
  'effect.demo.gravityText.control.rotation': 'Rotation',
  'effect.demo.gravityText.control.fontSize': 'Font size',
  'effect.demo.gravityText.control.fontWeight': 'Weight',
  'effect.demo.gravityText.control.color': 'Color',

  // spotlight-text
  'effect.demo.spotlightText.title': 'SpotlightText',
  'effect.demo.spotlightText.lead':
    'A spotlight effect — only characters near the cursor brighten while the rest dim. Most striking on a dark background.',
  'effect.demo.spotlightText.control.text': 'Text',
  'effect.demo.spotlightText.control.radius': 'Radius',
  'effect.demo.spotlightText.control.dimOpacity': 'Dim opacity',
  'effect.demo.spotlightText.control.fontSize': 'Font size',
  'effect.demo.spotlightText.control.fontWeight': 'Weight',
  'effect.demo.spotlightText.control.baseColor': 'Base color (dim)',
  'effect.demo.spotlightText.control.highlightColor': 'Highlight color',
  'effect.demo.spotlightText.baseColorAria': 'Base color',
  'effect.demo.spotlightText.highlightColorAria': 'Highlight color',

  // ripple
  'effect.demo.ripple.title': 'Ripple',
  'effect.demo.ripple.lead':
    'A wrapper that adds a click-position ripple effect to its child element. Works on buttons, cards, icons — anywhere.',
  'effect.demo.ripple.sectionButton': 'Apply to a button',
  'effect.demo.ripple.sectionCard': 'Apply to a card / large area',
  'effect.demo.ripple.sectionOptions': 'Option controls',
  'effect.demo.ripple.control.color': 'Ripple color (RGBA recommended)',
  'effect.demo.ripple.control.duration': 'Duration',

  // confetti
  'effect.demo.confetti.title': 'Confetti',
  'effect.demo.confetti.lead':
    'ConfettiProvider + useConfetti() imperative trigger. For payment completion, success, or celebration moments. Canvas-based, zero dependencies.',
  'effect.demo.confetti.sectionFire': 'Fire trigger',
  'effect.demo.confetti.control.particleCount': 'Particle count',
  'effect.demo.confetti.control.spread': 'Spread',
  'effect.demo.confetti.control.shape': 'Particle shape',
  'effect.demo.confetti.control.colors': 'Colors (comma-separated)',

  // animated-button
  'effect.demo.animatedButton.title': 'AnimatedButton',
  'effect.demo.animatedButton.lead':
    'A button that smoothly morphs through idle → loading → success/error states. If onClick is a Promise it auto-handles, otherwise control externally via the status prop.',
  'effect.demo.animatedButton.sectionPromise': '1. Promise auto mode',
  'effect.demo.animatedButton.sectionControlled': '2. External control mode',
  'effect.demo.animatedButton.sectionSizeVariant': '3. Size / variant',

  // animated-tabs
  'effect.demo.animatedTabs.title': 'AnimatedTabs',
  'effect.demo.animatedTabs.lead':
    'Tabs whose active indicator slides smoothly. controlled/uncontrolled · ArrowLeft/Right keys · full role="tablist/tab/tabpanel" ARIA.',
  'effect.demo.animatedTabs.sectionHorizontal': 'Horizontal (default, uncontrolled)',
  'effect.demo.animatedTabs.sectionVertical': 'Vertical orientation',
  'effect.demo.animatedTabs.sectionControlled': 'Controlled',
  'effect.demo.animatedTabs.sectionSizeColor': 'Size / color',

  // copy-button
  'effect.demo.copyButton.title': 'CopyButton',
  'effect.demo.copyButton.lead':
    'On click, copies via navigator.clipboard and morphs the icon copy → check. Auto-reverts after a delay; optional "Copied!" tooltip.',
  'effect.demo.copyButton.sectionCodeBlock': 'Code block + Copy',

  // like-button
  'effect.demo.likeButton.title': 'LikeButton',
  'effect.demo.likeButton.lead':
    'On click, the heart fills with a burst of small particles around it. controlled/uncontrolled · count display · keyboard toggle.',
  'effect.demo.likeButton.sectionControlled': 'Controlled + auto count increment/decrement',
  'effect.demo.likeButton.sectionSize': 'Size variants',
  'effect.demo.likeButton.sectionColor': 'Color variants',
  'effect.demo.likeButton.sectionBurst': 'Burst particle count',
  'effect.demo.likeButton.sectionDisabled': 'Disabled',

  // star-rating
  'effect.demo.starRating.title': 'StarRating',
  'effect.demo.starRating.lead':
    'Star rating input. Hover preview · half-star · controlled/uncontrolled · keyboard (Arrow / Home / End) · readOnly mode.',
  'effect.demo.starRating.sectionControlled': 'Controlled (integer)',
  'effect.demo.starRating.sectionHalfStar': 'Half-star (0.5 step)',
  'effect.demo.starRating.sectionSize': 'Size variants',
  'effect.demo.starRating.sectionMax10': 'Out of 10',
  'effect.demo.starRating.sectionColor': 'Color customization',
  'effect.demo.starRating.sectionReadOnly': 'readOnly (display-only)',
  'effect.demo.starRating.sectionDisabled': 'Disabled',
  'effect.demo.starRating.sectionKeyboard': 'Keyboard accessibility',

  // stepper
  'effect.demo.stepper.title': 'Stepper',
  'effect.demo.stepper.lead':
    'A multi-step progress indicator. Horizontal/vertical, with the connector smoothly filling between step transitions. Supports a click-to-navigate callback.',
  'effect.demo.stepper.sectionHorizontal': 'Horizontal — checkout example (click to move)',
  'effect.demo.stepper.sectionVertical': 'Vertical',
  'effect.demo.stepper.sectionSize': 'Size variants',
  'effect.demo.stepper.sectionColor': 'Color variants',
};

export const dictionaries: Record<Locale, Dict> = { ko, en };
