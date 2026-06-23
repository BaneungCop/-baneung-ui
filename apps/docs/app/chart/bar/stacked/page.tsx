import { ChartDemoPage } from '@/components/chart-demo-page';
import { barChartProps, chartBaseProps } from '@/lib/chart-api';
import { barChartCode } from '@/lib/chart-demo-code';
import { BarChartStackedDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.bar.stacked"
      leadKey="chartDemo.barStacked"
      Example={BarChartStackedDemo}
      code={barChartCode}
      api={[
        { title: 'BarChartProps', rows: barChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
