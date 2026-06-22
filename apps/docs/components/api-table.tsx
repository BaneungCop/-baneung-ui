'use client';

import * as React from 'react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@baneung-pack/ui';

import { useI18n } from '@/components/i18n-provider';

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
 * 헤더와 empty 메시지는 i18n. prop description 본문은 호출자가 한국어로 제공한 것을 그대로 표시
 * (각 컴포넌트별 spec에 작성됨 — 영문 번역은 후속 작업).
 */
export function ApiTable({ rows }: { rows: ApiProp[] }) {
  const { t } = useI18n();
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
        {rows.map((row) => (
          <TableRow key={row.property}>
            <TableCell>
              <code className="font-mono text-xs text-link">{row.property}</code>
            </TableCell>
            <TableCell className="text-sm">{row.description}</TableCell>
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
        ))}
      </TableBody>
    </Table>
  );
}
