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
  // Editor 자식
  'nav.editor.props': 'Props',
  'nav.editor.basic': '기본 사용',
  'nav.editor.controlled': '제어 · HTML 출력',
  'nav.editor.image': '이미지 붙여넣기 · 드롭',
  'nav.editor.customToolbar': '커스텀 툴바',
  'nav.editor.readonly': '읽기 전용',
  'nav.editor.full': '전체 기능 · ref API',
  // 가이드
  'nav.accessibility': '접근성',
  'nav.versions': 'Versions',
  // 헤더
  'header.search': '검색',
  'header.themeToggle': '테마 토글',
  'header.languageToggle': '언어 토글',
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
  // Editor children
  'nav.editor.props': 'Props',
  'nav.editor.basic': 'Basic usage',
  'nav.editor.controlled': 'Controlled · HTML output',
  'nav.editor.image': 'Image paste · drop',
  'nav.editor.customToolbar': 'Custom toolbar',
  'nav.editor.readonly': 'Read-only',
  'nav.editor.full': 'Full features · ref API',
  // Guide
  'nav.accessibility': 'Accessibility',
  'nav.versions': 'Versions',
  // Header
  'header.search': 'Search',
  'header.themeToggle': 'Toggle theme',
  'header.languageToggle': 'Toggle language',
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
};

export const dictionaries: Record<Locale, Dict> = { ko, en };
