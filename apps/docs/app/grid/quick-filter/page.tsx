import { DemoPage } from '@/components/demo-page';
import { QuickFilterDemo } from '@/lib/grid-advanced-demos';
import { quickFilterCode } from '@/lib/grid-demo-code';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.quickFilter"
      leadKey="gridDemo.quickFilter"
      Example={QuickFilterDemo}
      code={quickFilterCode}
    />
  );
}
