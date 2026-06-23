import { ChartDemoPage } from '@/components/chart-demo-page';
import { chartBaseProps, radarChartProps } from '@/lib/chart-api';
import { radarChartCode } from '@/lib/chart-demo-code';
import { RadarChartOutlineDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.radar.outline"
      leadKey="chartDemo.radarOutline"
      Example={RadarChartOutlineDemo}
      code={radarChartCode}
      api={[
        { title: 'RadarChartProps', rows: radarChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
