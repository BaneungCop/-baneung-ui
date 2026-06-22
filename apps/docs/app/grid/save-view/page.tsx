import { DemoPage } from '@/components/demo-page';
import { pickGridHandleMethods, pickGridProps } from '@/lib/grid-api';
import { saveViewCode } from '@/lib/grid-demo-code';
import { ViewPersistenceDemo } from '@/lib/grid-phase3-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.saveView"
      leadKey="gridDemo.saveView"
      Example={ViewPersistenceDemo}
      code={saveViewCode}
      api={[{ title: 'GridProps', rows: pickGridProps(['viewKey', 'onViewChange']) }]}
      apiHandles={[
        { title: 'GridHandle', rows: pickGridHandleMethods(['getView', 'setView', 'clearView']) },
      ]}
    />
  );
}
