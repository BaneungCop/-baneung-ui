import { DemoPage } from '@/components/demo-page';
import { customRendererCode } from '@/lib/grid-demo-code';
import { CustomRendererDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.customRenderer"
      leadKey="gridDemo.customRenderer"
      Example={CustomRendererDemo}
      code={customRendererCode}
    />
  );
}
