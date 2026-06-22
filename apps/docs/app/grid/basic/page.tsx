import { DemoPage } from '@/components/demo-page';
import { basicCode } from '@/lib/grid-demo-code';
import { BasicDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.basic"
      leadKey="gridDemo.basic"
      Example={BasicDemo}
      code={basicCode}
    />
  );
}
