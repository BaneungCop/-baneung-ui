'use client';

import Link from 'next/link';
import * as React from 'react';

import { Badge, Heading, Lead, Muted, Separator } from '@baneung-pack/ui';

import { ApiTable } from '@/components/api-table';
import { ExampleSection } from '@/components/example-section';
import { useI18n } from '@/components/i18n-provider';
import type { ComponentSpec } from '@/lib/components';
import { componentDescriptionsEn } from '@/lib/i18n/component-descriptions';

interface ComponentShellProps {
  spec: ComponentSpec;
}

/**
 * ComponentShell — 컴포넌트별 detail 페이지의 공통 레이아웃.
 *
 * 구성: 카테고리 배지 → 제목 + 설명 → 라이브 예제 → API 표 (props) → import 경로
 */
export function ComponentShell({ spec }: ComponentShellProps) {
  const { title, category, description, slug, Example, code, api, importPath, subpath } = spec;
  const { t, locale } = useI18n();

  // 영문 모드에서 영문 description 사용 (없으면 한국어 fallback)
  const localizedDescription =
    locale === 'en' ? (componentDescriptionsEn[slug] ?? description) : description;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Link href="/components" className="text-xs text-foreground-muted hover:text-foreground">
            {t('componentShell.backToList')}
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{category}</Badge>
          <Heading level={1} className="text-3xl md:text-4xl">
            {title}
          </Heading>
        </div>
        <Lead>{localizedDescription}</Lead>
      </header>

      <Separator />

      <section className="flex flex-col gap-3">
        <Heading level={2}>{t('componentShell.exampleHeading')}</Heading>
        <ExampleSection Example={Example} code={code} />
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>{t('componentShell.installHeading')}</Heading>
        <pre className="overflow-x-auto bg-surface-strong p-4 text-sm">
          <code className="font-mono">{importPath}</code>
        </pre>
        {subpath ? (
          <pre className="overflow-x-auto bg-surface-strong p-4 text-sm">
            <code className="font-mono">{subpath}</code>
          </pre>
        ) : null}
        <Muted className="text-xs">{t('componentShell.subpathNote')}</Muted>
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>{t('componentShell.apiHeading')}</Heading>
        <ApiTable rows={api} slug={slug} />
      </section>
    </div>
  );
}
