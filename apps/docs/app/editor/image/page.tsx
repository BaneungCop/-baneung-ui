import { DemoPage } from '@/components/demo-page';
import { pickEditorProps } from '@/lib/editor-api';
import { imageCode } from '@/lib/editor-demo-code';
import { ImageDemo } from '@/lib/editor-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.editor.image"
      leadKey="editorDemo.image"
      Example={ImageDemo}
      code={imageCode}
      api={[{ title: 'EditorProps', rows: pickEditorProps(['onImageUpload']) }]}
    />
  );
}
