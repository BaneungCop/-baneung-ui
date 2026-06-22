'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Heading,
  Lead,
  Muted,
  Separator,
} from '@baneung-pack/ui';

import { useI18n } from '@/components/i18n-provider';
import {
  gridColumnFields,
  gridHandleMethods,
  gridProps,
  type GridApiRow,
  type GridHandleMethod,
} from '@/lib/grid-api';

function PropsTable({ rows, locale }: { rows: GridApiRow[]; locale: 'ko' | 'en' }) {
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
              <td className="px-3 py-2 font-mono">{r.type}</td>
              <td className="px-3 py-2 font-mono">{r.defaultValue}</td>
              <td className="px-3 py-2">{locale === 'en' ? r.desc[1] : r.desc[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HandleTable({ rows, locale }: { rows: GridHandleMethod[]; locale: 'ko' | 'en' }) {
  const { t } = useI18n();
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border-default">
            <th className="px-3 py-2 text-left font-medium">
              {locale === 'en' ? 'Method' : '메서드'}
            </th>
            <th className="px-3 py-2 text-left font-medium">
              {locale === 'en' ? 'Returns' : '반환'}
            </th>
            <th className="px-3 py-2 text-left font-medium">{t('api.description')}</th>
          </tr>
        </thead>
        <tbody className="text-foreground-muted">
          {rows.map((m) => (
            <tr key={m.method} className="border-b border-border-subtle align-top last:border-b-0">
              <td className="px-3 py-2 font-mono text-foreground">{m.method}</td>
              <td className="px-3 py-2 font-mono">{m.ret}</td>
              <td className="px-3 py-2">{locale === 'en' ? m.desc[1] : m.desc[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GridPropsPage() {
  const { locale } = useI18n();
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>Grid · Props</Heading>
        <Lead>
          {locale === 'en'
            ? 'Reference for all props of @baneung-pack/grid, the GridColumn fields, and the GridHandle ref API.'
            : '@baneung-pack/grid의 전체 props와 GridColumn 필드, GridHandle ref API 레퍼런스.'}
        </Lead>
      </header>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>GridProps</CardTitle>
        </CardHeader>
        <CardContent>
          <PropsTable rows={gridProps} locale={locale} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{locale === 'en' ? 'GridColumn fields' : 'GridColumn 필드'}</CardTitle>
        </CardHeader>
        <CardContent>
          <PropsTable rows={gridColumnFields} locale={locale} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>GridHandle (ref API)</CardTitle>
        </CardHeader>
        <CardContent>
          <HandleTable rows={gridHandleMethods} locale={locale} />
        </CardContent>
      </Card>

      <Muted className="text-xs">
        {locale === 'en' ? (
          <>
            💡 <code>cellSelection</code> (
            <code>&apos;none&apos; | &apos;single&apos; | &apos;multi&apos;</code>) and{' '}
            <code>selectable</code> are independent axes — cellSelection is for visual cell
            selection, selectable is for checkbox-based row selection.
          </>
        ) : (
          <>
            💡 <code>cellSelection</code> (
            <code>&apos;none&apos; | &apos;single&apos; | &apos;multi&apos;</code>)과{' '}
            <code>selectable</code>은 별개 축입니다. cellSelection은 그리드 셀의 시각 선택,
            selectable은 체크박스 기반 행 선택.
          </>
        )}
      </Muted>
    </div>
  );
}
