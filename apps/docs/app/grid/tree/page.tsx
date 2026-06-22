import { DemoPage } from '@/components/demo-page';
import { treeCode } from '@/lib/grid-demo-code';
import { TreeDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage titleKey="nav.grid.tree" leadKey="gridDemo.tree" Example={TreeDemo} code={treeCode} />
  );
}
