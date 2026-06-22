import { DemoPage } from '@/components/demo-page';
import { MultiSortResizeDemo } from '@/lib/grid-advanced-demos';
import { multiSortResizeCode } from '@/lib/grid-demo-code';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.multiSortResize"
      leadKey="gridDemo.multiSortResize"
      Example={MultiSortResizeDemo}
      code={multiSortResizeCode}
    />
  );
}
