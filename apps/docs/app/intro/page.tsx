'use client';

import {
  Badge,
  Button,
  ButtonGroup,
  Heading,
  Lead,
  Muted,
  Separator,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  cn,
} from '@baneung-pack/ui';

import { useI18n } from '@/components/i18n-provider';

const variants = ['primary', 'secondary', 'outline', 'ghost', 'destructive'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

export default function HomePage() {
  const { t } = useI18n();
  return (
    <main className={cn('mx-auto max-w-3xl px-8 py-16', 'flex flex-col gap-10')}>
      <header className="flex flex-col gap-2">
        <Heading level={1}>{t('intro.title')}</Heading>
        <Lead>{t('intro.lead')}</Lead>
        <Muted>{t('intro.demoSubtitle')}</Muted>
      </header>

      <Separator />

      <section className="flex flex-col gap-4">
        <Heading level={2}>{t('intro.section.variantSize')}</Heading>
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-foreground-muted">
                {t('intro.label.variantSize')}
              </th>
              {sizes.map((s) => (
                <th
                  key={s}
                  className="px-3 py-2 text-left text-xs font-medium text-foreground-muted"
                >
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {variants.map((v) => (
              <tr key={v}>
                <td className="px-3 py-2 text-xs text-foreground-muted">{v}</td>
                {sizes.map((s) => (
                  <td key={s} className="px-3 py-2">
                    <Button variant={v} size={s}>
                      Button
                    </Button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>{t('intro.section.loading')}</Heading>
        <div className="flex gap-3">
          <Button loading>{t('intro.btn.saving')}</Button>
          <Button asChild variant="outline">
            <a href="https://github.com" rel="noreferrer noopener" target="_blank">
              {t('intro.btn.github')}
            </a>
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>{t('intro.section.buttonGroup')}</Heading>
        <div className="flex flex-col gap-3">
          <ButtonGroup aria-label={t('intro.aria.pagination')}>
            <Button variant="outline">{t('intro.btn.prev')}</Button>
            <Button variant="outline">{t('intro.btn.current')}</Button>
            <Button variant="outline">{t('intro.btn.next')}</Button>
          </ButtonGroup>
          <ButtonGroup orientation="vertical" aria-label={t('intro.aria.vertical')}>
            <Button variant="outline">A</Button>
            <Button variant="outline">B</Button>
            <Button variant="outline">C</Button>
          </ButtonGroup>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>{t('intro.section.toggle')}</Heading>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle aria-label={t('intro.toggle.bold')} defaultPressed>
            B
          </Toggle>
          <ToggleGroup type="single" defaultValue="left" aria-label={t('intro.toggle.align')}>
            <ToggleGroupItem variant="outline" value="left">
              {t('intro.toggle.left')}
            </ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="center">
              {t('intro.toggle.center')}
            </ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="right">
              {t('intro.toggle.right')}
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="multiple" aria-label={t('intro.toggle.format')}>
            <ToggleGroupItem variant="outline" value="bold">
              B
            </ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="italic">
              I
            </ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="underline">
              U
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      <Separator />

      <footer className="flex items-center gap-2 text-sm text-foreground-subtle">
        <Badge variant="success">{t('intro.footer.readyBadge')}</Badge>
        <span>@baneung-pack/ui — Phase 4</span>
      </footer>
    </main>
  );
}
