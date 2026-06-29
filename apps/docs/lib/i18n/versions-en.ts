/**
 * 6개 패키지의 changelog 영문 번역.
 * `<pkg>@<version>` 키 → { summary, details } 매핑.
 * 한국어 원본은 versions/page.tsx에 그대로 유지.
 *
 * 사용처: 버전 히스토리 페이지(`/versions`)에서 locale === 'en'일 때 분기.
 */
export const versionsEn: Record<string, { summary: string; details: string[] }> = {
  // ─────────────────────────────────────────────────────────────────────────
  // @baneung-pack/ui
  // ─────────────────────────────────────────────────────────────────────────
  '@baneung-pack/ui@1.0.12': {
    summary: 'Select: option wheel-scroll inside Dialog/Sheet/Drawer fixed',
    details: [
      "Cause: Radix Dialog's react-remove-scroll preventDefaults wheel/touchmove outside its tree — the option list rendered via Popover.Portal to document.body was outside the scroll-lock allowlist, making the wheel unresponsive",
      'Fix: walk up from the trigger to find the closest [role="dialog"] ancestor and use it as Popover.Portal container — covers Dialog/Sheet/Drawer (including vaul)',
      'Outside a Dialog tree: still portals to document.body (no change)',
    ],
  },
  '@baneung-pack/ui@1.0.11': {
    summary: 'README demo site URL updated to the new custom domain',
    details: [
      'Before: https://baneung-ui-docs-op7v.vercel.app',
      'After: https://ui.baneung.com',
      'No code changes. README link only.',
    ],
  },
  '@baneung-pack/ui@1.0.10': {
    summary: 'README license badge unified to Apache-2.0 (no code changes)',
    details: [
      'Replaced MIT badge and footer in README with Apache-2.0',
      'Consistent license display on the npmjs.com page',
    ],
  },
  '@baneung-pack/ui@1.0.9': {
    summary: 'License declared as Apache-2.0',
    details: [
      'Added `package.json#license: "Apache-2.0"`',
      'Shipped LICENSE file (full Apache-2.0 text) at the package root',
      'License now shows on the npmjs.com page',
    ],
  },
  '@baneung-pack/ui@1.0.8': {
    summary: 'Select keyboard navigation — arrow keys now work inside Dialog/Drawer/Sheet popups',
    details: [
      'Popover.Content rendered via portal to body — the parent FocusScope kept stealing focus back to the trigger',
      'Multi-stage forced focus — immediate + rAF + setTimeout three calls to cover the race',
      'Key-event capture fallback — when the Input is inactive, move focus and re-dispatch the key event',
    ],
  },
  '@baneung-pack/ui@1.0.7': {
    summary:
      'Select keyboard navigation fixed — arrows / Enter work even with `searchable={false}`',
    details: [
      'In the cmdk + Radix Popover combo, Popover.Content was grabbing focus itself, so key events never reached cmdk',
      'Keep CommandInput in the DOM at all times (sr-only when `searchable={false}`) → acts as the key-event catcher',
      'Delegate focus to the input from `Popover.Content.onOpenAutoFocus`',
      '`shouldFilter={searchable}` disables filtering in non-search mode',
      'Added 2 new keyboard navigation tests (search + non-search)',
    ],
  },
  '@baneung-pack/ui@1.0.6': {
    summary: "Inject 'use client' only into files that use React/Radix (regression fix for 1.0.5)",
    details: [
      "In 1.0.5 even pure utilities like `cn` became client-only, producing 'Attempted to call cn() from the server' errors",
      'Now only injected into files that import react / react-dom / @radix-ui / @tanstack/react-* / sonner / lucide-react / cmdk / vaul',
      'Server components can call `cn`, types, etc. directly again',
    ],
  },
  '@baneung-pack/ui@1.0.5': {
    summary:
      "Next.js App Router (RSC) compatibility — 'use client' directive auto-injected into build output (regression fixed in 1.0.6)",
    details: [
      'Most components are Radix UI-based (internal hooks) or use their own hooks → fixed the runtime error when imported directly from a server component',
      'tsup `onSuccess` automatically prepends the directive to every .js / .cjs file in dist',
      'Indiscriminate injection broke the `cn` utility, which is reinforced with selective injection in 1.0.6',
    ],
  },
  '@baneung-pack/ui@1.0.4': {
    summary:
      'README "CSS isolation (Cascade Layers)" section rewritten from real-world verification',
    details: [
      'Pattern A: consumer wraps their own global CSS in `@layer app` to override the library',
      'Pattern B (recommended): when the consumer also uses Tailwind, import without preflight to avoid preflight↔utility conflicts',
      'Verified by applying Pattern B to the demo site (apps/docs)',
    ],
  },
  '@baneung-pack/ui@1.0.3': {
    summary: 'README "CSS isolation" section expanded — layer registration timing + import order',
    details: [
      "A CSS cascade layer's priority is determined by where it is first registered",
      'Example import + layer-declaration patterns for both scenarios (consumer override / library forced priority)',
    ],
  },
  '@baneung-pack/ui@1.0.2': {
    summary: 'Style isolation via CSS Cascade Layers (`@layer baneung`)',
    details: [
      'All library styles wrapped inside `@layer baneung`',
      'Resolves unintended overrides from consumer global CSS',
      'Added demo site link in the README',
    ],
  },
  '@baneung-pack/ui@1.0.1': {
    summary: 'README added for the npm page (no code changes)',
    details: [
      'Each package now has an install / usage / component list README',
      'Page content displayed on npmjs.com',
    ],
  },
  '@baneung-pack/ui@1.0.0': {
    summary: 'Initial release — 58 React components (built on Radix UI)',
    details: [
      'Foundation: Typography · Separator · AspectRatio · Skeleton · Spinner · Empty · Avatar · Badge · Kbd · Label',
      'Buttons & Toggles: Button (asChild · loading · variants) · ButtonGroup · Toggle · ToggleGroup',
      'Inputs: Input (left/right adornment) · InputGroup · InputOTP · Textarea · Field · Checkbox (indeterminate) · RadioGroup · Switch · Slider',
      'Selection: Select (single/multi/searchable) · NativeSelect · Combobox · Command · Calendar · DatePicker',
      'Layout: Card · Item · Sidebar · Resizable · ScrollArea · Direction',
      'Navigation: Tabs · Breadcrumb · Pagination · NavigationMenu · Menubar',
      'Overlay: Dialog · AlertDialog · Drawer · Sheet · Popover · HoverCard · Tooltip · DropdownMenu · ContextMenu',
      'Feedback: Alert · Toast · Sonner · Progress',
      'Data Display: Accordion · Collapsible · Table · DataTable · Carousel',
      'WCAG 2.1 AA · axe-core 0 violations · Korean-IME safe · React 18/19 compatible · tree-shakable ESM/CJS',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // @baneung-pack/tokens
  // ─────────────────────────────────────────────────────────────────────────
  '@baneung-pack/tokens@1.0.4': {
    summary: 'README demo site URL updated to the new custom domain',
    details: [
      'Before: https://baneung-ui-docs-op7v.vercel.app',
      'After: https://ui.baneung.com',
      'No code changes.',
    ],
  },
  '@baneung-pack/tokens@1.0.3': {
    summary: 'License declared as Apache-2.0',
    details: [
      'Added `package.json#license: "Apache-2.0"` (the field was previously missing)',
      'Shipped LICENSE file (full Apache-2.0 text) at the package root',
      'Replaced MIT badge and footer in README with Apache-2.0',
      'License now shows on the npmjs.com page',
    ],
  },
  '@baneung-pack/tokens@1.0.2': {
    summary: 'Style isolation via CSS Cascade Layers (`@layer baneung`)',
    details: ['Wrapped in `@layer baneung` together with ui', 'Added demo site link'],
  },
  '@baneung-pack/tokens@1.0.1': {
    summary: 'README added for the npm page',
    details: ['Token category guide. No code changes.'],
  },
  '@baneung-pack/tokens@1.0.0': {
    summary: 'Initial release — single source of truth for CSS / JSON / TS tokens',
    details: [
      'Color: bg/text/border/focus/status semantics + neutral/baneungNavy/baneungTeal primitives',
      'Light/dark — two sets via `[data-theme="dark"]` cascade',
      'Typography (Pretendard Variable) · spacing (4px) · radius (0/2/4) · motion · z-index · breakpoint',
      'Artifacts: tokens.css / tokens.json / tokens.js',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // @baneung-pack/grid
  // ─────────────────────────────────────────────────────────────────────────
  '@baneung-pack/grid@0.9.1': {
    summary: 'README demo site URL updated to the new custom domain',
    details: [
      'Before: https://baneung-ui-docs-op7v.vercel.app',
      'After: https://ui.baneung.com',
      'No code changes.',
    ],
  },
  '@baneung-pack/grid@0.9.0': {
    summary: 'Major additions for admin dashboards · large datasets · Excel workflows',
    details: [
      'XLSX export (`exportXlsx` ref API) — dynamic `exceljs` load, not bundled',
      'Excel-compatible Ctrl+C/V clipboard (`clipboard` prop, TSV serialization)',
      'Quick search (`quickFilter`) — partial match across all visible columns',
      'Multi-column sort (Shift+click) + header order numbers',
      'Drag-to-resize column width (`resizable` + `onColumnResize`)',
      'Pin columns left/right (`column.pin`) — sticky on horizontal scroll',
      'Column reorder (`reorderable`) — header drag & drop, respects pin boundaries',
      'Column show/hide (`showColumnMenu` + `columnVisibility`)',
      'Footer row (`showFooter` + `column.aggregate`) — sum/avg/count/min/max/function',
      'Conditional cell styles (`column.cellStyle` / `cellClassName`)',
      'Keyboard navigation — arrows / Tab / Enter / Home·End / Ctrl+Home·End',
      'Right-click context menu (`contextMenu`) — default or function-based custom',
      'Auto-saved view settings (`viewKey`) — sort / width / visibility / order persisted to localStorage',
      'Fixed `editCell` stale-closure bug (paste-style multi-column simultaneous input is now accurate)',
    ],
  },
  '@baneung-pack/grid@0.8.4': {
    summary: 'New `autoSize` prop — auto-fit to parent container',
    details: [
      'When enabled, outer becomes `h-full w-full` + scroll becomes `flex-1 min-h-0` → fills 100% of parent div',
      'Pagination footer pins to the bottom automatically',
      "Reacts to parent resize automatically (virtualizer's built-in ResizeObserver)",
      '`height` prop is ignored. Default `false` → existing behavior preserved (backwards-compatible)',
      'Also replaced MIT badge / footer in README with Apache-2.0',
    ],
  },
  '@baneung-pack/grid@0.8.3': {
    summary: 'License declared as Apache-2.0',
    details: [
      'Added `package.json#license: "Apache-2.0"`',
      'Shipped LICENSE file (full Apache-2.0 text) at the package root',
      'License now shows on the npmjs.com page',
    ],
  },
  '@baneung-pack/grid@0.8.2': {
    summary: "Inject 'use client' only into files that use React/Radix (regression fix for 0.8.1)",
    details: [
      "0.8.1's indiscriminate injection turned pure utilities (CSV builder, etc.) into client-only",
      'Now only injected into files that import react / @radix-ui / @tanstack/react-*',
    ],
  },
  '@baneung-pack/grid@0.8.1': {
    summary:
      "Next.js App Router (RSC) compatibility — 'use client' directive auto-injected into build output (regression fixed in 0.8.2)",
    details: [
      'Pervasive use of virtualization / state / refs → client is required in RSC environments',
      'tsup `onSuccess` automatically prepends the directive to every .js / .cjs file in dist',
      'Indiscriminate injection broke pure utilities, which is fixed with selective injection in 0.8.2',
    ],
  },
  '@baneung-pack/grid@0.8.0': {
    summary: 'CSV download — `GridHandle.exportCsv`',
    details: [
      '`exportCsv(filename?, options?)` — UTF-8 BOM + Excel compatible',
      '`options.rows` to export specific rows only (changes only / external filter result / etc.)',
      'When omitted, uses `getSavedData()` (reflects edits, excludes deletes)',
      'New helpers: `buildCsv`, `downloadCsv` (csv.ts)',
    ],
  },
  '@baneung-pack/grid@0.7.0': {
    summary: 'Filter popover Portal · cell selection · row add/remove · Delete key',
    details: [
      'Filter popover: rendered to document.body via react-dom Portal → no longer clipped by scroll container',
      '`cellSelection`: "none" | "single" | "multi" (drag-rectangle multi-region selection)',
      '`addRow(row, position)`: "first" | "last" | "above-active" | "below-active"',
      '`removeSelectedRows()` / `clearSelectedCells()`',
      '`clearOnDelete`: Delete/Backspace clears the selected cell values',
    ],
  },
  '@baneung-pack/grid@0.6.0': {
    summary: 'Filter UX replaced with Excel/AUIGrid-style popover',
    details: [
      'Funnel icon in the header → popover on click',
      '"Reset filter" + search + "(Select all)" + each value + "(Blanks)" checkboxes',
      'Confirm (apply) / Cancel (discard) buttons',
      'Click outside / Escape to close (discards draft)',
    ],
  },
  '@baneung-pack/grid@0.5.0': {
    summary: 'Header sort + filter',
    details: [
      '`column.sortable` — header click cycles 3 states (↕ → ▲ asc → ▼ desc → off)',
      '`column.filterable` — input under the header (partial match, case-insensitive)',
      'Value compare: null is last, Date by timestamp, number arithmetic, otherwise `localeCompare(numeric)`',
      'Tree mode skips sort (preserves hierarchy)',
    ],
  },
  '@baneung-pack/grid@0.4.1': {
    summary: 'Fixed progress-bar fill color not showing',
    details: [
      "Grid's `@theme inline` was missing the status color mapping (`--color-success/danger/warning/info`)",
      '`bg-success` utility had no color, so the fill bar was transparent',
    ],
  },
  '@baneung-pack/grid@0.4.0': {
    summary: 'Built-in cell editors (dropdown · date · number) + renderers (progress · date)',
    details: [
      "`column.editor`: 'text' | 'number' | 'date' | 'dropdown' (native input)",
      "`column.renderer`: 'progress' (progress bar) / 'date' (formatted)",
      'Added `column.options` / `min` / `max` / `dateFormat` fields',
      'Standard `aria-progressbar` / `aria-valuenow` / combobox role',
    ],
  },
  '@baneung-pack/grid@0.3.0': {
    summary: 'Tree (hierarchy) mode',
    details: [
      '`tree` prop + `getChildren` displays nested data as a hierarchy',
      'First column auto-inserts caret (▶/▼) + indentation',
      "`defaultExpandedIds`: 'all' | 'none' | id array",
      'Compatible with virtualization and pagination',
    ],
  },
  '@baneung-pack/grid@0.2.0': {
    summary:
      'Initial publish — virtualization · pagination · inline editing · row selection · ref API',
    details: [
      'Virtualization toggle (`virtualized`) — based on @tanstack/react-virtual',
      'Built-in pagination + external paging controlled mode',
      'Inline editing (`editable: true`) + Korean-IME safe',
      'Row selection checkboxes (`selectable`)',
      'Imperative API: `getSavedData` / `getChangedData` / `getDeletedData` / `deleteSelected` / `clearSelection` / `reset`',
      'Isolated in `@layer baneung`',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // @baneung-pack/chart
  // ─────────────────────────────────────────────────────────────────────────
  '@baneung-pack/chart@0.3.0': {
    summary: 'Web accessibility (WCAG 2.1 AA) + Korean number formatting + FlowChart added',
    details: [
      'New FlowChart — SVG-based node-edge graph (independent of chart.js)',
      'FlowChart ships 4 built-in edges: straight / bezier / step / smoothstep',
      'FlowChart custom edges — register an SVG path function via the `edgeTypes` prop',
      'FlowChart pan + zoom (mouse drag, wheel in/out anchored to cursor)',
      'FlowChart arrowheads, edge labels, flow animation, dashed option',
      'All charts gain an `a11yTable` prop (default true) — exposes data via an sr-only <table> for screen-reader compatibility (WCAG 1.1.1)',
      '`a11yCaption` prop — table caption (read first by screen readers)',
      'All charts gain a `valueFormat` prop — applied consistently to tooltip · data labels · y-axis ticks',
      "`valueFormat='korean'` → auto-converts to 125만 · 1.2억 · 1.5조",
      "`valueFormat='comma'` → 1,250,000 with thousand-separators",
      'Custom function support: `(n) => string`',
      'MapChart removed — dropped `d3-geo`, `topojson-client` peer deps (judged out of scope for the chart package)',
      'Peer deps reduced from 5 → 3 (chart.js, react-chartjs-2, chartjs-plugin-datalabels)',
    ],
  },
  '@baneung-pack/chart@0.2.0': {
    summary: 'Rendering engine swap: SVG (recharts) → Canvas (chart.js)',
    details: [
      'For large datasets, Canvas-based rendering has lower memory and paint cost',
      'chart.js supports controller/scale/plugin tree-shaking natively',
      'Eliminates SVG DOM tree construction cost',
      'BREAKING: peer deps swapped — recharts ^2.12.0 → chart.js ^4.4.0 + react-chartjs-2 ^5.2.0',
      'BREAKING: `PieChart.outerRadius` deprecated (chart.js is responsive — no px outer radius)',
      'BREAKING: `PieChart.innerRadius` now takes a 0~1 ratio instead of px (maps to chart.js cutout)',
      'Common props keep the same signature — migration mostly works by swapping dependencies',
      '`lib/chartjs-setup.ts` bulk-registers controller/scale/plugin (consumer no longer needs to register)',
      '"use client" auto-injection pattern preserved (RSC compatible)',
    ],
  },
  '@baneung-pack/chart@0.1.0': {
    summary: 'Initial release — recharts-based chart library (swapped to chart.js in 0.2.0)',
    details: [
      'BarChart · LineChart · AreaChart · PieChart · DoughnutChart · ScatterChart · RadarChart · WaterfallChart · MixedChart — 9 charts (originally recharts-based)',
      'Common props: data / xKey / yKeys / nameKey / valueKey / labels / colors / height / showGrid / showLegend / showTooltip / emptyState / className',
      'Shares @baneung-pack/tokens for design consistency',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // @baneung-pack/editor
  // ─────────────────────────────────────────────────────────────────────────
  '@baneung-pack/editor@0.1.1': {
    summary: 'Updated `package.json` description / keywords (better npm search exposure)',
    details: [
      'Refined some wording in the description',
      'Added keywords: WYSIWYG · editor · rich-text-editor · react · contenteditable · design-system · baneung',
      'Added a keyword-highlight line in the README',
      'No source/dist changes. npm-page metadata only.',
    ],
  },
  '@baneung-pack/editor@0.1.0': {
    summary: 'Initial release — contentEditable-based rich-text WYSIWYG editor',
    details: [
      'Full WYSIWYG toolbar: bold/italic/underline/strikethrough, text color · highlight, font size, headings · blockquote · code block, lists/indent, alignment, link, divider, undo/redo, clear format, HTML source, fullscreen',
      'Image clipboard paste · drag-and-drop · file picker (base64 inline by default, server upload via `onImageUpload`)',
      'Controlled/uncontrolled — `value`/`onChange` or `defaultValue`',
      'Imperative ref API — `getHTML` · `setHTML` · `insertHTML` · `focus`',
      'Responsive — toolbar wraps automatically, images use `max-width: 100%`',
      'Zero runtime dependencies (only clsx · tailwind-merge) + shares @baneung-pack/tokens',
      'React 18 / 19 compatible, ESM/CJS dual export',
      '17 unit tests + axe-core 0 accessibility violations',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // @baneung-pack/effect
  // ─────────────────────────────────────────────────────────────────────────
  '@baneung-pack/effect@0.1.0': {
    summary: 'Initial release — 13 React visual effects (Tier 1 + 2 + 3)',
    details: [
      // Tier 1
      'Typewriter — character-by-character typing + blinking cursor (one-shot / infinite loop), customizable size · color · weight · cursor glyph',
      'RotatingWords — "We build [apps]" word slide+fade rotation (auto-measured width via grid template-areas)',
      'ScrambleText — hacking/decoding style, customizable character pool (katakana / HEX / binary)',
      'SplitTextReveal — per-character/word sequential fade+slide, mount/inView trigger',
      'CountUp — numeric counter (thousand-separator · decimals · prefix/suffix · count-down), easeOutCubic',
      // Tier 2
      'GradientText — flow / shimmer modes, customizable color array and direction',
      'BlurInText — blurry-to-sharp entrance, by char/word/all, mount/inView trigger',
      'WavyText — characters surf a wave or bounce, phase offset for natural motion',
      'GlitchText — RGB channel-shift glitch, intensity control · hover-only option',
      // Tier 3
      'VariableFontHover — characters near the cursor get bolder (variable-font interpolation, smoothstep falloff)',
      'CircularText — text rotating along a circular path (badge / stamp style)',
      'GravityText — characters fall under gravity or scatter (mount/hover/inView)',
      'SpotlightText — only the area around the cursor brightens (radial-gradient mask)',
      // Shared infrastructure
      'Shared hooks: `useReducedMotion` (a11y) + `useInView` (standardized scroll reveal)',
      'Zero-dependency core — React peer only, no Tailwind dependency (inline-style based)',
      'All components automatically respect `prefers-reduced-motion` (static fallback when motion is reduced)',
      'Original text exposed to screen readers via `aria-label`, animated spans are `aria-hidden`',
      'ESM/CJS dual export + .d.ts, Next.js RSC compatible (`use client` auto-injected)',
    ],
  },
};
