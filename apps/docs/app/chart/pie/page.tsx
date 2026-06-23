import { ChartDemoPage } from '@/components/chart-demo-page';
import { chartBaseProps, pieChartProps } from '@/lib/chart-api';
import { pieChartCode } from '@/lib/chart-demo-code';
import { PieChartDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.pie"
      leadKey="chartDemo.pie"
      Example={PieChartDemo}
      code={pieChartCode}
      api={[
        { title: 'PieChartProps', rows: pieChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
