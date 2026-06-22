import { DemoPage } from '@/components/demo-page';
import { ColumnVisibilityDemo } from '@/lib/grid-advanced-demos';
import { columnVisibilityCode } from '@/lib/grid-demo-code';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.columnVisibility"
      leadKey="gridDemo.columnVisibility"
      Example={ColumnVisibilityDemo}
      code={columnVisibilityCode}
    />
  );
}
