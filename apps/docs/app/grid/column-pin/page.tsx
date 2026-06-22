import { DemoPage } from '@/components/demo-page';
import { PinnedColumnsDemo } from '@/lib/grid-advanced-demos';
import { pickGridColumnFields } from '@/lib/grid-api';
import { columnPinCode } from '@/lib/grid-demo-code';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.columnPin"
      leadKey="gridDemo.columnPin"
      Example={PinnedColumnsDemo}
      code={columnPinCode}
      api={[{ title: 'GridColumn', rows: pickGridColumnFields(['pin']) }]}
    />
  );
}
