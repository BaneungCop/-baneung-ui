import { ChartDemoPage } from '@/components/chart-demo-page';
import { flowChartProps } from '@/lib/chart-api';
import { flowChartCode } from '@/lib/chart-demo-code';
import { FlowChartCustomEdgeDemo } from '@/lib/flow-demo';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.flow.custom"
      leadKey="chartDemo.flowCustom"
      Example={FlowChartCustomEdgeDemo}
      code={flowChartCode}
      api={[{ title: 'FlowChartProps', rows: flowChartProps }]}
    />
  );
}
