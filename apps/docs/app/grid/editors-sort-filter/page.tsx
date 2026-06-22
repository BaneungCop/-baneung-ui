import { DemoPage } from '@/components/demo-page';
import { editorsSortFilterCode } from '@/lib/grid-demo-code';
import { EditorTypesDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.editorsSortFilter"
      leadKey="gridDemo.editorsSortFilter"
      Example={EditorTypesDemo}
      code={editorsSortFilterCode}
    />
  );
}
