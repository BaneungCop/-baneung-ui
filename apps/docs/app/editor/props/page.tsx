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
        <Heading level={1}>Editor · Props</Heading>
        <Lead>
          {locale === 'en'
            ? 'Reference for Editor component props, ref handle methods, and toolbar items.'
            : 'Editor 컴포넌트의 props, ref 핸들 메서드, 툴바 항목 레퍼런스.'}
        </Lead>
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
          EditorHandle (ref)
        </Heading>
        <Muted className="text-xs">
          {locale === 'en' ? (
            <>
              Use <code>useRef&lt;EditorHandle&gt;</code> to access the imperative API.
            </>
          ) : (
            <>
              <code>useRef&lt;EditorHandle&gt;</code>로 명령형 API에 접근합니다.
            </>
          )}
        </Muted>
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
          ToolbarItem
        </Heading>
        <Muted className="text-xs">
          {locale === 'en' ? (
            <>
              Items you can put in the <code>toolbar</code> prop. Use a 2D array to group them.
            </>
          ) : (
            <>
              <code>toolbar</code> prop에 넣을 수 있는 항목들. 2차원 배열로 그룹을 나눕니다.
            </>
          )}
        </Muted>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border-default">
                <th className="px-3 py-2 text-left font-medium">
                  {locale === 'en' ? 'Item' : '항목'}
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
