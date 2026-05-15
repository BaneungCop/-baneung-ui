'use client';

import * as React from 'react';

import { Button, Muted } from '@baneung-pack/ui';

/**
 * 데모 페이지에서 데모 컴포넌트 아래에 "코드보기" 토글 + 코드 표시.
 *
 * - 기본은 접힘. "코드 보기" 클릭 시 expand.
 * - 코드 복사 버튼 포함 (clipboard API).
 */
export function CodeViewer({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard 거부 — 무시
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          {open ? '▾ 코드 숨기기' : '▸ 코드 보기'}
        </Button>
        {open && (
          <div className="flex items-center gap-2">
            <Muted className="text-xs">{language}</Muted>
            <Button variant="outline" size="sm" onClick={copy}>
              {copied ? '복사됨' : '복사'}
            </Button>
          </div>
        )}
      </div>
      {open && (
        <pre className="max-h-[480px] overflow-auto border border-border-default bg-surface p-3 text-xs font-mono leading-relaxed">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
