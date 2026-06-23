/**
 * Chart 데모 코드 스니펫 — 데모 페이지 "코드 보기" 토글로 노출.
 */

export const barChartCode = `import { BarChart } from '@baneung-pack/chart';

const data = [
  { month: '1월', revenue: 1200, profit: 300 },
  { month: '2월', revenue: 1500, profit: 400 },
  // ...
];

export function MyBarChart() {
  return (
    <BarChart
      data={data}
      xKey="month"
      yKeys={['revenue', 'profit']}
      labels={{ revenue: '매출', profit: '이익' }}
      height={320}
    />
  );
}

// 누적: stacked={true}
// 가로: horizontal={true}`;

export const lineChartCode = `import { LineChart } from '@baneung-pack/chart';

export function MyLineChart() {
  return (
    <LineChart
      data={data}
      xKey="month"
      yKeys={['revenue', 'profit']}
      labels={{ revenue: '매출', profit: '이익' }}
      smooth          // 곡선 보간 (monotone)
      height={320}
    />
  );
}`;

export const areaChartCode = `import { AreaChart } from '@baneung-pack/chart';

export function MyAreaChart() {
  return (
    <AreaChart
      data={data}
      xKey="month"
      yKeys={['검색', '소셜', '리퍼럴']}
      stacked          // 누적
      height={320}
    />
  );
}`;

export const pieChartCode = `import { PieChart } from '@baneung-pack/chart';

const data = [
  { name: 'Chrome', value: 62 },
  { name: 'Safari', value: 19 },
  // ...
];

export function MyPieChart() {
  return (
    <PieChart
      data={data}
      nameKey="name"
      valueKey="value"
      height={320}
    />
  );
}`;

export const flowChartCode = `import { FlowChart } from '@baneung-pack/chart';

// 내장 edge type 4종 + 커스텀 edge 함수 등록
const wavyPath = ({ sourceX, sourceY, targetX, targetY }) => {
  const midX = (sourceX + targetX) / 2;
  return \`M \${sourceX} \${sourceY} Q \${midX} \${sourceY - 30}, \${targetX} \${targetY}\`;
};

export function MyFlow() {
  return (
    <FlowChart
      height={420}
      edgeTypes={{ wavy: wavyPath }}      // 커스텀 path 등록
      nodes={[
        { id: 'a', label: 'Start', x: 40, y: 60 },
        { id: 'b', label: 'Process', x: 280, y: 60 },
        { id: 'c', label: 'End', x: 520, y: 60 },
      ]}
      edges={[
        { source: 'a', target: 'b', type: 'bezier' },        // 내장
        { source: 'b', target: 'c', type: 'wavy', label: '!', animated: true }, // 커스텀
      ]}
    />
  );
}

// 내장 edge type: 'straight' | 'bezier' | 'step' | 'smoothstep'
// 노드 핸들 면(sourcePosition/targetPosition): 'top' | 'right' | 'bottom' | 'left' | 'auto'
//   - 'auto' (기본): 두 노드 상대 위치로 가장 자연스러운 면 자동 선택`;

export const radarChartCode = `import { RadarChart } from '@baneung-pack/chart';

// 각 행 = 하나의 radar 모양(시리즈). axes로 어느 키를 축으로 쓸지 지정.
const data = [
  { role: '시니어 개발자', frontend: 90, backend: 85, devops: 75, database: 80, testing: 85, communication: 90 },
  { role: '주니어 개발자', frontend: 65, backend: 60, devops: 45, database: 55, testing: 60, communication: 70 },
];

export function MyRadarChart() {
  return (
    <RadarChart
      data={data}
      labelKey="role"
      axes={['frontend', 'backend', 'devops', 'database', 'testing', 'communication']}
      axisLabels={{
        frontend: 'Frontend', backend: 'Backend', devops: 'DevOps',
        database: 'Database', testing: 'Testing', communication: 'Communication',
      }}
      max={100}
      height={420}
    />
  );
}`;

export const scatterChartCode = `import { ScatterChart } from '@baneung-pack/chart';

// 두 부서 직원의 (경력 년, 연봉 만원). groupKey로 자동 분리.
const data = [
  { dept: '개발팀', career: 1, salary: 3500 },
  { dept: '개발팀', career: 5, salary: 5800 },
  // ...
  { dept: '디자인팀', career: 2, salary: 3800 },
  { dept: '디자인팀', career: 8, salary: 5800 },
  // ...
];

export function MyScatterChart() {
  return (
    <ScatterChart
      data={data}
      xKey="career"
      yKey="salary"
      groupKey="dept"     // dept 값으로 시리즈 자동 분리
      xUnit="년"
      yUnit="만원"
      height={360}
    />
  );
}

// 점 모양 변경 — 단일 값 또는 시리즈별 배열
//   pointStyle="triangle"                          // 전체 삼각형
//   pointStyle={['triangle', 'rectRot']}           // 개발팀=▲, 디자인팀=◆
// 사용 가능: circle | triangle | rect | rectRot | star | cross | crossRot | rectRounded | dash | line`;

export const waterfallChartCode = `import { WaterfallChart } from '@baneung-pack/chart';

export function MyWaterfallChart() {
  return (
    <WaterfallChart
      data={[
        { label: '시작 자본', value: 5000, total: true }, // 시작 (절대값)
        { label: '1월 매출', value: 1800 },              // +1800
        { label: '인건비', value: -2400 },               // -2400
        { label: '인프라', value: -2300 },
        { label: '마케팅', value: -1700 },
        { label: '2월 매출', value: 2200 },
        { label: '분기 잔액', total: true },             // 끝 (자동 누적값 = 2600)
      ]}
      showValues
      height={360}
    />
  );
}

// 양수 = 녹색, 음수 = 빨강, total = 파랑 (positiveColor/negativeColor/totalColor로 커스텀 가능)`;

export const mixedChartCode = `import { MixedChart } from '@baneung-pack/chart';

// Pareto: 장애 원인별 발생 건수 막대 + 누적 비율 선 (우측 % 축)
const data = [
  { category: 'UI 버그', count: 840, cumulative: 21 },
  { category: '성능 저하', count: 680, cumulative: 38 },
  { category: '데이터 정합성', count: 560, cumulative: 52 },
  // ...
];

export function MyMixedChart() {
  return (
    <MixedChart
      data={data}
      xKey="category"
      barKeys={['count']}
      lineKeys={['cumulative']}
      labels={{ count: '발생 건수', cumulative: '누적 비율' }}
      rightAxisKeys={['cumulative']}    // 누적%만 우측 y축
      rightAxisPercent                  // 우측 축 0~100% 고정
      smooth
      height={360}
    />
  );
}`;

export const doughnutChartCode = `import { DoughnutChart } from '@baneung-pack/chart';

export function MyDoughnutChart() {
  return (
    <DoughnutChart
      data={data}
      nameKey="name"
      valueKey="value"
      thickness={0.55}      // 가운데 빈 비율 (0~1)
      height={320}
    />
  );
}`;
