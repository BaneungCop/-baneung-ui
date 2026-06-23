'use client';

import { FlowChart, type FlowEdgePathFn } from '@baneung-pack/chart';

/**
 * 기본 데모 — 4가지 내장 edge type을 한 화면에 모두 보여주는 ETL 파이프라인.
 *
 * 구성:
 *   Source(Postgres) ─bezier→ Extract ─step→ Transform ─smoothstep→ Load(BigQuery)
 *                                                        ─straight→ Audit Log
 */
export function FlowChartBasicDemo() {
  return (
    <FlowChart
      height={420}
      nodes={[
        { id: 'src', label: 'Source · Postgres', x: 40, y: 60 },
        { id: 'extract', label: 'Extract', x: 280, y: 60 },
        { id: 'transform', label: 'Transform', x: 280, y: 180 },
        { id: 'load', label: 'Load · BigQuery', x: 520, y: 180 },
        { id: 'audit', label: 'Audit Log', x: 520, y: 300 },
      ]}
      edges={[
        { source: 'src', target: 'extract', type: 'bezier', label: 'bezier' },
        { source: 'extract', target: 'transform', type: 'step', label: 'step' },
        {
          source: 'transform',
          target: 'load',
          type: 'smoothstep',
          label: 'smoothstep',
          animated: true,
        },
        { source: 'transform', target: 'audit', type: 'straight', label: 'straight' },
      ]}
    />
  );
}

/**
 * 커스텀 edge 데모 — `edgeTypes` prop에 path 생성 함수를 등록.
 *
 * - `wavy`: 사인파처럼 흐르는 곡선
 * - `arc`: 위로 부풀어 오른 호 (반원)
 */
const wavyPath: FlowEdgePathFn = ({ sourceX, sourceY, targetX, targetY }) => {
  // S자 흐름 — 두 control point를 가진 cubic bezier 하나로 충분.
  // c1는 1/4 지점에서 위로, c2는 3/4 지점에서 아래로 → 자연스러운 S 모양.
  // ⚠️ 이전엔 path 끝에 추가 Q 곡선이 붙어 도착점에서 작은 loop가 생기는 버그가 있었음.
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const amp = 40;
  const c1x = sourceX + dx * 0.5;
  const c1y = sourceY + dy * 0.25 - amp;
  const c2x = sourceX + dx * 0.5;
  const c2y = sourceY + dy * 0.75 + amp;
  return `M ${sourceX} ${sourceY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${targetX} ${targetY}`;
};

const arcPath: FlowEdgePathFn = ({ sourceX, sourceY, targetX, targetY }) => {
  // SVG arc — 두 점 사이에 위로 부풀어 오른 반원.
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  // sweep-flag 0이면 위로, 1이면 아래로 볼록.
  const r = Math.hypot(dx, dy);
  return `M ${sourceX} ${sourceY} A ${r} ${r} 0 0 1 ${targetX} ${targetY}`;
};

export function FlowChartCustomEdgeDemo() {
  return (
    <FlowChart
      height={420}
      edgeTypes={{ wavy: wavyPath, arc: arcPath }}
      nodes={[
        { id: 'a', label: 'A', x: 60, y: 220 },
        { id: 'b', label: 'B', x: 320, y: 80 },
        { id: 'c', label: 'C', x: 320, y: 360 },
        { id: 'd', label: 'D', x: 600, y: 220 },
      ]}
      edges={[
        { source: 'a', target: 'b', type: 'arc', label: 'arc', color: '#5BA8A0' },
        {
          source: 'a',
          target: 'c',
          type: 'wavy',
          label: 'wavy',
          color: '#8B5CF6',
          animated: true,
        },
        { source: 'b', target: 'd', type: 'bezier', label: 'bezier (기본)' },
        {
          source: 'c',
          target: 'd',
          type: 'smoothstep',
          label: 'smoothstep',
          color: '#EF4444',
        },
      ]}
    />
  );
}

/**
 * 분기/병합 패턴 — 결정 노드(diamond shape는 미지원이지만 둥근 사각형으로 대체).
 * approve/reject 분기 + animated edge로 진행 강조.
 */
export function FlowChartWorkflowDemo() {
  return (
    <FlowChart
      height={420}
      nodes={[
        { id: 'request', label: '결제 요청', x: 40, y: 180, fill: '#F0F5F4' },
        { id: 'fraud', label: '사기 점검', x: 280, y: 80 },
        { id: 'balance', label: '잔액 확인', x: 280, y: 280 },
        { id: 'decision', label: '승인 결정', x: 520, y: 180, stroke: '#5BA8A0' },
        { id: 'approve', label: '✓ 승인', x: 760, y: 80, stroke: '#10B981', textColor: '#10B981' },
        { id: 'reject', label: '✗ 거절', x: 760, y: 280, stroke: '#EF4444', textColor: '#EF4444' },
      ]}
      edges={[
        { source: 'request', target: 'fraud', animated: true },
        { source: 'request', target: 'balance', animated: true },
        { source: 'fraud', target: 'decision' },
        { source: 'balance', target: 'decision' },
        { source: 'decision', target: 'approve', label: 'OK', color: '#10B981' },
        { source: 'decision', target: 'reject', label: 'NG', color: '#EF4444', dashed: true },
      ]}
    />
  );
}
