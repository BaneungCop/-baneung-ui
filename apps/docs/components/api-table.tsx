'use client';

import * as React from 'react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@baneung-pack/ui';

import { useI18n } from '@/components/i18n-provider';
import { componentApiDescriptionsEn } from '@/lib/i18n/component-api-descriptions';

export interface ApiProp {
  property: string;
  description: React.ReactNode;
  type: string;
  default?: string;
  version?: string;
}

/**
 * ApiTable — 컴포넌트 props 명세표.
 *
 * 컬럼: Property / Description / Type / Default / Version
 * 모노스페이스 타입과 시각 위계는 토큰 기반.
 *
 * 헤더와 empty 메시지는 i18n. prop description 본문은 호출자가 한국어로 제공한 것을 기본으로 사용하되,
 * locale === 'en' + slug 전달 시 `componentApiDescriptionsEn[slug][property]`가 있으면 영문으로 대체.
 * 매핑 누락 시 한국어 원문으로 graceful fallback.
 */
export function ApiTable({ rows, slug }: { rows: ApiProp[]; slug?: string }) {
  const { t, locale } = useI18n();
  // 영문 모드 + slug 매핑이 있을 때만 영문 description 룩업 (없으면 ko 원문 사용)
  const enMap = locale === 'en' && slug ? componentApiDescriptionsEn[slug] : undefined;
  if (rows.length === 0) {
    return <p className="text-sm text-foreground-muted">{t('api.empty')}</p>;
  }
  const showVersion = rows.some((r) => r.version);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-44">{t('api.property')}</TableHead>
          <TableHead>{t('api.description')}</TableHead>
          <TableHead className="w-72">{t('api.type')}</TableHead>
          <TableHead className="w-32">{t('api.default')}</TableHead>
          {showVersion ? <TableHead className="w-24">{t('api.version')}</TableHead> : null}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => {
          // 영문 매핑이 있으면 사용, 없으면 한국어 원문(ReactNode)으로 폴백
          const enDesc =
            enMap && typeof row.property === 'string' ? enMap[row.property] : undefined;
          const description: React.ReactNode = enDesc ?? row.description;
          return (
            <TableRow key={row.property}>
              <TableCell>
                <code className="font-mono text-xs text-link">{row.property}</code>
              </TableCell>
              <TableCell className="text-sm">{description}</TableCell>
              <TableCell>
                <code className="font-mono text-xs text-foreground-muted whitespace-pre-wrap">
                  {row.type}
                </code>
              </TableCell>
              <TableCell>
                {row.default ? (
                  <code className="font-mono text-xs text-foreground-muted">{row.default}</code>
                ) : (
                  <span className="text-foreground-subtle">—</span>
                )}
              </TableCell>
              {showVersion ? (
                <TableCell>
                  {row.version ? (
                    <code className="font-mono text-xs text-foreground-muted">{row.version}</code>
                  ) : (
                    <span className="text-foreground-subtle">—</span>
                  )}
                </TableCell>
              ) : null}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
