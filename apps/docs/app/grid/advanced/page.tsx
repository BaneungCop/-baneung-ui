import { Heading, Lead, Separator } from '@baneung-pack/ui';

import { ExampleSection } from '@/components/example-section';
import {
  AdminAllInOneDemo,
  ColumnVisibilityDemo,
  ConditionalStyleDemo,
  ExcelIntegrationDemo,
  FooterAggregateDemo,
  MultiSortResizeDemo,
  PinnedColumnsDemo,
  QuickFilterDemo,
} from '@/lib/grid-advanced-demos';

export default function Page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>고급 — 관리자 · 대용량 · Excel</Heading>
        <Lead>
          전역 검색 · 다중 컬럼 정렬 · 컬럼 리사이즈 · 표시/숨김 · 고정 · 집계 푸터 · 조건부 셀
          스타일 · XLSX 내보내기 · Excel Ctrl+C/V 클립보드.
        </Lead>
      </header>
      <Separator />

      <section className="flex flex-col gap-3">
        <Heading level={2}>전역 검색 (quickFilter)</Heading>
        <Lead>모든 visible 컬럼에 부분 일치 검색. 외부 input과 연결.</Lead>
        <ExampleSection Example={QuickFilterDemo} />
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>다중 컬럼 정렬 + 컬럼 리사이즈</Heading>
        <Lead>Shift+클릭으로 2차 정렬 추가. 헤더 우측 경계 드래그로 폭 조절.</Lead>
        <ExampleSection Example={MultiSortResizeDemo} />
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>컬럼 표시/숨김</Heading>
        <Lead>showColumnMenu 켜면 우상단 ⚙️ 버튼 → 체크박스 popover.</Lead>
        <ExampleSection Example={ColumnVisibilityDemo} />
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>컬럼 고정 (Pin Left/Right)</Heading>
        <Lead>좌측 ID·고객명 + 우측 상태 고정. 가로 스크롤해도 자리 유지.</Lead>
        <ExampleSection Example={PinnedColumnsDemo} />
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>집계 푸터</Heading>
        <Lead>sum/avg/count/min/max 또는 함수형 집계. visible 행 기준으로 계산.</Lead>
        <ExampleSection Example={FooterAggregateDemo} />
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>조건부 셀 스타일</Heading>
        <Lead>cellStyle / cellClassName으로 값 기준 시각화. Excel 조건부 서식 패턴.</Lead>
        <ExampleSection Example={ConditionalStyleDemo} />
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>Excel 통합 — XLSX 내보내기 + Ctrl+C/V 클립보드</Heading>
        <Lead>
          exceljs로 .xlsx 다운로드 (스타일·컬럼 폭 보존). Ctrl+C로 셀 복사 → Excel 붙여넣기, Excel
          복사 → Ctrl+V로 그리드 일괄 입력.
        </Lead>
        <ExampleSection Example={ExcelIntegrationDemo} />
      </section>

      <section className="flex flex-col gap-3">
        <Heading level={2}>관리자 페이지 — 모든 기능 통합</Heading>
        <Lead>
          실제 관리자 화면 시나리오. 검색·필터·정렬·리사이즈·고정·푸터·편집·Excel 모두 활성.
        </Lead>
        <ExampleSection Example={AdminAllInOneDemo} />
      </section>
    </div>
  );
}
