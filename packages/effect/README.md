# @baneung-pack/effect

> 바능 디자인 시스템 비주얼 이펙트 — 텍스트 모션 13종 + Ripple + Confetti. **0-dependency 코어** + **a11y 일급**.

[![npm](https://img.shields.io/npm/v/@baneung-pack/effect.svg)](https://www.npmjs.com/package/@baneung-pack/effect)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://github.com/BaneungCop/-baneung-ui/blob/master/LICENSE)

Keywords: **effect** · **react** · **animation** · **motion** · **typewriter** · **scramble** · **rotating-words** · **count-up** · **glitch** · **ripple** · **confetti** · **design-system**

## 📖 데모 사이트에서 직접 보기

**시각 라이브러리이므로 데모를 먼저 확인하세요** → https://ui.baneung.com

각 컴포넌트를 클릭하면 라이브 데모 + 컨트롤 + 코드 + Props 표로 이동합니다.

## 특징

- 🪶 **0-dependency 코어** — peer는 React/React-DOM뿐
- 🎨 **Tailwind 비종속** — inline style 기반, 어떤 React 앱에서도 즉시 사용
- ♿ **접근성 일급** — `prefers-reduced-motion` 자동 존중, `aria-label`로 원문 노출
- 📦 **트리쉐이커블** — 사용하는 컴포넌트만 번들에 포함
- ⚡ **Next.js RSC 호환** — `'use client'` 자동 주입
- 🌗 **다크 모드 자동** — CSS 변수 / currentColor 친화

## 컴포넌트 · 데모 링크

### 텍스트 모션 (13)

| 컴포넌트              | 설명                                        | 데모                                                        |
| --------------------- | ------------------------------------------- | ----------------------------------------------------------- |
| **Typewriter**        | 한 글자씩 등장 + 깜빡이는 커서 (1회 / loop) | [보기 →](https://ui.baneung.com/effect/typewriter)          |
| **RotatingWords**     | `We build [apps]` 단어 슬라이드+페이드 순환 | [보기 →](https://ui.baneung.com/effect/rotating-words)      |
| **ScrambleText**      | 해킹/디코딩 스타일 (카타카나/HEX/바이너리)  | [보기 →](https://ui.baneung.com/effect/scramble-text)       |
| **SplitTextReveal**   | 글자/단어 단위 순차 페이드+슬라이드         | [보기 →](https://ui.baneung.com/effect/split-text-reveal)   |
| **CountUp**           | 숫자 카운터 (천 단위·소수점·prefix/suffix)  | [보기 →](https://ui.baneung.com/effect/count-up)            |
| **GradientText**      | flow / shimmer 모드, 색상 배열·방향         | [보기 →](https://ui.baneung.com/effect/gradient-text)       |
| **BlurInText**        | 흐릿 → 선명, by char/word/all               | [보기 →](https://ui.baneung.com/effect/blur-in-text)        |
| **WavyText**          | 글자 파도/통통 튐, 위상 차이 파동           | [보기 →](https://ui.baneung.com/effect/wavy-text)           |
| **GlitchText**        | RGB 채널 어긋남, intensity·hover-only       | [보기 →](https://ui.baneung.com/effect/glitch-text)         |
| **VariableFontHover** | 커서 주변 글자만 굵어짐 (가변 폰트)         | [보기 →](https://ui.baneung.com/effect/variable-font-hover) |
| **CircularText**      | 원형 경로 회전 텍스트 (배지/도장)           | [보기 →](https://ui.baneung.com/effect/circular-text)       |
| **GravityText**       | 글자가 중력에 떨어지거나 흩어짐             | [보기 →](https://ui.baneung.com/effect/gravity-text)        |
| **SpotlightText**     | 커서 주변만 밝아지는 스포트라이트           | [보기 →](https://ui.baneung.com/effect/spotlight-text)      |

### 인터랙티브 이펙트 (2)

| 컴포넌트     | 설명                                               | 데모                                             |
| ------------ | -------------------------------------------------- | ------------------------------------------------ |
| **Ripple**   | 자식을 감싸 클릭 위치 물결 효과                    | [보기 →](https://ui.baneung.com/effect/ripple)   |
| **Confetti** | `<ConfettiProvider>` + `useConfetti()` 명령형 발사 | [보기 →](https://ui.baneung.com/effect/confetti) |

## 설치

```bash
pnpm add @baneung-pack/effect
```

Peer deps: `react ^18 || ^19`, `react-dom ^18 || ^19`.

## 최소 사용 예

```tsx
import { Typewriter } from '@baneung-pack/effect';

<Typewriter text="문의해 주세요" loop fontSize={32} />;
```

다른 컴포넌트의 사용법과 전체 옵션은 위 [데모 사이트](https://ui.baneung.com) 또는 `.d.ts` 참조.

## 라이선스

[Apache-2.0](https://github.com/BaneungCop/-baneung-ui/blob/master/LICENSE) © 바능(Baneung)
