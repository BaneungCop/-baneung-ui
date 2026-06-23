import { ChartDemoPage } from '@/components/chart-demo-page';
import { chartBaseProps, mixedChartProps } from '@/lib/chart-api';
import { mixedChartCode } from '@/lib/chart-demo-code';
import { MixedChartParetoDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.bar.mixed"
      leadKey="chartDemo.mixed"
      Example={MixedChartParetoDemo}
      code={mixedChartCode}
      api={[
        { title: 'MixedChartProps', rows: mixedChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
