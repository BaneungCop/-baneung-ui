import { DemoPage } from '@/components/demo-page';
import { basicCode } from '@/lib/editor-demo-code';
import { BasicDemo } from '@/lib/editor-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.editor.basic"
      leadKey="editorDemo.basic"
      Example={BasicDemo}
      code={basicCode}
    />
  );
}
