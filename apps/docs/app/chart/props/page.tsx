'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Heading,
  Lead,
  Separator,
} from '@baneung-pack/ui';

import { useI18n } from '@/components/i18n-provider';
import {
  areaChartProps,
  barChartProps,
  chartBaseProps,
  doughnutChartProps,
  lineChartProps,
  mixedChartProps,
  pieChartProps,
  radarChartProps,
  scatterChartProps,
  waterfallChartProps,
  type ChartApiRow,
} from '@/lib/chart-api';

function PropsTable({ rows, locale }: { rows: ChartApiRow[]; locale: 'ko' | 'en' }) {
  const { t } = useI18n();
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border-default">
            <th className="px-3 py-2 text-left font-medium">{t('api.property')}</th>
            <th className="px-3 py-2 text-left font-medium">{t('api.type')}</th>
            <th className="px-3 py-2 text-left font-medium">{t('api.default')}</th>
            <th className="px-3 py-2 text-left font-medium">{t('api.description')}</th>
          </tr>
        </thead>
        <tbody className="text-foreground-muted">
          {rows.map((r) => (
            <tr key={r.prop} className="border-b border-border-subtle align-top last:border-b-0">
              <td className="px-3 py-2 font-mono text-foreground">{r.prop}</td>
              <td className="px-3 py-2 font-mono text-xs">{r.type}</td>
              <td className="px-3 py-2 font-mono text-xs">{r.defaultValue}</td>
              <td className="px-3 py-2">{locale === 'en' ? r.desc[1] : r.desc[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ChartPropsPage() {
  const { locale } = useI18n();
  const sections: { title: string; rows: ChartApiRow[] }[] = [
    { title: 'ChartBaseProps (공통)', rows: chartBaseProps },
    { title: 'BarChartProps', rows: barChartProps },
    { title: 'LineChartProps', rows: lineChartProps },
    { title: 'AreaChartProps', rows: areaChartProps },
    { title: 'MixedChartProps', rows: mixedChartProps },
    { title: 'ScatterChartProps', rows: scatterChartProps },
    { title: 'RadarChartProps', rows: radarChartProps },
    { title: 'WaterfallChartProps', rows: waterfallChartProps },
    { title: 'PieChartProps', rows: pieChartProps },
    { title: 'DoughnutChartProps', rows: doughnutChartProps },
  ];

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>Chart · Props</Heading>
        <Lead>
          {locale === 'en'
            ? 'Reference for all props of @baneung-pack/chart (Bar / Line / Area / Pie / Doughnut).'
            : '@baneung-pack/chart의 전체 props 레퍼런스 (Bar / Line / Area / Pie / Doughnut).'}
        </Lead>
      </header>

      <Separator />

      {sections.map((s) => (
        <Card key={s.title}>
          <CardHeader>
            <CardTitle>{s.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <PropsTable rows={s.rows} locale={locale} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
