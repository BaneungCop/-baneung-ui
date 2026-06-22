import { DemoPage } from '@/components/demo-page';
import { ConditionalStyleDemo } from '@/lib/grid-advanced-demos';
import { conditionalStyleCode } from '@/lib/grid-demo-code';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.conditionalStyle"
      leadKey="gridDemo.conditionalStyle"
      Example={ConditionalStyleDemo}
      code={conditionalStyleCode}
    />
  );
}
