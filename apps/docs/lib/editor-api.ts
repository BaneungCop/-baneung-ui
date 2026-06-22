/**
 * Editor 패키지의 props / EditorHandle / ToolbarItem 데이터.
 *
 * /editor/props 페이지와 각 /editor/* 데모 페이지가 공유.
 * `desc: [ko, en]` 형식으로 locale 분기.
 */

export interface EditorApiRow {
  prop: string;
  type: string;
  defaultValue: string;
  /** [ko, en] */
  desc: [string, string];
}

export const editorProps: EditorApiRow[] = [
  {
    prop: 'value',
    type: 'string',
    defaultValue: '-',
    desc: ['제어 컴포넌트용 HTML 문자열', 'HTML string for controlled mode'],
  },
  {
    prop: 'defaultValue',
    type: 'string',
    defaultValue: "''",
    desc: ['비제어 초기 HTML', 'Uncontrolled initial HTML'],
  },
  {
    prop: 'onChange',
    type: '(html: string) => void',
    defaultValue: '-',
    desc: ['내용 변경 콜백', 'Content change callback'],
  },
  {
    prop: 'placeholder',
    type: 'string',
    defaultValue: "'내용을 입력하세요…'",
    desc: ['빈 상태 안내 문구', 'Empty-state placeholder'],
  },
  {
    prop: 'readOnly',
    type: 'boolean',
    defaultValue: 'false',
    desc: ['읽기 전용 — 편집·툴바 비활성', 'Read-only — disables editing & toolbar'],
  },
  {
    prop: 'toolbar',
    type: 'ToolbarConfig | false',
    defaultValue: '전체 툴바',
    desc: ['툴바 구성(1D/2D 배열) 또는 숨김', 'Toolbar config (1D/2D array) or hidden'],
  },
  {
    prop: 'onImageUpload',
    type: '(file: File) => Promise<string>',
    defaultValue: 'base64',
    desc: [
      '이미지 업로드 핸들러. 반환 URL을 src로 삽입',
      'Image upload handler. The returned URL becomes the src',
    ],
  },
  {
    prop: 'minHeight',
    type: 'number | string',
    defaultValue: '240',
    desc: ['본문 최소 높이', 'Minimum content height'],
  },
  {
    prop: 'maxHeight',
    type: 'number | string',
    defaultValue: '-',
    desc: ['본문 최대 높이(초과 시 스크롤)', 'Max content height (overflow scrolls)'],
  },
  {
    prop: 'className',
    type: 'string',
    defaultValue: '-',
    desc: ['루트 className', 'Root className'],
  },
  {
    prop: 'contentClassName',
    type: 'string',
    defaultValue: '-',
    desc: ['본문(편집) 영역 className', 'Content (editable) area className'],
  },
  {
    prop: 'ariaLabel',
    type: 'string',
    defaultValue: "'리치 텍스트 편집기'",
    desc: ['본문 ARIA 라벨', 'Content ARIA label'],
  },
];

export interface EditorHandleMethod {
  method: string;
  ret: string;
  /** [ko, en] */
  desc: [string, string];
}

export const editorHandleMethods: EditorHandleMethod[] = [
  { method: 'getHTML()', ret: 'string', desc: ['현재 HTML 반환', 'Return current HTML'] },
  {
    method: 'getText()',
    ret: 'string',
    desc: ['마크업 제거한 순수 텍스트 반환', 'Return plain text (markup removed)'],
  },
  {
    method: 'setHTML(html)',
    ret: 'void',
    desc: [
      'HTML 설정(새니타이즈 후) + onChange 발생',
      'Set HTML (after sanitize) + fires onChange',
    ],
  },
  {
    method: 'insertHTML(html)',
    ret: 'void',
    desc: ['커서 위치에 HTML 삽입', 'Insert HTML at cursor position'],
  },
  { method: 'focus()', ret: 'void', desc: ['본문 영역 포커스', 'Focus the content area'] },
  {
    method: 'getElement()',
    ret: 'HTMLDivElement | null',
    desc: ['내부 contentEditable 노드', 'Internal contentEditable node'],
  },
];

export interface EditorToolbarItem {
  item: string;
  /** [ko, en] */
  desc: [string, string];
}

export const editorToolbarItems: EditorToolbarItem[] = [
  { item: 'undo · redo', desc: ['실행 취소 / 다시 실행', 'Undo / redo'] },
  {
    item: 'blockFormat',
    desc: ['문단/제목/인용구/코드 드롭다운', 'Paragraph / heading / quote / code dropdown'],
  },
  { item: 'fontSize', desc: ['글자 크기 드롭다운', 'Font size dropdown'] },
  { item: 'bold · italic · underline · strikethrough', desc: ['인라인 서식', 'Inline formatting'] },
  { item: 'foreColor · backColor', desc: ['글자 색 / 형광펜', 'Text color / highlight'] },
  {
    item: 'bulletList · orderedList',
    desc: ['글머리 기호 / 번호 매기기 목록', 'Bullet list / ordered list'],
  },
  { item: 'indent · outdent', desc: ['들여쓰기 / 내어쓰기', 'Indent / outdent'] },
  { item: 'alignLeft · alignCenter · alignRight · alignJustify', desc: ['정렬', 'Text alignment'] },
  { item: 'link · unlink', desc: ['링크 삽입·수정 / 제거', 'Insert / edit / remove link'] },
  {
    item: 'image',
    desc: ['이미지 삽입(파일·붙여넣기·드롭)', 'Insert image (file / paste / drop)'],
  },
  {
    item: 'blockquote · codeBlock · horizontalRule',
    desc: ['인용구 / 코드 블록 / 구분선', 'Blockquote / code block / horizontal rule'],
  },
  { item: 'clearFormat', desc: ['서식 지우기', 'Clear formatting'] },
  {
    item: 'sourceCode · fullscreen',
    desc: ['HTML 소스 토글 / 전체 화면', 'Toggle HTML source / fullscreen'],
  },
  { item: 'separator', desc: ['시각적 구분선', 'Visual separator'] },
];

/** prop 이름 배열로 EditorProps에서 필터. */
export function pickEditorProps(names: string[]): EditorApiRow[] {
  const set = new Set(names);
  return editorProps.filter((r) => set.has(r.prop));
}

/** 메서드 이름(괄호 제외) 배열로 EditorHandle에서 필터. */
export function pickEditorHandleMethods(names: string[]): EditorHandleMethod[] {
  const set = new Set(names);
  return editorHandleMethods.filter((m) => {
    const baseName = m.method.replace(/\(.*$/, '');
    return set.has(baseName);
  });
}
