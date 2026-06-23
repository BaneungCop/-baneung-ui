import { ChartDemoPage } from '@/components/chart-demo-page';
import { flowChartProps } from '@/lib/chart-api';
import { flowChartCode } from '@/lib/chart-demo-code';
import { FlowChartBasicDemo } from '@/lib/flow-demo';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.flow"
      leadKey="chartDemo.flow"
      Example={FlowChartBasicDemo}
      code={flowChartCode}
      api={[{ title: 'FlowChartProps', rows: flowChartProps }]}
    />
  );
}
