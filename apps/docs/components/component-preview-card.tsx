'use client';

import Link from 'next/link';
import * as React from 'react';

import { Card, CardDescription, CardHeader, CardTitle, Heading, Muted, cn } from '@baneung-pack/ui';

import { allComponents, type ComponentSpec } from '@/lib/components';
import { componentPreviews } from '@/lib/components/previews';

/**
 * 컴포넌트 카드 1개 — 상단 라이브 프리뷰 + 하단 메타.
 *
 * # 구조 (nested <a> 회피)
 * - 일부 Example(Breadcrumb/Pagination/NavigationMenu 등)이 내부에 <a>를 가짐
 * - <Link>가 카드 전체를 감싸면 <a> 안에 <a>가 들어가 hydration 에러
 * - 해결: 카드를 relative로 두고, Link는 카드 위에 absolute inset-0 오버레이로 띄움
 *   → DOM 트리에서 형제 관계가 되어 anchor nesting 방지
 *
 * # 인터랙션
 * - 프리뷰 내부는 pointer-events-none → Example의 버튼/입력 등 클릭 무시
 * - Link 오버레이는 pointer-events 활성 → 카드 어디를 눌러도 디테일 페이지로 이동
 *
 * # 사이즈
 * - 프리뷰 영역 고정 높이(h-32) + overflow-hidden + scale-75
 * - 큰 컴포넌트(DataTable, Calendar 등)는 클리핑되어 일부만 보임
 */
function PreviewCard({ spec }: { spec: ComponentSpec }): React.ReactElement {
  // 1-instance 프리뷰가 정의돼 있으면 그걸 우선 사용, 없으면 전체 Example 사용
  const Preview = componentPreviews[spec.slug] ?? spec.Example;
  return (
    <div className="group relative">
      <Card
        variant="outlined"
        className={cn(
          'flex h-full flex-col overflow-hidden',
          'transition-colors duration-fast ease-standard',
          'group-hover:border-border-strong',
        )}
      >
        <div
          className={cn(
            'relative h-32 overflow-hidden border-b border-border-default bg-surface/50',
            'flex items-center justify-center px-3 py-2',
            'transition-colors duration-fast ease-standard',
            'group-hover:bg-surface',
          )}
        >
          <div
            className="pointer-events-none flex w-full origin-center scale-75 items-center justify-center"
            aria-hidden="true"
          >
            <div className="max-w-full">
              <Preview />
            </div>
          </div>
        </div>
        <CardHeader className="flex-1">
          <CardTitle className="text-base">{spec.title}</CardTitle>
          <CardDescription className="text-xs leading-relaxed line-clamp-2">
            {spec.description}
          </CardDescription>
        </CardHeader>
      </Card>
      {/* 카드 전체를 덮는 클릭 오버레이 — 프리뷰 내부 <a>와 형제 관계 */}
      <Link
        href={`/components/${spec.slug}`}
        aria-label={`${spec.title} 상세 페이지로 이동`}
        className={cn(
          'absolute inset-0 z-10',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        )}
      >
        <span className="sr-only">{spec.title}</span>
      </Link>
    </div>
  );
}

/**
 * `/components` 페이지의 카드 그리드 본체.
 *
 * 서버 컴포넌트에서 분리해 client로 둔 이유:
 * - 각 spec의 `Example`이 cmdk/Radix/state 등을 사용하는 client 컴포넌트
 * - allComponents 자체가 client 코드를 모듈 최상위에서 import해 server에서 불가
 */
export function ComponentPreviewGrid(): React.ReactElement {
  const groups = React.useMemo(() => {
    const map = new Map<string, ComponentSpec[]>();
    for (const spec of allComponents) {
      const list = map.get(spec.category) ?? [];
      list.push(spec);
      map.set(spec.category, list);
    }
    return map;
  }, []);

  const categories = Array.from(groups.keys());

  return (
    <div className="flex flex-col gap-10">
      {categories.map((category) => {
        const items = groups.get(category)!;
        return (
          <section key={category} className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <Heading level={2} className="text-2xl">
                {category}
              </Heading>
              <Muted className="text-xs">{items.length}개</Muted>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((spec) => (
                <PreviewCard key={spec.slug} spec={spec} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
