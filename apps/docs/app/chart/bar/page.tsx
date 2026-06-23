import { ChartDemoPage } from '@/components/chart-demo-page';
import { barChartProps, chartBaseProps } from '@/lib/chart-api';
import { barChartCode } from '@/lib/chart-demo-code';
import { BarChartDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.bar"
      leadKey="chartDemo.bar"
      Example={BarChartDemo}
      code={barChartCode}
      api={[
        { title: 'BarChartProps', rows: barChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
