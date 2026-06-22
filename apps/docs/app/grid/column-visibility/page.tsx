import { DemoPage } from '@/components/demo-page';
import { ColumnVisibilityDemo } from '@/lib/grid-advanced-demos';
import { pickGridColumnFields, pickGridHandleMethods, pickGridProps } from '@/lib/grid-api';
import { columnVisibilityCode } from '@/lib/grid-demo-code';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.columnVisibility"
      leadKey="gridDemo.columnVisibility"
      Example={ColumnVisibilityDemo}
      code={columnVisibilityCode}
      api={[
        {
          title: 'GridProps',
          rows: pickGridProps(['showColumnMenu', 'columnVisibility', 'onColumnVisibilityChange']),
        },
        { title: 'GridColumn', rows: pickGridColumnFields(['hidden', 'hideable']) },
      ]}
      apiHandles={[
        {
          title: 'GridHandle',
          rows: pickGridHandleMethods(['getColumnVisibility', 'toggleColumnVisibility']),
        },
      ]}
    />
  );
}
