import { Heading, Lead, Separator } from '@baneung-pack/ui';

import { ComponentPreviewGrid } from '@/components/component-preview-card';
import { componentMetadata } from '@/lib/components-metadata';

export default function ComponentsIndexPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <Heading level={1}>컴포넌트</Heading>
        <Lead>
          {componentMetadata.length}개의 컴포넌트. 각 카드의 미리보기를 클릭하면 라이브 예제와 props
          API 표가 있는 상세 페이지로 이동합니다.
        </Lead>
      </header>

      <Separator />

      <ComponentPreviewGrid />
    </div>
  );
}
