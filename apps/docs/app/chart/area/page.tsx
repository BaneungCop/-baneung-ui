import { ChartDemoPage } from '@/components/chart-demo-page';
import { areaChartProps, chartBaseProps } from '@/lib/chart-api';
import { areaChartCode } from '@/lib/chart-demo-code';
import { AreaChartDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.area"
      leadKey="chartDemo.area"
      Example={AreaChartDemo}
      code={areaChartCode}
      api={[
        { title: 'AreaChartProps', rows: areaChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
