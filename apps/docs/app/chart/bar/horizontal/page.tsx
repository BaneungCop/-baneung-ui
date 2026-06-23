import { ChartDemoPage } from '@/components/chart-demo-page';
import { barChartProps, chartBaseProps } from '@/lib/chart-api';
import { barChartCode } from '@/lib/chart-demo-code';
import { BarChartHorizontalDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.bar.horizontal"
      leadKey="chartDemo.barHorizontal"
      Example={BarChartHorizontalDemo}
      code={barChartCode}
      api={[
        { title: 'BarChartProps', rows: barChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
