# @baneung-pack/effect

## 0.1.1

### Patch Changes

- README를 시각 라이브러리 특성에 맞게 개편.
  - 상단에 별도 "📖 데모 사이트에서 직접 보기" 섹션으로 강조
  - 15개 컴포넌트 각각에 인라인 데모 링크 (`https://ui.baneung.com/effect/<name>`) 추가 — npm 페이지에서 컴포넌트 이름 옆 링크로 바로 라이브 데모 이동
  - 사용 예시는 Typewriter 하나만 남기고 나머지는 데모 링크로 유도
  - 총 109 → 72줄로 축약 (약 34% 감소)

  코드 변경 없음.

## 0.1.0

### Minor Changes

- 신규 패키지 `@baneung-pack/effect` 초도 출시 — React 비주얼 이펙트 라이브러리.

  # 텍스트 모션 (13)

  Typewriter · RotatingWords · ScrambleText · SplitTextReveal · CountUp · GradientText · BlurInText · WavyText · GlitchText · VariableFontHover · CircularText · GravityText · SpotlightText

  # 인터랙티브 이펙트 (2)
  - **Ripple** — 자식을 감싸 클릭 위치 물결 효과
  - **Confetti** — `<ConfettiProvider>` + `useConfetti()` 명령형 발사 (Canvas 입자 시뮬레이션)

  # 공통 인프라
  - 공통 훅: `useReducedMotion` (a11y) + `useInView` (스크롤 reveal)
  - 0-dependency 코어 — React peer만, Tailwind 비종속 (inline style 기반)
  - 모든 컴포넌트 `prefers-reduced-motion` 자동 존중
  - `aria-label`로 원문을 스크린리더에 노출, 애니메이션 span은 `aria-hidden`
  - ESM/CJS dual export + .d.ts, Next.js RSC 호환 (use client 자동 주입)
  - Apache-2.0 라이선스
