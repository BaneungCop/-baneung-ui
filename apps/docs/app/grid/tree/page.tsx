import { DemoPage } from '@/components/demo-page';
import { pickGridProps } from '@/lib/grid-api';
import { treeCode } from '@/lib/grid-demo-code';
import { TreeDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.tree"
      leadKey="gridDemo.tree"
      Example={TreeDemo}
      code={treeCode}
      api={[
        {
          title: 'GridProps',
          rows: pickGridProps(['tree', 'getChildren', 'defaultExpandedIds']),
        },
      ]}
    />
  );
}
