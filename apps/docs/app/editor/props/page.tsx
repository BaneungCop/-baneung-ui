'use client';

import { Heading, Lead, Muted, Separator } from '@baneung-pack/ui';

import { useI18n } from '@/components/i18n-provider';
import {
  editorHandleMethods,
  editorProps,
  editorToolbarItems,
  type EditorApiRow,
} from '@/lib/editor-api';

function PropsTable({ rows, locale }: { rows: EditorApiRow[]; locale: 'ko' | 'en' }) {
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
            <tr key={r.prop} className="border-b border-border-subtle">
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

export default function EditorPropsPage() {
  const { t, locale } = useI18n();
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>{t('propsPage.editor.title')}</Heading>
        <Lead>{t('propsPage.editor.lead')}</Lead>
      </header>

      <Separator />

      <section className="flex flex-col gap-4">
        <Heading level={2} className="text-2xl">
          EditorProps
        </Heading>
        <PropsTable rows={editorProps} locale={locale} />
      </section>

      <section className="flex flex-col gap-4">
        <Heading level={2} className="text-2xl">
          {t('propsPage.editor.handleHeading')}
        </Heading>
        <Muted className="text-xs">{t('propsPage.editor.handleNote')}</Muted>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border-default">
                <th className="px-3 py-2 text-left font-medium">{t('propsPage.method')}</th>
                <th className="px-3 py-2 text-left font-medium">{t('propsPage.returns')}</th>
                <th className="px-3 py-2 text-left font-medium">{t('api.description')}</th>
              </tr>
            </thead>
            <tbody className="text-foreground-muted">
              {editorHandleMethods.map((m) => (
                <tr key={m.method} className="border-b border-border-subtle">
                  <td className="px-3 py-2 font-mono text-foreground">{m.method}</td>
                  <td className="px-3 py-2 font-mono text-xs">{m.ret}</td>
                  <td className="px-3 py-2">{locale === 'en' ? m.desc[1] : m.desc[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <Heading level={2} className="text-2xl">
          {t('propsPage.editor.toolbarHeading')}
        </Heading>
        <Muted className="text-xs">{t('propsPage.editor.toolbarNote')}</Muted>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border-default">
                <th className="px-3 py-2 text-left font-medium">
                  {t('propsPage.editor.itemColumn')}
                </th>
                <th className="px-3 py-2 text-left font-medium">{t('api.description')}</th>
              </tr>
            </thead>
            <tbody className="text-foreground-muted">
              {editorToolbarItems.map((row) => (
                <tr key={row.item} className="border-b border-border-subtle">
                  <td className="px-3 py-2 font-mono text-xs text-foreground">{row.item}</td>
                  <td className="px-3 py-2">{locale === 'en' ? row.desc[1] : row.desc[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
