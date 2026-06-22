import { DemoPage } from '@/components/demo-page';
import { readOnlyCode } from '@/lib/editor-demo-code';
import { ReadOnlyDemo } from '@/lib/editor-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.editor.readonly"
      leadKey="editorDemo.readonly"
      Example={ReadOnlyDemo}
      code={readOnlyCode}
    />
  );
}
