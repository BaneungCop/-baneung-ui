'use client';

import * as React from 'react';

import { CircularText } from '@baneung-pack/effect';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Heading,
  Input,
  Lead,
  Separator,
} from '@baneung-pack/ui';

import { useI18n } from '@/components/i18n-provider';

type Direction = 'cw' | 'ccw';

export default function CircularTextDemoPage() {
  const { t } = useI18n();
  const [text, setText] = React.useState('BANEUNG · DESIGN · SYSTEM · ');
  const [radius, setRadius] = React.useState(90);
  const [durationMs, setDurationMs] = React.useState(10000);
  const [direction, setDirection] = React.useState<Direction>('cw');
  const [startAngleDeg, setStartAngleDeg] = React.useState(0);
  const [fontSize, setFontSize] = React.useState(18);
  const [color, setColor] = React.useState('#1F2937');
  const [fontWeight, setFontWeight] = React.useState(700);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>{t('effect.demo.circularText.title')}</Heading>
        <Lead>{t('effect.demo.circularText.lead')}</Lead>
      </header>
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>{t('demo.livePreview')}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex min-h-[300px] items-center justify-center border border-border-default bg-surface p-6">
            <CircularText
              text={text}
              radius={radius}
              durationMs={durationMs}
              direction={direction}
              startAngleDeg={startAngleDeg}
              fontSize={fontSize}
              color={color}
              fontWeight={fontWeight}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Control label={t('effect.demo.circularText.control.text')}>
              <Input value={text} onChange={(e) => setText(e.target.value)} maxLength={60} />
            </Control>

            <Control label={t('effect.demo.circularText.control.direction')}>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={direction === 'cw' ? 'primary' : 'ghost'}
                  onClick={() => setDirection('cw')}
                >
                  시계 (cw)
                </Button>
                <Button
                  size="sm"
                  variant={direction === 'ccw' ? 'primary' : 'ghost'}
                  onClick={() => setDirection('ccw')}
                >
                  반시계 (ccw)
                </Button>
              </div>
            </Control>

            <Control label={`${t('effect.demo.circularText.control.radius')} (${radius}px)`}>
              <input
                type="range"
                min={30}
                max={150}
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="w-full"
              />
            </Control>

            <Control label={`${t('effect.demo.circularText.control.duration')} (${durationMs}ms)`}>
              <input
                type="range"
                min={1000}
                max={30000}
                step={500}
                value={durationMs}
                onChange={(e) => setDurationMs(Number(e.target.value))}
                className="w-full"
              />
            </Control>

            <Control
              label={`${t('effect.demo.circularText.control.startAngle')} (${startAngleDeg}°)`}
            >
              <input
                type="range"
                min={0}
                max={360}
                value={startAngleDeg}
                onChange={(e) => setStartAngleDeg(Number(e.target.value))}
                className="w-full"
              />
            </Control>

            <Control label={`${t('effect.demo.circularText.control.fontSize')} (${fontSize}px)`}>
              <input
                type="range"
                min={10}
                max={36}
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full"
              />
            </Control>

            <Control label={`${t('effect.demo.circularText.control.fontWeight')} (${fontWeight})`}>
              <input
                type="range"
                min={100}
                max={900}
                step={100}
                value={fontWeight}
                onChange={(e) => setFontWeight(Number(e.target.value))}
                className="w-full"
              />
            </Control>

            <Control label={t('effect.demo.circularText.control.color')}>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-10 w-12 cursor-pointer border border-border-default p-1"
                  aria-label={t('effect.demo.colorPickerAria')}
                />
                <Input value={color} onChange={(e) => setColor(e.target.value)} />
              </div>
            </Control>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <PresetCard title="기본 배지 (시계)">
          <CircularText
            text="BANEUNG · PACK · "
            radius={70}
            fontSize={16}
            fontWeight={700}
            color="#1F2937"
          />
        </PresetCard>
        <PresetCard title="작은 도장">
          <CircularText
            text="OFFICIAL · "
            radius={50}
            fontSize={13}
            fontWeight={800}
            color="#DC2626"
            durationMs={6000}
          />
        </PresetCard>
        <PresetCard title="반시계 + 큰 글자">
          <CircularText
            text="DESIGN · SYSTEM · "
            radius={90}
            fontSize={18}
            fontWeight={700}
            color="#5BA8A0"
            direction="ccw"
            durationMs={15000}
          />
        </PresetCard>
        <PresetCard title="정지 (durationMs={'<='} 0)">
          <CircularText
            text="STATIC · BADGE · "
            radius={75}
            fontSize={15}
            fontWeight={700}
            color="#3B716C"
            durationMs={0}
          />
        </PresetCard>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('effect.demo.usage')}</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto bg-surface p-4 text-sm leading-relaxed">
            <code>{`import { CircularText } from '@baneung-pack/effect';

// 기본 회전 배지
<CircularText text="BANEUNG · PACK · " radius={70} fontSize={16} fontWeight={700} />

// 반시계 + 느린 속도
<CircularText
  text="DESIGN · SYSTEM · "
  direction="ccw"
  durationMs={15000}
  radius={90}
/>

// 정지 (정적 배지)
<CircularText text="STATIC · BADGE · " durationMs={0} />`}</code>
          </pre>
        </CardContent>
      </Card>

      <Separator />
      <Heading level={2}>{t('componentShell.apiHeading')}</Heading>
      <Card>
        <CardHeader>
          <CardTitle>CircularTextProps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border-default">
                  <th className="px-3 py-2 text-left font-medium">{t('api.property')}</th>
                  <th className="px-3 py-2 text-left font-medium">{t('api.type')}</th>
                  <th className="px-3 py-2 text-left font-medium">{t('api.default')}</th>
                  <th className="px-3 py-2 text-left font-medium">{t('api.description')}</th>
                </tr>
              </thead>
              <tbody className="text-foreground-muted">
                {PROPS_TABLE.map((row) => (
                  <tr
                    key={row.name}
                    className="border-b border-border-subtle align-top last:border-b-0"
                  >
                    <td className="px-3 py-2 font-mono text-foreground">{row.name}</td>
                    <td className="px-3 py-2 font-mono text-xs">{row.type}</td>
                    <td className="px-3 py-2 font-mono text-xs">{row.default}</td>
                    <td className="px-3 py-2">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Control({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

function PresetCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex min-h-[240px] items-center justify-center">{children}</div>
      </CardContent>
    </Card>
  );
}

const PROPS_TABLE: { name: string; type: string; default: string; desc: string }[] = [
  { name: 'text', type: 'string', default: '—', desc: '표시할 텍스트 (필수). 8~20자 권장.' },
  { name: 'radius', type: 'number', default: '80', desc: '원 반지름 (px).' },
  {
    name: 'durationMs',
    type: 'number',
    default: '12000',
    desc: '한 바퀴 시간 (ms). 0 이하면 정지.',
  },
  { name: 'direction', type: "'cw' | 'ccw'", default: "'cw'", desc: '회전 방향.' },
  { name: 'startAngleDeg', type: 'number', default: '0', desc: '시작 각도 (deg). 0=12시.' },
  { name: 'fontSize', type: 'string | number', default: '—', desc: '폰트 크기.' },
  { name: 'fontWeight', type: "CSSProperties['fontWeight']", default: '—', desc: '폰트 굵기.' },
  { name: 'color', type: 'string', default: '—', desc: '텍스트 색.' },
  { name: 'className', type: 'string', default: '—', desc: '추가 클래스.' },
  { name: 'style', type: 'CSSProperties', default: '—', desc: '인라인 style.' },
];
