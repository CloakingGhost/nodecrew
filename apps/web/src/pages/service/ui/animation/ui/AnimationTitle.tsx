import Link from 'next/link';

import { Logo, Button } from '@nodecrew/design-system';

import { RiExternalLinkLine } from '@remixicon/react';

const CONFIG = {
  LOGO: { variant: 'horizontal', title: 'Daily Algo', width: 429, height: 80 },
  DAILY_ALGO: {
    LINK: { href: 'https://dailyalgo.kr/', target: '_blank' },
    BUTTON: {
      size: 'large',
      iconRight: <RiExternalLinkLine className="size-5" />,
    },
  },
} as const;

export default function AnimationTitle() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <Logo {...CONFIG.LOGO} />
          <h1 className="typography-display2-bold text-static-white">
            데일리알고 LMS
          </h1>
        </div>
        <Link {...CONFIG.DAILY_ALGO.LINK}>
          <Button {...CONFIG.DAILY_ALGO.BUTTON}>서비스 바로가기</Button>
        </Link>
      </div>
    </section>
  );
}
