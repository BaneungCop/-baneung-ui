import { DemoPage } from '@/components/demo-page';
import { keyboardNavCode } from '@/lib/grid-demo-code';
import { KeyboardNavDemo } from '@/lib/grid-phase3-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.keyboardNav"
      leadKey="gridDemo.keyboardNav"
      Example={KeyboardNavDemo}
      code={keyboardNavCode}
    />
  );
}
