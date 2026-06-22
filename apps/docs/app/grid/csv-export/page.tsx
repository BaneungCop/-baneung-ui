import { DemoPage } from '@/components/demo-page';
import { csvExportCode } from '@/lib/grid-demo-code';
import { CsvExportDemo } from '@/lib/grid-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.csvExport"
      leadKey="gridDemo.csvExport"
      Example={CsvExportDemo}
      code={csvExportCode}
    />
  );
}
