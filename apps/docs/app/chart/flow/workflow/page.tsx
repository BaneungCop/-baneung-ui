import { ChartDemoPage } from '@/components/chart-demo-page';
import { flowChartProps } from '@/lib/chart-api';
import { flowChartCode } from '@/lib/chart-demo-code';
import { FlowChartWorkflowDemo } from '@/lib/flow-demo';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.flow.workflow"
      leadKey="chartDemo.flowWorkflow"
      Example={FlowChartWorkflowDemo}
      code={flowChartCode}
      api={[{ title: 'FlowChartProps', rows: flowChartProps }]}
    />
  );
}
