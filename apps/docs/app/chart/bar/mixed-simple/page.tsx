import { ChartDemoPage } from '@/components/chart-demo-page';
import { chartBaseProps, mixedChartProps } from '@/lib/chart-api';
import { mixedChartCode } from '@/lib/chart-demo-code';
import { MixedChartSimpleDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.bar.mixedSimple"
      leadKey="chartDemo.mixedSimple"
      Example={MixedChartSimpleDemo}
      code={mixedChartCode}
      api={[
        { title: 'MixedChartProps', rows: mixedChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
