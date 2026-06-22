import { DemoPage } from '@/components/demo-page';
import { fullCode } from '@/lib/editor-demo-code';
import { FullFeatureDemo } from '@/lib/editor-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.editor.full"
      leadKey="editorDemo.full"
      Example={FullFeatureDemo}
      code={fullCode}
    />
  );
}
