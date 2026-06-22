import { DemoPage } from '@/components/demo-page';
import { pickGridHandleMethods, pickGridProps } from '@/lib/grid-api';
import { rowOperationsCode } from '@/lib/grid-demo-code';
import { RowOperationsDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.rowOperations"
      leadKey="gridDemo.rowOperations"
      Example={RowOperationsDemo}
      code={rowOperationsCode}
      api={[{ title: 'GridProps', rows: pickGridProps(['cellSelection', 'clearOnDelete']) }]}
      apiHandles={[
        {
          title: 'GridHandle',
          rows: pickGridHandleMethods(['addRow', 'removeSelectedRows', 'clearSelectedCells']),
        },
      ]}
    />
  );
}
