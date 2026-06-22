'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { Badge, Button, Heading, Item, Kbd, Muted, Separator, cn } from '@baneung-pack/ui';

import { CommandPalette } from '@/components/command-palette';
import { useI18n } from '@/components/i18n-provider';
import { useTheme } from '@/components/theme-provider';
import { componentMetadata } from '@/lib/components-metadata';

interface NavItem {
  /** 페이지 link. 없으면 toggle-only(자식 메뉴 펼침/접힘 버튼)로 동작. */
  href?: string;
  label: string;
  /** 옵션 — 라벨 우측에 표시할 버전 뱃지 (예: 'v1.0.11'). */
  version?: string;
  /** 옵션 — 이 항목 아래 들여쓰기로 표시할 하위 메뉴. */
  children?: { href: string; label: string }[];
}

/**
 * 사이드바 nav 정의 — `label`은 i18n 키. 렌더 시 `t(label)`로 번역.
 * UI 자식의 컴포넌트 이름(Typography 등)은 고유 명칭이라 번역 안 함.
 */
const navSections: { labelKey: string; items: NavItem[] }[] = [
  {
    labelKey: 'nav.gettingStarted',
    items: [
      { href: '/', label: 'nav.intro' },
      { href: '/install', label: 'nav.install' },
      { href: '/tokens', label: 'nav.tokens' },
    ],
  },
  {
    labelKey: 'nav.packages',
    items: [
      {
        // href 없음 → toggle-only. 'UI'는 패키지 이름이라 번역 안 함.
        label: 'UI',
        version: 'v1.0.11',
        children: [
          { href: '/components', label: 'nav.catalog' },
          // 58개 컴포넌트 — metadata에서 자동 생성 (Foundation → ... → Data Display 순서 유지).
          ...componentMetadata.map((m) => ({
            href: `/components/${m.slug}`,
            label: m.title, // 컴포넌트 고유 명칭은 번역 X
          })),
        ],
      },
      {
        label: 'Grid',
        version: 'v0.9.1',
        children: [
          { href: '/grid/props', label: 'nav.grid.props' },
          { href: '/grid/basic', label: 'nav.grid.basic' },
          { href: '/grid/custom-renderer', label: 'nav.grid.customRenderer' },
          { href: '/grid/virtualized', label: 'nav.grid.virtualized' },
          { href: '/grid/pagination', label: 'nav.grid.pagination' },
          { href: '/grid/external-pagination', label: 'nav.grid.externalPagination' },
          { href: '/grid/editing', label: 'nav.grid.editing' },
          { href: '/grid/tree', label: 'nav.grid.tree' },
          { href: '/grid/editors-sort-filter', label: 'nav.grid.editorsSortFilter' },
          { href: '/grid/row-operations', label: 'nav.grid.rowOperations' },
          { href: '/grid/csv-export', label: 'nav.grid.csvExport' },
          { href: '/grid/quick-filter', label: 'nav.grid.quickFilter' },
          { href: '/grid/multi-sort-resize', label: 'nav.grid.multiSortResize' },
          { href: '/grid/column-visibility', label: 'nav.grid.columnVisibility' },
          { href: '/grid/column-pin', label: 'nav.grid.columnPin' },
          { href: '/grid/column-reorder', label: 'nav.grid.columnReorder' },
          { href: '/grid/footer-aggregate', label: 'nav.grid.footerAggregate' },
          { href: '/grid/conditional-style', label: 'nav.grid.conditionalStyle' },
          { href: '/grid/keyboard-nav', label: 'nav.grid.keyboardNav' },
          { href: '/grid/context-menu', label: 'nav.grid.contextMenu' },
          { href: '/grid/excel', label: 'nav.grid.excel' },
          { href: '/grid/save-view', label: 'nav.grid.saveView' },
          { href: '/grid/all-features', label: 'nav.grid.allFeatures' },
        ],
      },
      {
        label: 'Editor',
        version: 'v0.1.1',
        children: [
          { href: '/editor/props', label: 'nav.editor.props' },
          { href: '/editor/basic', label: 'nav.editor.basic' },
          { href: '/editor/controlled', label: 'nav.editor.controlled' },
          { href: '/editor/image', label: 'nav.editor.image' },
          { href: '/editor/custom-toolbar', label: 'nav.editor.customToolbar' },
          { href: '/editor/readonly', label: 'nav.editor.readonly' },
          { href: '/editor/full', label: 'nav.editor.full' },
        ],
      },
    ],
  },
  {
    labelKey: 'nav.guide',
    items: [
      { href: '/accessibility', label: 'nav.accessibility' },
      { href: '/versions', label: 'nav.versions' },
    ],
  },
];

/** 현재 path 기준 — 자식 중 하나가 활성인 parent label 집합. */
function autoExpandedLabels(pathname: string): Set<string> {
  const set = new Set<string>();
  for (const section of navSections) {
    for (const item of section.items) {
      if (item.children?.some((c) => pathname === c.href)) set.add(item.label);
    }
  }
  return set;
}

/**
 * SiteShell — 데모 사이트의 공통 레이아웃 (좌 sidebar + 우 메인 + 상단 헤더).
 *
 * # Nested menu 동작
 * - 자식 메뉴 있는 항목은 두 가지 모드:
 *   - href 있음: 클릭 시 페이지 이동 + 자동 펼침
 *   - href 없음(toggle-only): 클릭 시 펼침/접힘 토글만
 * - 자식 경로로 직접 진입하면 그 부모는 자동으로 펼침 상태가 됨.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const { locale, toggleLocale, t } = useI18n();
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  // 사용자 수동 토글 + 자동 펼침을 통합한 expanded label 집합.
  const [expandedLabels, setExpandedLabels] = React.useState<Set<string>>(() =>
    autoExpandedLabels(pathname),
  );

  // 라우트 변경 시 — 자식 경로로 이동했으면 그 부모를 자동 펼침에 추가.
  // 단, 사용자가 명시적으로 접은 다른 메뉴는 건드리지 않음.
  React.useEffect(() => {
    const auto = autoExpandedLabels(pathname);
    if (auto.size === 0) return;
    setExpandedLabels((prev) => {
      let changed = false;
      const next = new Set(prev);
      auto.forEach((l) => {
        if (!next.has(l)) {
          next.add(l);
          changed = true;
        }
      });
      return changed ? next : prev;
    });
  }, [pathname]);

  const toggleLabel = React.useCallback((label: string) => {
    setExpandedLabels((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }, []);

  // ⌘K (or Ctrl+K) 단축키
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      {/* 좌측 Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border-default md:flex md:flex-col">
        <div className="flex h-14 items-center border-b border-border-default px-4">
          <Heading level={6} className="text-base">
            @baneung-pack
          </Heading>
        </div>
        <nav className="flex-1 overflow-y-auto p-3">
          {navSections.map((section) => (
            <div key={section.labelKey} className="mb-4">
              <Muted className="px-3 text-xs uppercase tracking-wide">{t(section.labelKey)}</Muted>
              <ul className="mt-1 flex flex-col">
                {section.items.map((item) => {
                  const isLink = !!item.href;
                  const isActive = isLink && pathname === item.href;
                  const isExpanded = item.children ? expandedLabels.has(item.label) : false;
                  const showChildren = item.children && isExpanded;

                  return (
                    <li key={item.label}>
                      {isLink ? (
                        <Item asChild selected={isActive} className="px-3">
                          <Link href={item.href!}>{t(item.label)}</Link>
                        </Item>
                      ) : (
                        // toggle-only: 자식 메뉴 펼침/접힘 버튼 (패키지 이름은 번역 X)
                        <Item asChild className="px-3">
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            onClick={() => toggleLabel(item.label)}
                            className="flex w-full items-center justify-between gap-2 whitespace-nowrap"
                          >
                            <span className="flex min-w-0 items-center gap-1.5 truncate">
                              <span className="text-sm font-medium">{item.label}</span>
                              {item.version && (
                                <Badge variant="secondary" className="text-[10px]">
                                  {item.version}
                                </Badge>
                              )}
                            </span>
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 16 16"
                              className={cn(
                                'h-4 w-4 shrink-0 text-foreground-muted transition-transform duration-fast ease-standard',
                                isExpanded && 'rotate-90',
                              )}
                              fill="currentColor"
                            >
                              <path d="M6 4l4 4-4 4V4z" />
                            </svg>
                          </button>
                        </Item>
                      )}
                      {showChildren && (
                        <ul className="ml-4 mt-1 flex flex-col border-l border-border-subtle">
                          {item.children!.map((child) => {
                            const childIsActive = pathname === child.href;
                            return (
                              <li key={child.href}>
                                <Item asChild selected={childIsActive} className="px-3 text-xs">
                                  <Link href={child.href}>{t(child.label)}</Link>
                                </Item>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* 메인 영역 */}
      <div className="flex flex-1 flex-col">
        <header
          className={cn(
            'sticky top-0 z-30 flex h-14 items-center justify-between gap-4 px-4 md:px-6',
            'border-b border-border-default bg-canvas/80 backdrop-blur',
          )}
        >
          <div className="flex items-center gap-3">
            <span className="md:hidden">
              <Heading level={6} className="text-base">
                @baneung-pack/ui
              </Heading>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className={cn(
                'inline-flex h-9 items-center gap-2 px-3 text-sm',
                'border border-border-default bg-canvas text-foreground-muted hover:text-foreground',
                'rounded-none transition-colors duration-fast ease-standard',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
              )}
              aria-label="명령 팔레트 열기"
            >
              <span>{t('header.search')}</span>
              <Kbd>⌘ K</Kbd>
            </button>
            <Separator orientation="vertical" className="h-6" />
            {/* 언어 토글 — 테마 버튼 좌측에 배치 */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLocale}
              aria-label={t('header.languageToggle')}
              className="font-medium"
            >
              {locale === 'ko' ? 'EN' : 'KO'}
            </Button>
            <Button variant="ghost" size="sm" onClick={toggle} aria-label={t('header.themeToggle')}>
              {theme === 'dark' ? '☀' : '☾'}
            </Button>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </div>
  );
}
