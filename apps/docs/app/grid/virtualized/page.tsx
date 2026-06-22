import { DemoPage } from '@/components/demo-page';
import { pickGridProps } from '@/lib/grid-api';
import { virtualizedCode } from '@/lib/grid-demo-code';
import { VirtualizedDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.virtualized"
      leadKey="gridDemo.virtualized"
      Example={VirtualizedDemo}
      code={virtualizedCode}
      api={[
        {
          title: 'GridProps',
          rows: pickGridProps(['virtualized', 'rowHeight', 'height', 'autoSize']),
        },
      ]}
    />
  );
}
