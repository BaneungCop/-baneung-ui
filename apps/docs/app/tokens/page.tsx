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

const semanticColors = [
  { name: 'canvas', label: '바탕', cssVar: '--color-bg-canvas' },
  { name: 'surface', label: '표면', cssVar: '--color-bg-surface' },
  { name: 'surface-strong', label: '표면 강', cssVar: '--color-bg-surface-strong' },
  { name: 'inverse', label: '반전', cssVar: '--color-bg-inverse' },
  { name: 'foreground', label: '본문', cssVar: '--color-text-primary' },
  { name: 'foreground-muted', label: '보조', cssVar: '--color-text-secondary' },
  { name: 'border-default', label: '보더', cssVar: '--color-border-default' },
  { name: 'ring', label: '포커스 링', cssVar: '--color-focus-ring' },
  { name: 'success', label: '성공', cssVar: '--color-status-success' },
  { name: 'warning', label: '경고', cssVar: '--color-status-warning' },
  { name: 'danger', label: '오류', cssVar: '--color-status-danger' },
  { name: 'info', label: '정보', cssVar: '--color-status-info' },
];

const typeScale = [
  { name: 'xs', size: '12px' },
  { name: 'sm', size: '13px' },
  { name: 'base', size: '14px' },
  { name: 'md', size: '16px' },
  { name: 'lg', size: '18px' },
  { name: 'xl', size: '20px' },
  { name: '2xl', size: '24px' },
  { name: '3xl', size: '30px' },
  { name: '4xl', size: '36px' },
  { name: '5xl', size: '48px' },
];

const radiusScale = [
  { name: 'none', value: '0', cssVar: '--radius-none' },
  { name: 'sm', value: '2px', cssVar: '--radius-sm' },
  { name: 'md', value: '4px', cssVar: '--radius-md' },
];

export default function TokensPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>{t('tokens.title')}</Heading>
        <Lead>{t('tokens.lead')}</Lead>
      </header>

      <Separator />

      <section className="flex flex-col gap-4">
        <Heading level={2}>{t('tokens.semanticColorsHeading')}</Heading>
        <Muted>{t('tokens.semanticColorsDesc')}</Muted>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {semanticColors.map((c) => (
            <Card key={c.name} variant="outlined" className="overflow-hidden">
              <div className="h-16" style={{ backgroundColor: `var(${c.cssVar})` }} />
              <CardHeader className="p-3">
                <CardTitle className="text-sm">{t(`tokens.color.${c.name}`)}</CardTitle>
                <Muted className="text-xs font-mono">{c.cssVar}</Muted>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="flex flex-col gap-4">
        <Heading level={2}>{t('tokens.typoHeading')}</Heading>
        <Muted>{t('tokens.typoDesc')}</Muted>
        <Card variant="outlined">
          <CardContent className="flex flex-col gap-3 p-6">
            {typeScale.map((ts) => (
              <div
                key={ts.name}
                className="flex items-baseline gap-4 border-b border-border-subtle pb-2 last:border-0"
              >
                <span className="w-16 font-mono text-xs text-foreground-muted">{ts.name}</span>
                <span className="w-12 font-mono text-xs text-foreground-subtle">{ts.size}</span>
                <span style={{ fontSize: ts.size }}>{t('tokens.typeSample')}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section className="flex flex-col gap-4">
        <Heading level={2}>{t('tokens.radiusHeading')}</Heading>
        <Muted>{t('tokens.radiusDesc')}</Muted>
        <div className="flex gap-3">
          {radiusScale.map((r) => (
            <Card key={r.name} variant="outlined">
              <CardContent className="flex flex-col items-center gap-2 p-4">
                <div
                  className="size-16 bg-foreground"
                  style={{ borderRadius: `var(${r.cssVar})` }}
                />
                <Muted className="font-mono text-xs">
                  {r.name} ({r.value})
                </Muted>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="flex flex-col gap-4">
        <Heading level={2}>{t('tokens.spacingHeading')}</Heading>
        <Muted>{t('tokens.spacingDesc')}</Muted>
        <Card variant="outlined">
          <CardContent className="flex flex-col gap-2 p-6">
            {[1, 2, 4, 6, 8, 12, 16, 24, 32].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <span className="w-12 font-mono text-xs text-foreground-muted">space-{n}</span>
                <div className="h-3 bg-foreground" style={{ width: `${n * 4}px` }} />
                <span className="font-mono text-xs text-foreground-subtle">{n * 4}px</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
