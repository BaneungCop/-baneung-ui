import { DemoPage } from '@/components/demo-page';
import { FooterAggregateDemo } from '@/lib/grid-advanced-demos';
import { pickGridColumnFields, pickGridProps } from '@/lib/grid-api';
import { footerAggregateCode } from '@/lib/grid-demo-code';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.footerAggregate"
      leadKey="gridDemo.footerAggregate"
      Example={FooterAggregateDemo}
      code={footerAggregateCode}
      api={[
        { title: 'GridProps', rows: pickGridProps(['showFooter']) },
        { title: 'GridColumn', rows: pickGridColumnFields(['aggregate']) },
      ]}
    />
  );
}
