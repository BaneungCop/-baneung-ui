---
'@baneung-pack/ui': patch
---

`Select`: Dialog/Sheet/Drawer 내부에서 옵션 리스트의 휠 스크롤이 동작하지 않던 버그 수정.

# 원인

Radix Dialog(및 그 위에 빌드된 Sheet)는 `react-remove-scroll`을 적용해
document-level capture 단계에서 자기 트리 밖의 wheel/touchmove 이벤트를
`preventDefault()` 처리한다. `Select`의 옵션 리스트는 `Popover.Portal`로
`document.body`에 portal되어 Dialog의 scroll-lock 허용 영역 **밖**에 위치 →
CommandList의 `overflow-y-auto`가 휠로는 작동하지 않았다.

# 수정

트리거의 가장 가까운 `[role="dialog"]` 조상을 찾아, 있으면 그 요소를
`Popover.Portal`의 `container`로 지정. Dialog 트리 내부면 react-remove-scroll이
허용한다. Dialog/Sheet/Drawer(vaul도 `role="dialog"`) 모두에 적용.
일반 컨텍스트에선 `container=undefined` → 기본 `document.body`로 portal되어
기존 동작 그대로 유지.
