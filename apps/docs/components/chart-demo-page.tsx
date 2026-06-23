'use client';

import * as React from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Heading,
  Lead,
  Separator,
} from '@baneung-pack/ui';

import { ExampleSection } from '@/components/example-section';
import { useI18n } from '@/components/i18n-provider';
import type { ChartApiRow } from '@/lib/chart-api';

interface ApiSection {
  title: string;
  rows: ChartApiRow[];
}

/**
 * Chart 데모 페이지 공통 레이아웃 — 제목 + 리드 + ExampleSection + 변형 데모 + API 섹션.
 * variants는 단일 페이지에서 여러 데모를 묶을 때 사용 (예: Bar 페이지의 기본/누적/가로).
 */
export function ChartDemoPage({
  titleKey,
  leadKey,
  Example,
  code,
  variants,
  api,
}: {
  titleKey: string;
  leadKey: string;
  Example: React.ComponentType;
  code?: string;
  variants?: { titleKey: string; Example: React.ComponentType }[];
  api?: ApiSection[];
}) {
  const { t, locale } = useI18n();
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>{t(titleKey)}</Heading>
        <Lead>{t(leadKey)}</Lead>
      </header>
      <Separator />
      <ExampleSection Example={Example} code={code} />

      {variants && variants.length > 0 && (
        <>
          {variants.map((v) => (
            <section key={v.titleKey} className="flex flex-col gap-2">
              <Heading level={3}>{t(v.titleKey)}</Heading>
              <ExampleSection Example={v.Example} />
            </section>
          ))}
        </>
      )}

      {api && api.length > 0 && (
        <>
          <Separator />
          <Heading level={2}>{t('componentShell.apiHeading')}</Heading>
          {api.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
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
                      {section.rows.map((r) => (
                        <tr
                          key={r.prop}
                          className="border-b border-border-subtle align-top last:border-b-0"
                        >
                          <td className="px-3 py-2 font-mono text-foreground">{r.prop}</td>
                          <td className="px-3 py-2 font-mono text-xs">{r.type}</td>
                          <td className="px-3 py-2 font-mono text-xs">{r.defaultValue}</td>
                          <td className="px-3 py-2">{locale === 'en' ? r.desc[1] : r.desc[0]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}
