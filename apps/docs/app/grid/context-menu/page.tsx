import { DemoPage } from '@/components/demo-page';
import { contextMenuCode } from '@/lib/grid-demo-code';
import { ContextMenuDemo } from '@/lib/grid-phase3-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.contextMenu"
      leadKey="gridDemo.contextMenu"
      Example={ContextMenuDemo}
      code={contextMenuCode}
    />
  );
}
