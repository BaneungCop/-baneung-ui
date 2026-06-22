import { DemoPage } from '@/components/demo-page';
import { MultiSortResizeDemo } from '@/lib/grid-advanced-demos';
import { pickGridColumnFields, pickGridProps } from '@/lib/grid-api';
import { multiSortResizeCode } from '@/lib/grid-demo-code';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.multiSortResize"
      leadKey="gridDemo.multiSortResize"
      Example={MultiSortResizeDemo}
      code={multiSortResizeCode}
      api={[
        { title: 'GridProps', rows: pickGridProps(['resizable', 'onColumnResize']) },
        {
          title: 'GridColumn',
          rows: pickGridColumnFields(['sortable', 'minWidth / maxWidth', 'resizable']),
        },
      ]}
    />
  );
}
