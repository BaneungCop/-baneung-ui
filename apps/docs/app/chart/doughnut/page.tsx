import { ChartDemoPage } from '@/components/chart-demo-page';
import { chartBaseProps, doughnutChartProps } from '@/lib/chart-api';
import { doughnutChartCode } from '@/lib/chart-demo-code';
import { DoughnutChartDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.doughnut"
      leadKey="chartDemo.doughnut"
      Example={DoughnutChartDemo}
      code={doughnutChartCode}
      api={[
        { title: 'DoughnutChartProps', rows: doughnutChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
