import { DemoPage } from '@/components/demo-page';
import { editingCode } from '@/lib/grid-demo-code';
import { EditableSelectableDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.editing"
      leadKey="gridDemo.editing"
      Example={EditableSelectableDemo}
      code={editingCode}
    />
  );
}
