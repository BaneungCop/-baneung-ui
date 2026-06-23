import { ChartDemoPage } from '@/components/chart-demo-page';
import { chartBaseProps, lineChartProps } from '@/lib/chart-api';
import { lineChartCode } from '@/lib/chart-demo-code';
import { LineChartSmoothDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.line.smooth"
      leadKey="chartDemo.lineSmooth"
      Example={LineChartSmoothDemo}
      code={lineChartCode}
      api={[
        { title: 'LineChartProps', rows: lineChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
