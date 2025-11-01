import type { Metadata } from 'next';

import './globals.css';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { NavigationBar } from '@/widgets/navigation-bar';

const OPEN_GRAPH = {
  title: '노드크루 | NODECREW',
  description:
    'SW, AI 교육은 노드크루와 함께! 노드크루는 고객이 필요로 하는 최적의 SW, AI 교육 제공합니다.',
  images: {
    url: '/assets/images/og.png',
    width: 1200,
    height: 630,
    alt: 'NODECREW OG',
  },
  icons: {
    icon: [
      {
        url: '/assets/icons/favicon-16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/assets/icons/favicon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/assets/icons/favicon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        url: '/assets/icons/favicon-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/assets/icons/favicon-180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        url: '/assets/icons/favicon-192.png',
        sizes: '192x192',
      },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nodecrew.kr'),

  title: OPEN_GRAPH.title,
  description: OPEN_GRAPH.description,

  openGraph: {
    title: OPEN_GRAPH.title,
    description: OPEN_GRAPH.description,
    images: [OPEN_GRAPH.images],
    type: 'website',
    locale: 'ko_KR',
    siteName: OPEN_GRAPH.title,
  },
  twitter: {
    card: 'summary',
    title: OPEN_GRAPH.title,
    description: OPEN_GRAPH.description,
    images: [OPEN_GRAPH.images],
  },
  icons: OPEN_GRAPH.icons,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header>
          <NavigationBar />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
