'use client';

import {
  AreaChart,
  BarChart,
  DoughnutChart,
  LineChart,
  MixedChart,
  PieChart,
  RadarChart,
  ScatterChart,
  WaterfallChart,
} from '@baneung-pack/chart';

/**
 * Chart 데모 컴포넌트 모음 — 각 차트 페이지가 import.
 * 데모 데이터는 한국 비즈니스 시나리오 (월별 매출/이익 등)로 한국어 라벨 유지.
 */

const monthly = [
  { month: '1월', revenue: 1200, profit: 300 },
  { month: '2월', revenue: 1500, profit: 400 },
  { month: '3월', revenue: 1300, profit: 350 },
  { month: '4월', revenue: 1700, profit: 500 },
  { month: '5월', revenue: 1900, profit: 580 },
  { month: '6월', revenue: 2100, profit: 620 },
];

const traffic = [
  { source: '검색', sessions: 4200 },
  { source: '직접', sessions: 2800 },
  { source: '소셜', sessions: 1900 },
  { source: '리퍼럴', sessions: 1100 },
  { source: '이메일', sessions: 700 },
];

const channelGrowth = [
  { month: '1월', 검색: 1000, 소셜: 400, 리퍼럴: 200 },
  { month: '2월', 검색: 1200, 소셜: 500, 리퍼럴: 250 },
  { month: '3월', 검색: 1400, 소셜: 700, 리퍼럴: 300 },
  { month: '4월', 검색: 1600, 소셜: 900, 리퍼럴: 380 },
  { month: '5월', 검색: 1800, 소셜: 1200, 리퍼럴: 450 },
  { month: '6월', 검색: 2000, 소셜: 1500, 리퍼럴: 520 },
];

const browserShare = [
  { name: 'Chrome', value: 62 },
  { name: 'Safari', value: 19 },
  { name: 'Edge', value: 9 },
  { name: 'Firefox', value: 6 },
  { name: '기타', value: 4 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Bar
// ─────────────────────────────────────────────────────────────────────────────

export function BarChartDemo() {
  return (
    <BarChart
      data={monthly}
      xKey="month"
      yKeys={['revenue', 'profit']}
      labels={{ revenue: '매출', profit: '이익' }}
      height={320}
    />
  );
}

export function BarChartStackedDemo() {
  return (
    <BarChart
      data={channelGrowth}
      xKey="month"
      yKeys={['검색', '소셜', '리퍼럴']}
      stacked
      showValues
      height={320}
    />
  );
}

export function BarChartHorizontalDemo() {
  return <BarChart data={traffic} xKey="source" yKeys={['sessions']} horizontal height={320} />;
}

/**
 * 양수/음수 혼합 막대 — BarChart는 음수값을 0 기준선 아래로 자동 렌더.
 * 별도 prop 없이 데이터의 부호만으로 동작.
 */
const positiveNegative = [
  { page: 'Page A', pv: 2400, uv: 4000 },
  { page: 'Page B', pv: 1400, uv: -3000 },
  { page: 'Page C', pv: -9800, uv: -2000 },
  { page: 'Page D', pv: 3900, uv: 2800 },
  { page: 'Page E', pv: 4800, uv: -2000 },
  { page: 'Page F', pv: -3700, uv: 2400 },
  { page: 'Page G', pv: 4300, uv: 3500 },
];

export function BarChartPositiveNegativeDemo() {
  return (
    <BarChart
      data={positiveNegative}
      xKey="page"
      yKeys={['pv', 'uv']}
      labels={{ pv: 'pv', uv: 'uv' }}
      height={360}
    />
  );
}

/**
 * 한글 숫자 포맷 시연 — 큰 매출 수치 (단위: 원)를 자동으로 만/억 단위 표시.
 * tooltip / 데이터 라벨 / y축 tick 모두 동일 포맷 적용.
 */
const quarterlyRevenue = [
  { quarter: '23 Q1', 매출: 125000000, 영업이익: 18000000 },
  { quarter: '23 Q2', 매출: 148000000, 영업이익: 22000000 },
  { quarter: '23 Q3', 매출: 162000000, 영업이익: 28000000 },
  { quarter: '23 Q4', 매출: 185000000, 영업이익: 35000000 },
  { quarter: '24 Q1', 매출: 210000000, 영업이익: 42000000 },
  { quarter: '24 Q2', 매출: 245000000, 영업이익: 51000000 },
];

export function BarChartKoreanFormatDemo() {
  return (
    <BarChart
      data={quarterlyRevenue}
      xKey="quarter"
      yKeys={['매출', '영업이익']}
      valueFormat="korean"
      showValues
      a11yCaption="분기별 매출 및 영업이익 (원)"
      height={360}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Line
// ─────────────────────────────────────────────────────────────────────────────

export function LineChartDemo() {
  return (
    <LineChart
      data={monthly}
      xKey="month"
      yKeys={['revenue', 'profit']}
      labels={{ revenue: '매출', profit: '이익' }}
      height={320}
    />
  );
}

export function LineChartSmoothDemo() {
  return (
    <LineChart
      data={channelGrowth}
      xKey="month"
      yKeys={['검색', '소셜', '리퍼럴']}
      smooth
      height={320}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Area
// ─────────────────────────────────────────────────────────────────────────────

export function AreaChartDemo() {
  return (
    <AreaChart
      data={monthly}
      xKey="month"
      yKeys={['revenue', 'profit']}
      labels={{ revenue: '매출', profit: '이익' }}
      height={320}
    />
  );
}

export function AreaChartStackedDemo() {
  return (
    <AreaChart
      data={channelGrowth}
      xKey="month"
      yKeys={['검색', '소셜', '리퍼럴']}
      stacked
      height={320}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Pie / Doughnut
// ─────────────────────────────────────────────────────────────────────────────

export function PieChartDemo() {
  return <PieChart data={browserShare} nameKey="name" valueKey="value" height={320} showValues />;
}

// ─────────────────────────────────────────────────────────────────────────────
// Mixed (Pareto)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Pareto 차트 — 장애 원인별 발생 빈도 막대 + 누적 비율 선(우측 % 축).
 * "80/20 법칙"의 전형적 사용 — 소수의 원인이 대부분 장애의 원인임을 시각화.
 * 데이터는 발생 건수 내림차순 + 누적 비율 사전 계산.
 */
const paretoIssues = [
  { category: 'UI 버그', count: 840 },
  { category: '성능 저하', count: 680 },
  { category: '데이터 정합성', count: 560 },
  { category: '호환성', count: 480 },
  { category: '접근성', count: 360 },
  { category: '보안 취약점', count: 280 },
  { category: '번역 누락', count: 200 },
  { category: '캐싱', count: 160 },
  { category: '로깅', count: 140 },
  { category: '디자인 토큰', count: 100 },
  { category: '기타', count: 200 },
];

// 누적 % 사전 계산 (전체 합 대비). 0~100 범위.
const paretoTotal = paretoIssues.reduce((sum, r) => sum + r.count, 0);
let paretoRunning = 0;
const paretoData = paretoIssues.map((r) => {
  paretoRunning += r.count;
  return { ...r, cumulative: Number(((paretoRunning / paretoTotal) * 100).toFixed(1)) };
});

export function MixedChartParetoDemo() {
  return (
    <MixedChart
      data={paretoData}
      xKey="category"
      barKeys={['count']}
      lineKeys={['cumulative']}
      labels={{ count: '발생 건수', cumulative: '누적 비율' }}
      rightAxisKeys={['cumulative']}
      rightAxisPercent
      smooth
      height={360}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Radar
// ─────────────────────────────────────────────────────────────────────────────

/**
 * 개발자 역량 평가 — 시니어 vs 주니어 6개 축 비교.
 * 이미지(과목별 점수)와 다른 시나리오로 디자인 시스템 사용자에게 더 친숙한 도메인 채택.
 */
const devSkills = [
  {
    role: '시니어 개발자',
    frontend: 90,
    backend: 85,
    devops: 75,
    database: 80,
    testing: 85,
    communication: 90,
  },
  {
    role: '주니어 개발자',
    frontend: 65,
    backend: 60,
    devops: 45,
    database: 55,
    testing: 60,
    communication: 70,
  },
];

const radarAxes = ['frontend', 'backend', 'devops', 'database', 'testing', 'communication'];
const radarAxisLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps',
  database: 'Database',
  testing: 'Testing',
  communication: 'Communication',
};

export function RadarChartDemo() {
  return (
    <RadarChart
      data={devSkills}
      labelKey="role"
      axes={radarAxes}
      axisLabels={radarAxisLabels}
      max={100}
      height={420}
    />
  );
}

/** showLine=false + 진한 채움 — 외곽선 없이 영역만으로 비교. */
export function RadarChartFilledDemo() {
  return (
    <RadarChart
      data={devSkills}
      labelKey="role"
      axes={radarAxes}
      axisLabels={radarAxisLabels}
      max={100}
      showLine={false}
      fillOpacity={0.45}
      height={420}
    />
  );
}

/** showLine=true + fillOpacity=0 — 외곽선만 (영역 채움 없이). */
export function RadarChartOutlineDemo() {
  return (
    <RadarChart
      data={devSkills}
      labelKey="role"
      axes={radarAxes}
      axisLabels={radarAxisLabels}
      max={100}
      fillOpacity={0}
      height={420}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Scatter
// ─────────────────────────────────────────────────────────────────────────────

/**
 * 두 부서 직원의 (경력 년, 연봉 만원) 산점도.
 * 38명 분포 — 주니어/미드 구간(1~7년)에 양 부서 모두 집중된 클러스터가 형성되고,
 * 시니어 구간에서 개발팀의 가파른 상승이 분리되어 분포 차이가 시각적으로 명확.
 */
const deptSalary = [
  // 개발팀 — 주니어 클러스터(1~5년) 밀집 + 시니어 가파른 상승
  { dept: '개발팀', career: 1, salary: 3400 },
  { dept: '개발팀', career: 1, salary: 3500 },
  { dept: '개발팀', career: 2, salary: 3600 },
  { dept: '개발팀', career: 2, salary: 3700 },
  { dept: '개발팀', career: 2, salary: 3800 },
  { dept: '개발팀', career: 3, salary: 4000 },
  { dept: '개발팀', career: 3, salary: 4100 },
  { dept: '개발팀', career: 3, salary: 4300 },
  { dept: '개발팀', career: 4, salary: 4500 },
  { dept: '개발팀', career: 4, salary: 4700 },
  { dept: '개발팀', career: 5, salary: 5500 },
  { dept: '개발팀', career: 5, salary: 5700 },
  { dept: '개발팀', career: 5, salary: 5800 },
  { dept: '개발팀', career: 6, salary: 6000 },
  { dept: '개발팀', career: 6, salary: 6300 },
  { dept: '개발팀', career: 7, salary: 6800 },
  { dept: '개발팀', career: 8, salary: 7200 },
  { dept: '개발팀', career: 10, salary: 8000 },
  { dept: '개발팀', career: 12, salary: 9500 },
  { dept: '개발팀', career: 15, salary: 11000 },
  // 디자인팀 — 비슷한 경력대지만 더 완만한 상승, 미드 구간(5~8년) 밀집
  { dept: '디자인팀', career: 2, salary: 3700 },
  { dept: '디자인팀', career: 3, salary: 3900 },
  { dept: '디자인팀', career: 3, salary: 4000 },
  { dept: '디자인팀', career: 4, salary: 4200 },
  { dept: '디자인팀', career: 4, salary: 4300 },
  { dept: '디자인팀', career: 5, salary: 4700 },
  { dept: '디자인팀', career: 5, salary: 4900 },
  { dept: '디자인팀', career: 6, salary: 5100 },
  { dept: '디자인팀', career: 6, salary: 5300 },
  { dept: '디자인팀', career: 7, salary: 5500 },
  { dept: '디자인팀', career: 7, salary: 5700 },
  { dept: '디자인팀', career: 8, salary: 5800 },
  { dept: '디자인팀', career: 8, salary: 6000 },
  { dept: '디자인팀', career: 9, salary: 6200 },
  { dept: '디자인팀', career: 10, salary: 6500 },
  { dept: '디자인팀', career: 12, salary: 7100 },
  { dept: '디자인팀', career: 14, salary: 7800 },
  { dept: '디자인팀', career: 16, salary: 8500 },
];

export function ScatterChartDemo() {
  return (
    <ScatterChart
      data={deptSalary}
      xKey="career"
      yKey="salary"
      groupKey="dept"
      xUnit="년"
      yUnit="만원"
      height={360}
    />
  );
}

/**
 * pointStyle 배열로 시리즈별 다른 모양 적용.
 * 색만으로 구분하기 어려운 색약 사용자에게 형태 구분이 도움.
 * 모양이 명확히 보이도록 소량 데이터(각 부서 4~5명)만 표시.
 */
const deptSalarySample = [
  { dept: '개발팀', career: 2, salary: 3800 },
  { dept: '개발팀', career: 5, salary: 5700 },
  { dept: '개발팀', career: 8, salary: 7200 },
  { dept: '개발팀', career: 12, salary: 9500 },
  { dept: '디자인팀', career: 3, salary: 4000 },
  { dept: '디자인팀', career: 6, salary: 5200 },
  { dept: '디자인팀', career: 10, salary: 6500 },
  { dept: '디자인팀', career: 14, salary: 7800 },
];

export function ScatterChartShapesDemo() {
  return (
    <ScatterChart
      data={deptSalarySample}
      xKey="career"
      yKey="salary"
      groupKey="dept"
      xUnit="년"
      yUnit="만원"
      pointStyle={['triangle', 'rectRot']} // 개발팀=▲, 디자인팀=◆
      pointRadius={9} // 모양 인지가 잘 되도록 더 큼
      height={360}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Waterfall
// ─────────────────────────────────────────────────────────────────────────────

export function WaterfallChartDemo() {
  // Q1 누적 손익 — 시작 자본에서 분기 흐름을 거쳐 잔액까지.
  // 합계: 5000 + 1800 - 2400 - 2300 - 1700 + 2200 = 2600
  return (
    <WaterfallChart
      data={[
        { label: '시작 자본', value: 5000, total: true },
        { label: '1월 매출', value: 1800 },
        { label: '인건비', value: -2400 },
        { label: '인프라', value: -2300 },
        { label: '마케팅', value: -1700 },
        { label: '2월 매출', value: 2200 },
        { label: '분기 잔액', total: true },
      ]}
      showValues
      height={360}
    />
  );
}

/** 듀얼 축이 없는 단순 mix (모든 시리즈가 좌측 축 공유). */
export function MixedChartSimpleDemo() {
  return (
    <MixedChart
      data={monthly}
      xKey="month"
      barKeys={['revenue']}
      lineKeys={['profit']}
      labels={{ revenue: '매출', profit: '이익' }}
      smooth
      height={320}
    />
  );
}

export function DoughnutChartDemo() {
  return (
    <DoughnutChart
      data={browserShare}
      nameKey="name"
      valueKey="value"
      height={320}
      thickness={0.55}
      showValues
    />
  );
}
