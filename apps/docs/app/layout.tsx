import { SiteShell } from '@/components/site-shell';
import { ThemeProvider } from '@/components/theme-provider';

import type { Metadata } from 'next';

// 라이브러리 styles.css를 먼저 → preflight·토큰·컴포넌트 utility를 @layer baneung에
// 등록. 그 다음 docs globals.css → docs용 utility(unlayered)를 추가.
// CSS spec상 unlayered > layered이므로 docs의 .md\:flex 같은 반응형 utility가
// 라이브러리의 .hidden(layered)을 자연스럽게 override한다.
//
// grid styles.css도 같은 @layer baneung을 사용하므로 ui 다음에 import해 layer 머지.
import '@baneung-pack/ui/styles.css';
import '@baneung-pack/grid/styles.css';
import './globals.css';

export const metadata: Metadata = {
  title: '@baneung-pack/ui — 바능 디자인 시스템',
  description: '바능 브랜드 가이드라인을 따르는 React 디자인 시스템.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="bg-canvas text-foreground antialiased">
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
