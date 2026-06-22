import { DemoPage } from '@/components/demo-page';
import { pickGridProps } from '@/lib/grid-api';
import { paginationCode } from '@/lib/grid-demo-code';
import { PaginationDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.pagination"
      leadKey="gridDemo.pagination"
      Example={PaginationDemo}
      code={paginationCode}
      api={[{ title: 'GridProps', rows: pickGridProps(['pageSize', 'showPagination']) }]}
    />
  );
}
