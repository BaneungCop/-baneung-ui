/**
 * 58개 컴포넌트의 description 영문 번역.
 * 슬러그 → 영문 description 매핑. 한국어 원본은 `components-metadata.ts`에 그대로 유지.
 *
 * 사용처: 컴포넌트 카탈로그(`/components`)와 상세 페이지에서 locale에 따라 분기.
 */
export const componentDescriptionsEn: Record<string, string> = {
  // Foundation
  typography:
    'Heading (h1~h6), Text, Lead, Muted, Code — visual hierarchy in a single font (Pretendard) for Korean/English.',
  separator: 'Horizontal/vertical divider based on Radix Separator.',
  'aspect-ratio': 'Lock children to a fixed ratio. Radix Primitive.',
  skeleton: 'Loading placeholder. Honors prefers-reduced-motion.',
  spinner: 'Rotating SVG indicator. role="status" + sr-only label.',
  empty: 'Empty state container — icon / title / description / action slots.',
  avatar: 'User avatar. Auto fallback on image load failure.',
  badge: 'Small label for status / category / count.',
  kbd: 'Keyboard shortcut display — semantic <kbd>.',
  label: 'Form control label. htmlFor moves focus on click.',

  // Buttons & Toggles
  button: '5 variants × 3 sizes. asChild · loading · leftIcon/rightIcon.',
  'button-group': 'Group multiple Buttons with collapsed adjacent borders.',
  toggle: 'Single on/off button. Auto-manages aria-pressed.',
  'toggle-group': 'Single/multiple toggle group.',

  // Inputs
  input: 'Single-line text input. adornment, error, Field context, IME-safe.',
  'input-group': 'Combine Input + Button + Icon in one row.',
  'input-otp': 'N-digit OTP — auto advance, paste distribution.',
  textarea: 'Multi-line text. autoResize, IME-safe.',
  field: 'Group label / description / error / control + auto-inject a11y.',
  checkbox: 'Radix Checkbox. Supports indeterminate.',
  'radio-group': 'Single-select group.',
  switch: 'role="switch" toggle.',
  slider: 'Single / range slider.',

  // Selection
  select: 'single / multiple / searchable unified.',
  'native-select': 'Wrapper around browser native <select>.',
  combobox: 'Free input + autocomplete.',
  command: 'cmdk-based ⌘K palette.',
  calendar: 'react-day-picker v9 wrapper.',
  'date-picker': 'Calendar + Popover.',

  // Layout
  card: 'Content grouping — default / outlined / elevated.',
  item: 'List single item — slot, selected, asChild.',
  sidebar: 'Left/right collapsible side panel.',
  resizable: 'react-resizable-panels split.',
  'scroll-area': 'Radix ScrollArea — navy-toned thumb.',
  direction: 'RTL / LTR context provider.',

  // Navigation
  tabs: 'Radix Tabs. Arrow key navigation.',
  breadcrumb: 'Page hierarchy navigation.',
  pagination: '1, 2, 3 … N pattern + mobile simple mode.',
  'navigation-menu': 'Dropdown navigation — shared single viewport.',
  menubar: 'Desktop horizontal menu (File/Edit/...).',

  // Overlay
  dialog: 'Radix Dialog modal. Focus trap + return.',
  'alert-dialog': 'For destructive action confirmation (alertdialog).',
  drawer: 'vaul-based mobile-friendly sheet.',
  sheet: 'Slide-in sheet from top/bottom/left/right.',
  popover: 'Radix Popover floating panel.',
  'hover-card': 'Info card that opens on hover.',
  tooltip: 'Short hint tooltip (inactive on mobile).',
  'dropdown-menu': 'Submenus / checkbox / radio items.',
  'context-menu': 'Right-click context menu.',

  // Feedback
  alert: '4 variants — info / success / warning / danger.',
  toast: 'sonner-based opinionated wrapper + useToast.',
  sonner: 'Direct sonner export (subpath only).',
  progress: 'Determinate / indeterminate progress.',

  // Data Display
  accordion: 'Radix Accordion — single / multiple.',
  collapsible: 'Single area fold / unfold.',
  table: 'Semantic <table> wrapper.',
  'data-table': '@tanstack/react-table — sort / page / select.',
  carousel: 'embla-carousel-react.',
};
