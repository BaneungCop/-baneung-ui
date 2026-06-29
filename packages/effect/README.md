# @baneung-pack/effect

> 바능 디자인 시스템 비주얼 이펙트 라이브러리 — 텍스트 모션 + Ripple + Confetti, **0-dependency 코어** + **a11y 일급**

[![npm](https://img.shields.io/npm/v/@baneung-pack/effect.svg)](https://www.npmjs.com/package/@baneung-pack/effect)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://github.com/BaneungCop/-baneung-ui/blob/master/LICENSE)

Keywords: **effect** · **react** · **animation** · **motion** · **typewriter** · **scramble** · **rotating-words** · **count-up** · **glitch** · **ripple** · **confetti** · **design-system**

**📖 데모 / 컴포넌트 카탈로그**: https://ui.baneung.com

`@baneung-pack/ui` · `@baneung-pack/grid` · `@baneung-pack/chart` · `@baneung-pack/editor`와 동일한 모노레포 패키지. 가벼운 React 모션/타이포/이펙트 모음.

## 특징

- 🪶 **0-dependency 코어** — peer는 React/React-DOM뿐
- 🎨 **Tailwind 비종속** — inline style 기반, 어떤 React 앱에서도 즉시 사용
- ♿ **접근성 일급** — `prefers-reduced-motion` 자동 존중, `aria-label`로 원문 노출
- 📦 **트리쉐이커블** — 사용하는 컴포넌트만 번들에 포함
- ⚡ **Next.js RSC 호환** — `'use client'` 자동 주입
- 🌗 **다크 모드 자동** — CSS 변수 / currentColor 친화

## 컴포넌트

### 텍스트 모션 (13)

- **Typewriter** — 한 글자씩 등장 + 깜빡이는 커서 (1회 / loop)
- **RotatingWords** — `We build [apps]` 단어 슬라이드+페이드 순환
- **ScrambleText** — 해킹/디코딩 스타일 (카타카나/HEX/바이너리 풀 커스텀)
- **SplitTextReveal** — 글자/단어 단위 순차 페이드+슬라이드 (mount/inView)
- **CountUp** — 숫자 카운터 (천 단위·소수점·prefix/suffix, easeOutCubic)
- **GradientText** — flow / shimmer 모드, 색상 배열·방향
- **BlurInText** — 흐릿 → 선명, by char/word/all (mount/inView)
- **WavyText** — 글자 파도/통통 튐, 위상 차이 자연스러운 파동
- **GlitchText** — RGB 채널 어긋남, intensity·hover-only 옵션
- **VariableFontHover** — 커서 주변 글자만 굵어짐 (가변 폰트 + smoothstep)
- **CircularText** — 원형 경로 회전 텍스트 (배지/도장)
- **GravityText** — 글자가 중력에 떨어지거나 흩어짐 (mount/hover/inView)
- **SpotlightText** — 커서 주변만 밝아지는 스포트라이트 (radial-gradient mask)

### 인터랙티브 이펙트 (2)

- **Ripple** — 자식을 감싸 클릭 위치 물결 효과 (성능 최적화된 overlay)
- **Confetti** — `<ConfettiProvider>` + `useConfetti()` 명령형 발사 (Canvas 입자)

## 설치

```bash
pnpm add @baneung-pack/effect
# 또는
npm install @baneung-pack/effect
```

Peer deps: `react ^18 || ^19`, `react-dom ^18 || ^19`.

## 사용 예시

### 타이프라이터

```tsx
import { Typewriter } from '@baneung-pack/effect';

<Typewriter text="문의해 주세요" loop fontSize={32} />;
```

### 카운터

```tsx
import { CountUp } from '@baneung-pack/effect';

<CountUp end={12500} prefix="₩" suffix="원" thousands separator durationMs={1500} />;
```

### Ripple

```tsx
import { Ripple } from '@baneung-pack/effect';

<Ripple color="rgba(91,168,160,0.3)">
  <button className="btn">Click me</button>
</Ripple>;
```

### Confetti

```tsx
import { ConfettiProvider, useConfetti } from '@baneung-pack/effect';

function App() {
  return (
    <ConfettiProvider>
      <SuccessButton />
    </ConfettiProvider>
  );
}

function SuccessButton() {
  const fire = useConfetti();
  return <button onClick={() => fire()}>축하 🎉</button>;
}
```

## 컴포넌트별 자세한 props · 옵션

데모 사이트(https://ui.baneung.com)의 `/effect/*` 페이지 또는 각 컴포넌트의 `.d.ts` 파일을 참조하세요.

## 라이선스

[Apache-2.0](https://github.com/BaneungCop/-baneung-ui/blob/master/LICENSE) © 바능(Baneung)
