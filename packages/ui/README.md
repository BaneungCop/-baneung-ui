# @baneung-pack/ui

> 바능(Baneung) 디자인 시스템 — 각진 디자인의 React 컴포넌트 라이브러리

[![npm](https://img.shields.io/npm/v/@baneung-pack/ui.svg)](https://www.npmjs.com/package/@baneung-pack/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/AhanSehoon/-baneung-ui/blob/master/LICENSE)

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
