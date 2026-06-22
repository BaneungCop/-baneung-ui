import { DemoPage } from '@/components/demo-page';
import { pickGridColumnFields, pickGridHandleMethods, pickGridProps } from '@/lib/grid-api';
import { editingCode } from '@/lib/grid-demo-code';
import { EditableSelectableDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.editing"
      leadKey="gridDemo.editing"
      Example={EditableSelectableDemo}
      code={editingCode}
      api={[
        { title: 'GridProps', rows: pickGridProps(['selectable', 'onRowChange', 'getRowId']) },
        { title: 'GridColumn', rows: pickGridColumnFields(['editable', 'editor']) },
      ]}
      apiHandles={[
        {
          title: 'GridHandle',
          rows: pickGridHandleMethods([
            'getSavedData',
            'getChangedData',
            'getDeletedData',
            'deleteSelected',
            'reset',
          ]),
        },
      ]}
    />
  );
}
