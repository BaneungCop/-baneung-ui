import { DemoPage } from '@/components/demo-page';
import { PinnedColumnsDemo } from '@/lib/grid-advanced-demos';
import { columnPinCode } from '@/lib/grid-demo-code';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.columnPin"
      leadKey="gridDemo.columnPin"
      Example={PinnedColumnsDemo}
      code={columnPinCode}
    />
  );
}
