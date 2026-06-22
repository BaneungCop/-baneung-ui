import { DemoPage } from '@/components/demo-page';
import { paginationCode } from '@/lib/grid-demo-code';
import { PaginationDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.pagination"
      leadKey="gridDemo.pagination"
      Example={PaginationDemo}
      code={paginationCode}
    />
  );
}
