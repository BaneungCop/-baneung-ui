import { DemoPage } from '@/components/demo-page';
import { controlledCode } from '@/lib/editor-demo-code';
import { ControlledDemo } from '@/lib/editor-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.editor.controlled"
      leadKey="editorDemo.controlled"
      Example={ControlledDemo}
      code={controlledCode}
    />
  );
}
