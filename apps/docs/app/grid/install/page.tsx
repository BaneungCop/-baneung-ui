import { Card, CardContent, Heading, Lead, Muted, Separator } from '@baneung-pack/ui';

export default function GridInstallPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>Grid · Install</Heading>
        <Lead>
          <code>@baneung-pack/grid</code>만 설치하는 빠른 가이드. 전체 디자인 시스템과 함께
          사용하려면{' '}
          <a href="/install" className="underline">
            시작하기 · Install
          </a>{' '}
          참조.
        </Lead>
      </header>

      <Separator />

      <section className="flex flex-col gap-4">
        <Heading level={2} className="text-2xl">
          패키지 설치
        </Heading>
        <Card>
          <CardContent>
            <pre className="overflow-x-auto bg-surface p-3 text-xs font-mono">
              <code>{`# pnpm
pnpm add @baneung-pack/grid

# npm
npm install @baneung-pack/grid

# yarn
yarn add @baneung-pack/grid`}</code>
            </pre>
          </CardContent>
        </Card>
        <Muted className="text-xs">
          Peer deps: React <code>^18 || ^19</code>, React DOM <code>^18 || ^19</code>. 내부 의존:
          <code> @tanstack/react-virtual</code> (가상화), <code>class-variance-authority</code>,
          <code> clsx</code>, <code>tailwind-merge</code>.
        </Muted>
      </section>

      <section className="flex flex-col gap-4">
        <Heading level={2} className="text-2xl">
          스타일 임포트
        </Heading>
        <Card>
          <CardContent>
            <pre className="overflow-x-auto bg-surface p-3 text-xs font-mono">
              <code>{`// app/layout.tsx
import '@baneung-pack/grid/styles.css';`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-4">
        <Heading level={2} className="text-2xl">
          기본 사용
        </Heading>
        <Card>
          <CardContent>
            <pre className="overflow-x-auto bg-surface p-3 text-xs font-mono">
              <code>{`import { Grid, type GridColumn } from '@baneung-pack/grid';

interface Item { id: number; name: string; price: number }

const columns: GridColumn<Item>[] = [
  { id: 'name', header: '이름', accessor: 'name' },
  {
    id: 'price', header: '가격', accessor: 'price', align: 'right',
    renderer: (v) => \`\${(v as number).toLocaleString()}원\`,
  },
];

const data: Item[] = [
  { id: 1, name: '사과', price: 1000 },
  { id: 2, name: '바나나', price: 2000 },
];

export default function MyPage() {
  return <Grid columns={columns} data={data} pageSize={20} />;
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
