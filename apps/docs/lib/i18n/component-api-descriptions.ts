/**
 * 58개 컴포넌트의 api[].description 영문 번역.
 * 슬러그 → { property: 영문 description } 매핑. 한국어 원본은 spec 파일(`lib/components/*.tsx`)에 그대로 유지.
 *
 * 사용처: `<ApiTable />`에서 locale === 'en'일 때 본 매핑을 우선 참조하고,
 * 키 누락 시 한국어 원문으로 graceful fallback.
 */
export const componentApiDescriptionsEn: Record<string, Record<string, string>> = {
  // ── Foundation ─────────────────────────────────────────────────────
  typography: {
    level: 'Semantic / visual level of the Heading',
    asChild: 'Compose via Slot (Heading / Text)',
    size: 'Text size',
    weight: 'Text weight',
    tone: 'Text tone',
  },
  separator: {
    orientation: 'Direction',
    decorative: 'Decorative — true sets role="none" (ignored by screen readers)',
  },
  'aspect-ratio': {
    ratio: 'Width / height ratio (e.g. 16/9 = 1.777…)',
  },
  skeleton: {
    className: 'Tailwind sizing / shape utilities (h-*, w-*, rounded-*)',
  },
  spinner: {
    size: 'Size',
    label: 'Screen reader label',
  },
  empty: {
    children: 'EmptyIcon / EmptyTitle / EmptyDescription / EmptyActions',
  },
  avatar: {
    'src (AvatarImage)': 'Image URL',
    'alt (AvatarImage)': 'Alt text',
    'children (AvatarFallback)': 'Initials / icon',
  },
  badge: {
    variant: 'Visual variant',
  },
  kbd: {
    children: 'Key label',
  },
  label: {
    htmlFor: 'id of the control to associate with',
  },

  // ── Buttons & Toggles ──────────────────────────────────────────────
  button: {
    variant: 'Visual variant',
    size: 'Size',
    asChild: 'Compose via Slot. When used, leftIcon / rightIcon / loading are ignored',
    loading: 'When true, becomes disabled with a leading Spinner and aria-busy',
    leftIcon: 'Left icon slot',
    rightIcon: 'Right icon slot',
    disabled: 'Disabled',
  },
  'button-group': {
    orientation: 'Direction',
    'aria-label': 'Group semantic label (recommended for screen readers)',
  },
  toggle: {
    pressed: 'Controlled toggle state',
    defaultPressed: 'Uncontrolled initial state',
    onPressedChange: 'State change callback',
    variant: 'Visual variant',
    size: 'Size',
    disabled: 'Disabled',
  },
  'toggle-group': {
    type: 'Selection mode — single behaves like radio, multiple like buttons',
    value: 'Controlled value (single: string, multiple: string[])',
    defaultValue: 'Uncontrolled initial value',
    onValueChange: 'Value change callback',
    disabled: 'Disable the entire group',
  },

  // ── Inputs ─────────────────────────────────────────────────────────
  input: {
    size: 'Size',
    leftAdornment: 'Left slot (icon, unit label, etc.)',
    rightAdornment: 'Right slot',
    'aria-invalid': 'Error state — auto-injected from Field invalid',
    type: 'Native input type',
    wrapperClassName: 'Class for the outer wrapper when adornments are used',
  },
  'input-group': {
    'aria-label': 'Group label',
  },
  'input-otp': {
    length: 'Number of slots',
    value: 'Controlled value',
    defaultValue: 'Uncontrolled initial value',
    onValueChange: 'Value change callback',
    pattern: 'Allowed-character regex',
    onComplete: 'Called when input is fully entered',
    disabled: 'Disabled',
  },
  textarea: {
    autoResize: 'Auto-resize height to fit content',
    maxRows: 'Maximum rows when autoResize is enabled',
    rows: 'Initial number of rows',
  },
  field: {
    invalid:
      'Validation failure — adds aria-invalid to the child control and wires the error via aria-describedby',
    required: 'Required — adds aria-required to the child control and a star to the Label',
    disabled: 'Disable all children together',
    id: 'Force a specific control id (auto-generated if omitted)',
  },
  checkbox: {
    checked: 'Controlled state',
    defaultChecked: 'Uncontrolled initial state',
    onCheckedChange: 'State change callback',
    disabled: 'Disabled',
    required: 'Required',
  },
  'radio-group': {
    value: 'Controlled selected value',
    defaultValue: 'Uncontrolled initial value',
    onValueChange: 'Change callback',
    orientation: 'Item layout direction',
    disabled: 'Disable the entire group',
    required: 'Required',
  },
  switch: {
    checked: 'Controlled state',
    defaultChecked: 'Uncontrolled initial state',
    onCheckedChange: 'State change callback',
    disabled: 'Disabled',
  },
  slider: {
    value: 'Controlled value (single: [n], range: [min, max])',
    defaultValue: 'Uncontrolled initial value',
    onValueChange: 'Change callback',
    min: 'Minimum value',
    max: 'Maximum value',
    step: 'Step interval',
    thumbLabels: 'aria-label for each thumb (recommended in range mode)',
    orientation: 'Direction',
  },

  // ── Selection ──────────────────────────────────────────────────────
  select: {
    options: 'List of candidate options',
    mode: 'Selection mode',
    searchable: 'Show the search input',
    value: 'Controlled value (single: string, multiple: string[])',
    defaultValue: 'Uncontrolled initial value',
    onValueChange: 'Value change callback',
    placeholder: 'Placeholder',
    emptyText: 'Text shown when no search results',
    maxSelected: 'Maximum number of selections in multiple mode',
    showSelectedCount: 'In multiple mode, show "N selected" instead of chips',
    filterFn: 'Custom filter',
    size: 'Trigger size',
    disabled: 'Disabled',
  },
  'native-select': {
    size: 'Size',
    children: '<option> children',
  },
  combobox: {
    options: 'List of candidate options',
    value: 'Controlled value',
    defaultValue: 'Uncontrolled initial value',
    onValueChange: 'Change callback',
    allowFreeText: 'Allow free text not present in the options',
    placeholder: 'Placeholder',
    emptyText: 'Text shown when no results',
    disabled: 'Disabled',
  },
  command: {
    label: 'Screen reader label',
    filter: 'Custom filter function',
    children: 'Command.Input / List / Empty / Group / Item / Separator',
  },
  'date-picker': {
    value: 'Controlled value',
    defaultValue: 'Uncontrolled initial value',
    onValueChange: 'Change callback',
    placeholder: 'Placeholder',
    formatDate: 'Date formatter',
    disabledDates: 'Dates to disable',
    disabled: 'Disabled',
  },
  calendar: {
    events: 'Array of events to display',
    month: 'Displayed month (controlled)',
    defaultMonth: 'Initial displayed month',
    onMonthChange: 'Month change callback',
    onEventClick: 'Event click handler',
    onEventMove: 'Event drag move — providing this enables drag-and-drop',
    maxVisible: 'Max events shown per cell',
    locale: 'Display language',
  },

  // ── Layout ─────────────────────────────────────────────────────────
  card: {
    variant: 'Visual variant',
  },
  item: {
    startSlot: 'Left slot (ignored when asChild=true)',
    endSlot: 'Right slot (ignored when asChild=true)',
    selected: 'Selected state — data-state="selected"',
    disabled: 'Disabled — data-disabled',
    asChild: 'Compose via Slot (e.g. an <a>)',
  },
  sidebar: {
    side: 'Position',
    collapsed: 'Controlled collapsed state',
    defaultCollapsed: 'Uncontrolled initial state',
    onCollapsedChange: 'State change callback',
    width: 'Expanded width (px)',
    collapsedWidth: 'Collapsed width (px)',
  },
  resizable: {
    'direction (PanelGroup)': 'Split direction',
    'defaultSize (Panel)': 'Initial size (%)',
    'minSize / maxSize (Panel)': 'Min / max size (%)',
    'withHandle (Handle)': 'Show the handle grip',
  },
  'scroll-area': {
    children: 'Rendered inside the Viewport',
  },
  direction: {
    dir: 'Text direction',
  },

  // ── Navigation ─────────────────────────────────────────────────────
  tabs: {
    'value (Root)': 'Controlled active tab value',
    'defaultValue (Root)': 'Uncontrolled initial value',
    'onValueChange (Root)': 'Value change callback',
    'orientation (Root)': 'Direction',
    'value (Trigger/Content)': 'Tab identifier (required)',
    'disabled (Trigger)': 'Disabled',
  },
  breadcrumb: {
    'href (Link)': 'Link URL',
    'asChild (Link)': 'Compose via Slot (e.g. next/link)',
    'children (Separator)': 'Custom separator (default "/")',
  },
  pagination: {
    page: 'Current page (1-based, controlled)',
    defaultPage: 'Uncontrolled initial page',
    total: 'Total number of pages',
    onPageChange: 'Page change callback',
    siblings: 'Number of siblings shown around the current page',
    responsive: 'Auto-switch to compact mode below sm breakpoint',
  },
  'navigation-menu': {
    'value / defaultValue (Root)': 'Open menu',
    'onValueChange (Root)': 'Change callback',
    'orientation (Root)': 'Direction',
    'value (Item)': 'Item identifier',
  },
  menubar: {
    children: 'MenubarMenu / MenubarTrigger / MenubarContent / MenubarItem …',
    'value / defaultValue (Root)': 'Open menu',
    'onValueChange (Root)': 'Change callback',
  },

  // ── Overlay ────────────────────────────────────────────────────────
  dialog: {
    'open (Root)': 'Controlled open state',
    'defaultOpen (Root)': 'Uncontrolled initial state',
    'onOpenChange (Root)': 'State change callback',
    'modal (Root)': 'Modal mode (default true)',
  },
  'alert-dialog': {
    'open (Root)': 'Controlled',
    'onOpenChange (Root)': 'Change callback',
  },
  drawer: {
    'open (Root)': 'Controlled',
    'onOpenChange (Root)': 'Change callback',
    'shouldScaleBackground (Root)': 'Slightly scale the background (default true)',
  },
  sheet: {
    'side (Content)': 'Slide-in position',
  },
  popover: {
    'open / defaultOpen / onOpenChange (Root)': 'Control props',
    'align (Content)': 'Alignment',
    'sideOffset (Content)': 'Distance from the trigger (px)',
  },
  'hover-card': {
    'openDelay / closeDelay (Root)': 'Hover enter / leave delay (ms)',
    'open / onOpenChange (Root)': 'Control props',
  },
  tooltip: {
    'delayDuration (Provider)': 'Delay after hover before showing (ms)',
    'sideOffset (Content)': 'Distance from the trigger',
  },
  'dropdown-menu': {
    'open / onOpenChange (Root)': 'Control props',
    'side / align (Content)': 'Position',
    'checked (CheckboxItem)': 'Checked state',
    'value (RadioItem)': 'Radio value',
  },
  'context-menu': {
    'children (Trigger)': 'Right-click area (wrapper element)',
    'open / onOpenChange (Root)': 'Control props',
  },

  // ── Feedback ───────────────────────────────────────────────────────
  alert: {
    variant: 'Visual / semantic variant',
    onDismiss: 'Dismiss callback (close button appears when provided)',
    dismissLabel: 'aria-label of the close button',
  },
  toast: {
    'position (Provider)': 'Display position',
    'visibleToasts (Provider)': 'Max concurrent toasts',
    'duration (Provider)': 'Auto-dismiss timeout (ms)',
    'closeButton (Provider)': 'Always show the close button',
    'toast.success/info/warning/error/message': 'Trigger a toast (returned from useToast)',
    'toast.promise': 'Track loading → success / error',
    'toast.dismiss': 'Dismiss a specific or all toasts',
  },
  sonner: {
    'Sonner (Toaster)': 'sonner Toaster preset with the Baneung tone',
    toast: 'The sonner toast function, exposed as-is',
  },
  progress: {
    value: 'Progress (0–100). Omit / null for indeterminate',
    size: 'Height',
  },

  // ── Data Display ───────────────────────────────────────────────────
  accordion: {
    'type (Root)': 'Selection mode',
    'collapsible (Root)': 'Allow all items closed in single mode',
    'value / defaultValue (Root)': 'Open items',
    'onValueChange (Root)': 'Change callback',
  },
  collapsible: {
    'open (Root)': 'Controlled',
    'defaultOpen (Root)': 'Uncontrolled initial state',
    'onOpenChange (Root)': 'Change callback',
    'disabled (Root)': 'Disabled',
  },
  table: {
    children: 'TableHeader / TableBody / TableFooter / TableCaption',
  },
  'data-table': {
    columns: 'ColumnDef array (tanstack-table)',
    data: 'Row data',
    'sorting / onSortingChange': 'Controlled sorting',
    defaultSorting: 'Uncontrolled initial sorting',
    'pagination / onPaginationChange': 'Controlled pagination',
    pageCount: 'Server-side mode — total page count (enables manualPagination)',
    'rowSelection / onRowSelectionChange': 'Row selection',
    'columnVisibility / onColumnVisibilityChange': 'Column visibility',
    showPagination: 'Show the pagination controls',
    'emptyTitle / emptyDescription': 'Empty state text',
    getRowId: 'Custom row id generator',
  },
  carousel: {
    opts: 'embla options (loop, align, …)',
    orientation: 'Direction',
    setApi: 'Expose the embla API (external control)',
  },
};
