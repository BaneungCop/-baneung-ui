import { DemoPage } from '@/components/demo-page';
import { editorProps, pickEditorHandleMethods } from '@/lib/editor-api';
import { fullCode } from '@/lib/editor-demo-code';
import { FullFeatureDemo } from '@/lib/editor-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.editor.full"
      leadKey="editorDemo.full"
      Example={FullFeatureDemo}
      code={fullCode}
      api={[{ title: 'EditorProps', rows: editorProps }]}
      apiHandles={[
        {
          title: 'EditorHandle',
          rows: pickEditorHandleMethods([
            'getHTML',
            'setHTML',
            'insertHTML',
            'focus',
            'getText',
            'getElement',
          ]),
        },
      ]}
    />
  );
}
