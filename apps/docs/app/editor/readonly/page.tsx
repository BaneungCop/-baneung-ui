import { DemoPage } from '@/components/demo-page';
import { pickEditorProps } from '@/lib/editor-api';
import { readOnlyCode } from '@/lib/editor-demo-code';
import { ReadOnlyDemo } from '@/lib/editor-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.editor.readonly"
      leadKey="editorDemo.readonly"
      Example={ReadOnlyDemo}
      code={readOnlyCode}
      api={[{ title: 'EditorProps', rows: pickEditorProps(['readOnly', 'value']) }]}
    />
  );
}
