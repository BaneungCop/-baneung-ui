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
import type { EditorApiRow, EditorHandleMethod } from '@/lib/editor-api';
import type { GridApiRow, GridHandleMethod } from '@/lib/grid-api';

interface DemoApiSection {
  /** 표 제목 (예: 'GridProps', 'GridColumn 필드'). */
  title: string;
  /** prop / 메서드 행. Grid/Editor 어느 모듈에서 가져왔든 같은 구조. */
  rows: GridApiRow[] | EditorApiRow[];
}

interface DemoApiHandleSection {
  title: string;
  rows: GridHandleMethod[] | EditorHandleMethod[];
}

/**
 * 데모 페이지 공통 레이아웃 — 제목 + 리드 + ExampleSection + 선택적 관련 API 섹션.
 *
 * `api`와 `apiHandles`는 각 데모와 관련된 prop / 메서드만 골라 전달.
 * (전체 API는 /grid/props · /editor/props 페이지에서 별도로 표시)
 */
export function DemoPage({
  titleKey,
  leadKey,
  Example,
  code,
  api,
  apiHandles,
}: {
  titleKey: string;
  leadKey: string;
  Example: React.ComponentType;
  code?: string;
  api?: DemoApiSection[];
  apiHandles?: DemoApiHandleSection[];
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

      {(api?.length || apiHandles?.length) && (
        <>
          <Separator />
          <Heading level={2}>{t('componentShell.apiHeading')}</Heading>
          {api?.map((section) => (
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
                      {(section.rows as GridApiRow[]).map((r) => (
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
          {apiHandles?.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
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
                      {(section.rows as GridHandleMethod[]).map((m) => (
                        <tr
                          key={m.method}
                          className="border-b border-border-subtle align-top last:border-b-0"
                        >
                          <td className="px-3 py-2 font-mono text-foreground">{m.method}</td>
                          <td className="px-3 py-2 font-mono text-xs">{m.ret}</td>
                          <td className="px-3 py-2">{locale === 'en' ? m.desc[1] : m.desc[0]}</td>
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
