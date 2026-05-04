import { SiteShell } from '@/components/site-shell';
import { ThemeProvider } from '@/components/theme-provider';

import type { Metadata } from 'next';

// CSS layer 등록 순서가 cascade 우선순위를 결정한다.
// docs의 globals.css가 먼저 파싱돼야 `@layer app, baneung;` 선언이 두 레이어를
// 그 순서대로 등록(app=0, baneung=1)하고, 결과적으로 baneung이 우선이 된다.
// 라이브러리 styles.css를 먼저 import하면 baneung이 0번에 등록돼 app(1)에 짐.
import './globals.css';
import '@baneung-pack/ui/styles.css';

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
