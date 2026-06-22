import { DemoPage } from '@/components/demo-page';
import { saveViewCode } from '@/lib/grid-demo-code';
import { ViewPersistenceDemo } from '@/lib/grid-phase3-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.saveView"
      leadKey="gridDemo.saveView"
      Example={ViewPersistenceDemo}
      code={saveViewCode}
    />
  );
}
