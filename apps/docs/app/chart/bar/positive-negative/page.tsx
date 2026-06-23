import { ChartDemoPage } from '@/components/chart-demo-page';
import { barChartProps, chartBaseProps } from '@/lib/chart-api';
import { barChartCode } from '@/lib/chart-demo-code';
import { BarChartPositiveNegativeDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.bar.positiveNegative"
      leadKey="chartDemo.barPositiveNegative"
      Example={BarChartPositiveNegativeDemo}
      code={barChartCode}
      api={[
        { title: 'BarChartProps', rows: barChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
