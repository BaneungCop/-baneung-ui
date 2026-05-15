import Link from 'next/link';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Heading,
  Lead,
  Muted,
  Separator,
} from '@baneung-pack/ui';

const sections = [
  {
    href: '/grid/install',
    title: 'Install',
    description: 'npm/pnpm/yarn 설치 + styles.css 임포트. 필요 peer deps.',
  },
  {
    href: '/grid/props',
    title: 'Props',
    description: 'Grid 컴포넌트의 모든 props, GridColumn 필드, GridHandle ref API 레퍼런스.',
  },
  {
    href: '/grid/basic',
    title: '기본 사용',
    description: '컬럼 정의 + 데이터만 전달. 좌/중/우 align 지원.',
  },
  {
    href: '/grid/custom-renderer',
    title: '커스텀 렌더러',
    description: '`renderer` 함수로 Badge, 콤마 포맷, 조건부 색상 등 임의 노드.',
  },
  {
    href: '/grid/virtualized',
    title: '가상화 모드',
    description: '`virtualized` 한 줄로 5000+ 행에서도 DOM 노드 수 일정.',
  },
  {
    href: '/grid/pagination',
    title: '내장 페이지네이션',
    description: '`pageSize` 한 줄로 페이징 활성. ellipsis 압축 페이지 번호.',
  },
  {
    href: '/grid/external-pagination',
    title: '외부 페이지네이션',
    description: '`showPagination=false` + `page`/`onPageChange`로 외부 컨트롤.',
  },
  {
    href: '/grid/editing',
    title: '인라인 편집 · 선택 · ref API',
    description: '셀 더블클릭 편집, 체크박스 선택, ref API로 saved/changed/deleted 조회.',
  },
  {
    href: '/grid/tree',
    title: 'Tree (계층) 모드',
    description: '`tree` + `getChildren`으로 중첩 데이터를 계층 표시.',
  },
  {
    href: '/grid/editors-sort-filter',
    title: '빌트인 에디터 · 정렬 · 필터',
    description: 'dropdown/date/number 에디터, progress 렌더러, 헤더 정렬·필터 popover.',
  },
  {
    href: '/grid/row-operations',
    title: '행 추가 · 삭제 · 다중 셀 선택',
    description: 'addRow 4가지 위치, removeSelectedRows, multi-cell drag, Delete 키 클리어.',
  },
];

export default function GridIndexPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>Grid</Heading>
        <Lead>
          데이터 그리드 컴포넌트 (<code>@baneung-pack/grid</code>). 가상화 토글, 페이지네이션,
          인라인 편집, 트리 계층, 정렬·필터, multi-cell 선택 등을 풀스펙으로 제공합니다.
        </Lead>
        <Muted className="text-sm">
          좌측 사이드바의 항목을 선택해 각 기능의 라이브 데모와 사용법을 확인하세요.
        </Muted>
      </header>

      <Separator />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="block transition-colors duration-fast ease-standard hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Card variant="outlined" className="h-full">
              <CardHeader>
                <CardTitle className="text-base">{s.title}</CardTitle>
                <CardDescription className="text-xs leading-relaxed line-clamp-3">
                  {s.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
