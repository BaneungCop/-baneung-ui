'use client';

import * as React from 'react';

import { Heading, Lead, Separator } from '@baneung-pack/ui';

import { ExampleSection } from '@/components/example-section';
import { useI18n } from '@/components/i18n-provider';

/**
 * 데모 페이지 공통 레이아웃 — 제목 + 리드 + ExampleSection.
 * 제목/리드를 i18n 키로 받아 자동 번역.
 */
export function DemoPage({
  titleKey,
  leadKey,
  Example,
  code,
}: {
  titleKey: string;
  leadKey: string;
  Example: React.ComponentType;
  code?: string;
}) {
  const { t } = useI18n();
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>{t(titleKey)}</Heading>
        <Lead>{t(leadKey)}</Lead>
      </header>
      <Separator />
      <ExampleSection Example={Example} code={code} />
    </div>
  );
}
