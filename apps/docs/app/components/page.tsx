'use client';

import { Heading, Lead, Separator } from '@baneung-pack/ui';

import { ComponentPreviewGrid } from '@/components/component-preview-card';
import { useI18n } from '@/components/i18n-provider';
import { componentMetadata } from '@/lib/components-metadata';

export default function ComponentsIndexPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>{t('components.title')}</Heading>
        <Lead>
          {componentMetadata.length}
          {t('components.leadSuffix')}
        </Lead>
      </header>

      <Separator />

      <ComponentPreviewGrid />
    </div>
  );
}
