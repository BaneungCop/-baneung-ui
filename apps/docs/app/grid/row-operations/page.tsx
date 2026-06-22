import { DemoPage } from '@/components/demo-page';
import { rowOperationsCode } from '@/lib/grid-demo-code';
import { RowOperationsDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.rowOperations"
      leadKey="gridDemo.rowOperations"
      Example={RowOperationsDemo}
      code={rowOperationsCode}
    />
  );
}
