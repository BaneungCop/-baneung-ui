import { ChartDemoPage } from '@/components/chart-demo-page';
import { chartBaseProps, scatterChartProps } from '@/lib/chart-api';
import { scatterChartCode } from '@/lib/chart-demo-code';
import { ScatterChartShapesDemo } from '@/lib/chart-demos';

export default function Page() {
  return (
    <ChartDemoPage
      titleKey="nav.chart.scatter.shapes"
      leadKey="chartDemo.scatterShapes"
      Example={ScatterChartShapesDemo}
      code={scatterChartCode}
      api={[
        { title: 'ScatterChartProps', rows: scatterChartProps },
        { title: 'ChartBaseProps', rows: chartBaseProps },
      ]}
    />
  );
}
