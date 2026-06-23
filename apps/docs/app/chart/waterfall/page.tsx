import { ChartDemoPage } from '@/components/chart-demo-page';
import { waterfallChartProps } from '@/lib/chart-api';
import { waterfallChartCode } from '@/lib/chart-demo-code';
import { WaterfallChartDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.waterfall"
      leadKey="chartDemo.waterfall"
      Example={WaterfallChartDemo}
      code={waterfallChartCode}
      api={[{ title: 'WaterfallChartProps', rows: waterfallChartProps }]}
    />
  );
}
