'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import { Command, Dialog, DialogContent, DialogDescription, DialogTitle } from '@baneung-pack/ui';

import { componentMetadata } from '@/lib/components-metadata';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * 주요 페이지 목록 — siteRoutes의 핵심 페이지를 미러링.
 * 영어/한글 키워드를 함께 부여해 두 언어로 검색 가능.
 */
const pageItems: { href: string; label: string; keywords: string[] }[] = [
  { href: '/', label: '홈', keywords: ['home', '메인'] },
  { href: '/intro', label: '소개', keywords: ['intro', 'about', '인트로'] },
  { href: '/install', label: '설치 가이드', keywords: ['install', 'setup', '셋업'] },
  {
    href: '/components',
    label: '컴포넌트 카탈로그',
    keywords: ['components', 'catalog', '카탈로그'],
  },
  {
    href: '/tokens',
    label: '디자인 토큰',
    keywords: ['tokens', 'design', '토큰', '색상', 'color'],
  },
  { href: '/accessibility', label: '접근성', keywords: ['accessibility', 'a11y', 'wcag'] },
  {
    href: '/versions',
    label: '버전·체인지로그',
    keywords: ['versions', 'changelog', '버전', '체인지로그'],
  },
];

/**
 * 검색 매칭 함수 — cmdk 기본 fuzzy(command-score)는 한글이나 path 같은
 * multi-segment 텍스트에서 노이즈가 많아 단순 substring(case-insensitive)으로 대체.
 * 더 예측 가능 + 한글 친화.
 *
 * cmdk가 각 Item의 value + keywords를 합쳐 이 함수에 넘김.
 * 반환값 > 0이면 매치 (값이 클수록 상위 정렬).
 */
function fuzzyScore(value: string, search: string, keywords?: string[]): number {
  if (!search) return 1;
  const haystack = `${value} ${(keywords ?? []).join(' ')}`.toLowerCase();
  const needle = search.toLowerCase().trim();
  if (!needle) return 1;
  // 정확 시작 매치 — 최우선
  if (haystack.startsWith(needle)) return 1;
  // 단어 시작 매치 (공백 뒤) — 중간
  if (haystack.includes(` ${needle}`)) return 0.8;
  // 일반 부분 매치
  if (haystack.includes(needle)) return 0.5;
  return 0;
}

/**
 * CommandPalette — ⌘K로 열리는 전역 검색 + 네비.
 *
 * 페이지: 주요 라우트 (영어/한글 alias 키워드 포함).
 * 컴포넌트: componentMetadata에서 자동.
 */
export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();

  const handleSelect = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0">
        <DialogTitle className="sr-only">명령 팔레트</DialogTitle>
        <DialogDescription className="sr-only">검색하거나 페이지/컴포넌트로 이동</DialogDescription>
        <Command label="명령 팔레트" filter={fuzzyScore}>
          <Command.Input placeholder="검색… (예: button, 버튼, calendar, 토큰)" />
          <Command.List>
            <Command.Empty>결과 없음</Command.Empty>
            <Command.Group heading="페이지">
              {pageItems.map((item) => (
                <Command.Item
                  key={item.href}
                  // value를 라벨로 — URL 노이즈 제거
                  value={item.label}
                  keywords={item.keywords}
                  onSelect={() => handleSelect(item.href)}
                >
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Separator />
            <Command.Group heading="컴포넌트">
              {componentMetadata.map((c) => (
                <Command.Item
                  key={c.slug}
                  // value를 title — URL이 아니라 깔끔한 텍스트로 매칭 정확도 향상
                  value={c.title}
                  // 슬러그(영문) + 카테고리 + 한글 description으로 두 언어 매칭
                  keywords={[c.slug, c.category, c.description]}
                  onSelect={() => handleSelect(`/components/${c.slug}`)}
                >
                  <span className="flex w-full items-center justify-between gap-2">
                    <span>{c.title}</span>
                    <span className="text-xs text-foreground-subtle">{c.category}</span>
                  </span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
