import { ChartDemoPage } from '@/components/chart-demo-page';
import { areaChartProps, chartBaseProps } from '@/lib/chart-api';
import { areaChartCode } from '@/lib/chart-demo-code';
import { AreaChartStackedDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.area.stacked"
      leadKey="chartDemo.areaStacked"
      Example={AreaChartStackedDemo}
      code={areaChartCode}
      api={[
        { title: 'AreaChartProps', rows: areaChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
