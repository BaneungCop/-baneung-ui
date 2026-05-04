# @baneung-pack/ui

> 바능(Baneung) 디자인 시스템 — 각진 디자인의 React 컴포넌트 라이브러리

[![npm](https://img.shields.io/npm/v/@baneung-pack/ui.svg)](https://www.npmjs.com/package/@baneung-pack/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/AhanSehoon/-baneung-ui/blob/master/LICENSE)

**📖 데모 / 컴포넌트 카탈로그**: https://baneung-ui-docs-op7v.vercel.app

Radix UI primitives 위에 바능 브랜드(각진 디자인, 절제된 컬러, 강한 타이포 위계)를 입힌 React 컴포넌트 라이브러리. **WCAG 2.1 AA 접근성 협상 불가**.

## 설치

```bash
pnpm add @baneung-pack/ui
# or: npm install @baneung-pack/ui / yarn add @baneung-pack/ui
```

Peer dependencies:

- React `^18 || ^19`
- React DOM `^18 || ^19`

## 사용

```tsx
// app/layout.tsx — 한 번만 로드
import '@baneung-pack/ui/styles.css';

// 어디서나
import { Button, Heading } from '@baneung-pack/ui';

export default function Page() {
  return (
    <main>
      <Heading level={1}>안녕하세요</Heading>
      <Button>저장</Button>
    </main>
  );
}
```

별도의 Tailwind 설정·CSS 변수 정의 **필요 없음** — `dist/styles.css` 한 줄이면 끝.

### 트리쉐이킹 친화 subpath import

```tsx
import { Button } from '@baneung-pack/ui/button';
import { Calendar } from '@baneung-pack/ui/calendar';
```

각 컴포넌트는 `@baneung-pack/ui/<name>` subpath로도 접근 가능 — 사용하지 않는 컴포넌트는 번들에 포함되지 않습니다.

### 다크 모드

`<html data-theme="dark">`만 토글하면 모든 토큰이 자동 cascade.

```tsx
document.documentElement.dataset.theme = 'dark';
```

### CSS 격리 (Cascade Layers)

라이브러리의 모든 스타일은 `@layer baneung` 안에 들어 있습니다. 소비자는 자신의 CSS를 layer로 감싸 우선순위를 명시 제어할 수 있습니다.

> **핵심**: CSS Cascade Layer는 **처음 등록된 시점의 위치**가 cascade 우선순위를 결정합니다. 따라서 **import 순서**와 **layer 선언 순서** 두 가지를 함께 맞춰야 합니다.

#### 시나리오 1 — 소비자가 라이브러리를 override 가능 (일반적)

```tsx
// app/layout.tsx
import '@baneung-pack/ui/styles.css'; // 먼저 — baneung을 0번에 등록
import './globals.css'; // 나중 — app을 1번에 새로 등록
```

```css
/* globals.css 최상단 */
@layer baneung, app;

@layer app {
  /* 본인 글로벌 스타일 — 라이브러리를 override */
  body {
    background: #f5f5f5;
  }
}
```

결과: `[baneung=0, app=1]` → **app(소비자) 우선**. 본인이 override 가능.

#### 시나리오 2 — 라이브러리를 강제 우선 (demo/docs 사이트 등)

import 순서와 layer 순서를 모두 뒤집습니다:

```tsx
// app/layout.tsx
import './globals.css'; // 먼저 — app을 0번, baneung을 1번에 등록
import '@baneung-pack/ui/styles.css'; // 나중 — baneung 이미 존재
```

```css
/* globals.css 최상단 */
@layer app, baneung;

@layer app {
  /* layout 유틸리티 등 */
}
```

결과: `[app=0, baneung=1]` → **baneung(라이브러리) 우선**.

> 레이어 선언/import 순서를 무시하면 unlayered 소비자 CSS가 layered 라이브러리 CSS보다 항상 우선합니다 (CSS 표준). 라이브러리 의도를 보존하려면 위 패턴 중 하나를 따라주세요.

## 컴포넌트 (58)

| 카테고리          | 컴포넌트                                                                                           |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| Foundation        | Typography · Separator · AspectRatio · Skeleton · Spinner · Empty · Avatar · Badge · Kbd · Label   |
| Buttons & Toggles | Button · ButtonGroup · Toggle · ToggleGroup                                                        |
| Inputs            | Input · InputGroup · InputOTP · Textarea · Field · Checkbox · RadioGroup · Switch · Slider         |
| Selection         | Select (single/multi/searchable) · NativeSelect · Combobox · Command · Calendar · DatePicker       |
| Layout            | Card · Item · Sidebar · Resizable · ScrollArea · Direction                                         |
| Navigation        | Tabs · Breadcrumb · Pagination · NavigationMenu · Menubar                                          |
| Overlay           | Dialog · AlertDialog · Drawer · Sheet · Popover · HoverCard · Tooltip · DropdownMenu · ContextMenu |
| Feedback          | Alert · Toast · Sonner · Progress                                                                  |
| Data Display      | Accordion · Collapsible · Table · DataTable · Carousel                                             |

## 보장

- **접근성**: WCAG 2.1 AA 색대비 자동 검증, axe-core 0 violations, IME(한글 조합) 안전, 모바일 터치 44×44px
- **번들**: ESM/CJS dual, 트리쉐이커블, subpath import 지원
- **호환**: React 18 / 19

## 디자인 토큰

스타일 토큰은 별도 패키지로 제공 — [@baneung-pack/tokens](https://www.npmjs.com/package/@baneung-pack/tokens)

## 링크

- **GitHub**: [AhanSehoon/-baneung-ui](https://github.com/AhanSehoon/-baneung-ui)
- **Issues**: [Bug & Feature requests](https://github.com/AhanSehoon/-baneung-ui/issues)
- **CHANGELOG**: [최신 변경사항](https://github.com/AhanSehoon/-baneung-ui/blob/master/packages/ui/CHANGELOG.md)

## 라이선스

[MIT](https://github.com/AhanSehoon/-baneung-ui/blob/master/LICENSE) © 바능(Baneung)
