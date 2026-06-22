import { DemoPage } from '@/components/demo-page';
import { externalPaginationCode } from '@/lib/grid-demo-code';
import { ExternalPaginationDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.externalPagination"
      leadKey="gridDemo.externalPagination"
      Example={ExternalPaginationDemo}
      code={externalPaginationCode}
    />
  );
}
