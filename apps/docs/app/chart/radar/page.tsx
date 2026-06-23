import { ChartDemoPage } from '@/components/chart-demo-page';
import { chartBaseProps, radarChartProps } from '@/lib/chart-api';
import { radarChartCode } from '@/lib/chart-demo-code';
import { RadarChartDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.radar"
      leadKey="chartDemo.radar"
      Example={RadarChartDemo}
      code={radarChartCode}
      api={[
        { title: 'RadarChartProps', rows: radarChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
