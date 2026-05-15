import Link from 'next/link';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Heading,
  Lead,
  Muted,
  Separator,
} from '@baneung-pack/ui';

export default function InstallPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>Install</Heading>
        <Lead>바능 디자인 시스템의 npm 패키지 설치 가이드. 필요한 패키지만 골라서 설치하세요.</Lead>
      </header>

      <Separator />

      <section className="flex flex-col gap-4">
        <Heading level={2} className="text-2xl">
          패키지
        </Heading>
        <ul className="flex flex-col gap-2 text-sm">
          <li>
            <code>@baneung-pack/tokens</code> — CSS / JSON / TS 디자인 토큰 (SSOT). 가장 기본.
          </li>
          <li>
            <code>@baneung-pack/ui</code> — 58개 React 컴포넌트 (Radix 기반).
          </li>
        </ul>
        <Muted className="text-xs">
          Grid 패키지(<code>@baneung-pack/grid</code>) 설치는 별도 — 좌측 메뉴의 패키지 &gt; Grid
          &gt; Install 참조.
        </Muted>
      </section>

      <section className="flex flex-col gap-4">
        <Heading level={2} className="text-2xl">
          전체 설치
        </Heading>
        <Card>
          <CardContent>
            <pre className="overflow-x-auto bg-surface p-3 text-xs font-mono">
              <code>{`# pnpm
pnpm add @baneung-pack/ui @baneung-pack/tokens

# npm
npm install @baneung-pack/ui @baneung-pack/tokens

# yarn
yarn add @baneung-pack/ui @baneung-pack/tokens`}</code>
            </pre>
          </CardContent>
        </Card>

        <Heading level={3} className="text-lg">
          Peer dependencies
        </Heading>
        <ul className="flex flex-col gap-1 text-sm text-foreground-muted">
          <li>
            React <code>^18 || ^19</code>
          </li>
          <li>
            React DOM <code>^18 || ^19</code>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <Heading level={2} className="text-2xl">
          스타일 임포트
        </Heading>
        <Card>
          <CardContent>
            <pre className="overflow-x-auto bg-surface p-3 text-xs font-mono">
              <code>{`// app/layout.tsx — 한 번만 로드
import '@baneung-pack/ui/styles.css';`}</code>
            </pre>
          </CardContent>
        </Card>
        <Muted className="text-xs">
          ui의 styles는 <code>@layer baneung</code>에 격리됩니다. Grid를 함께 쓰면 layer가 자동
          머지되니 별도 설정 불필요.
        </Muted>
      </section>

      <section className="flex flex-col gap-4">
        <Heading level={2} className="text-2xl">
          CSS 격리 (소비자 Tailwind 사용 시)
        </Heading>
        <Card>
          <CardContent>
            <pre className="overflow-x-auto bg-surface p-3 text-xs font-mono">
              <code>{`// 소비자 globals.css — preflight 제외하고 utilities만 import
@import 'tailwindcss/theme';
@import 'tailwindcss/utilities';
/* @import 'tailwindcss/preflight'; ← 의도적으로 제외 (라이브러리가 이미 제공) */

@source "./app/**/*.{ts,tsx}";`}</code>
            </pre>
          </CardContent>
        </Card>
        <Muted className="text-xs">
          소비자가 Tailwind를 자체 임포트할 때 preflight↔라이브러리 utility 충돌을 회피하는 권장
          패턴.
        </Muted>
      </section>

      <Separator />

      <section className="flex flex-col gap-3">
        <Card>
          <CardHeader>
            <CardTitle>다음 단계</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-1 text-sm">
              <li>
                <Link href="/components" className="underline">
                  컴포넌트 카탈로그
                </Link>{' '}
                — UI 58개 컴포넌트
              </li>
              <li>
                <Link href="/grid" className="underline">
                  Grid 가이드
                </Link>{' '}
                — 데이터 그리드 데모/Props
              </li>
              <li>
                <Link href="/tokens" className="underline">
                  디자인 토큰
                </Link>{' '}
                — 컬러/스페이싱/타이포
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
