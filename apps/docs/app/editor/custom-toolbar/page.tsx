import { DemoPage } from '@/components/demo-page';
import { customToolbarCode } from '@/lib/editor-demo-code';
import { CustomToolbarDemo } from '@/lib/editor-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.editor.customToolbar"
      leadKey="editorDemo.customToolbar"
      Example={CustomToolbarDemo}
      code={customToolbarCode}
    />
  );
}
