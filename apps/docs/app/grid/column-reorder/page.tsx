import { DemoPage } from '@/components/demo-page';
import { columnReorderCode } from '@/lib/grid-demo-code';
import { ColumnReorderDemo } from '@/lib/grid-phase3-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.columnReorder"
      leadKey="gridDemo.columnReorder"
      Example={ColumnReorderDemo}
      code={columnReorderCode}
    />
  );
}
