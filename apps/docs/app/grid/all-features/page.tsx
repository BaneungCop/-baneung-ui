import { DemoPage } from '@/components/demo-page';
import { allFeaturesCode } from '@/lib/grid-demo-code';
import { FullFeatureAdminDemo } from '@/lib/grid-phase3-demos';

export default function Page() {
  return (
    <DemoPage
      titleKey="nav.grid.allFeatures"
      leadKey="gridDemo.allFeatures"
      Example={FullFeatureAdminDemo}
      code={allFeaturesCode}
    />
  );
}
