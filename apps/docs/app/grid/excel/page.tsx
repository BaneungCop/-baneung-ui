import { DemoPage } from '@/components/demo-page';
import { ExcelIntegrationDemo } from '@/lib/grid-advanced-demos';
import { pickGridHandleMethods, pickGridProps } from '@/lib/grid-api';
import { excelCode } from '@/lib/grid-demo-code';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.excel"
      leadKey="gridDemo.excel"
      Example={ExcelIntegrationDemo}
      code={excelCode}
      api={[{ title: 'GridProps', rows: pickGridProps(['clipboard']) }]}
      apiHandles={[
        { title: 'GridHandle', rows: pickGridHandleMethods(['exportXlsx', 'exportCsv']) },
      ]}
    />
  );
}
