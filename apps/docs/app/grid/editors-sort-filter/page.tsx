import { DemoPage } from '@/components/demo-page';
import { pickGridColumnFields } from '@/lib/grid-api';
import { editorsSortFilterCode } from '@/lib/grid-demo-code';
import { EditorTypesDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.editorsSortFilter"
      leadKey="gridDemo.editorsSortFilter"
      Example={EditorTypesDemo}
      code={editorsSortFilterCode}
      api={[
        {
          title: 'GridColumn',
          rows: pickGridColumnFields([
            'editable',
            'editor',
            'options',
            'min / max',
            'dateFormat',
            'sortable',
            'filterable',
          ]),
        },
      ]}
    />
  );
}
