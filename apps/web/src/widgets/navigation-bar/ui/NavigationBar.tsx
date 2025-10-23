'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Button } from '@nodecrew/design-system';
import type { ButtonProps } from '@nodecrew/design-system';

import {
  RiCloseLargeLine,
  RiMenuLine,
  RiExternalLinkLine,
} from '@remixicon/react';

import { Logo } from '@/shared/ui';

const LOGO_SIZE = { width: 121, height: 20 } as const;

type NavLink = {
  name: string;
  href: string;
  variant: ButtonProps['variant'];
  hasIcon: boolean;
};

const NAV_LINKS: readonly NavLink[] = [
  {
    name: '회사소개',
    href: '/company',
    variant: 'text/assistive',
    hasIcon: false,
  },
  {
    name: '서비스',
    href: '/service',
    variant: 'text/assistive',
    hasIcon: false,
  },
  {
    name: '소식',
    href: '/notify',
    variant: 'solid/primary',
    hasIcon: true,
  },
];

function LogoLink() {
  return (
    <Link href="/">
      <Logo {...LOGO_SIZE} />
    </Link>
  );
}

// 링크 버튼
function LinkButton() {
  return (
    <>
      {NAV_LINKS.map(({ name, href, variant, hasIcon }) => (
        <Button
          key={name}
          variant={variant}
          size="small"
          iconLeft={hasIcon ? <RiExternalLinkLine size={16} /> : undefined}
          className={
            hasIcon ? 'bg-fill-normal text-label-normal' : 'text-label-normal'
          }
        >
          <Link
            href={href}
            className="typography-heading2-bold md:typography-label1-normal-bold"
          >
            {name}
          </Link>
        </Button>
      ))}
    </>
  );
}

// 메인 로직
function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-center px-5 py-10">
      {/* --- PC용 네비게이션 --- */}
      <div className="hidden w-full justify-center md:flex">
        <div className="max-w-275 h-18 shadow-emphasize border-1 border-line-normal-alternative bg-background-elevated-alternative flex w-full items-center justify-between rounded-full px-10">
          <LogoLink />

          <div className="flex w-64 justify-between">
            <LinkButton />
          </div>
        </div>
      </div>

      {/* --- 모바일용 네비게이션 --- */}
      <div className="relative z-50 block w-full md:hidden">
        <div className="relative z-50 flex items-center justify-between">
          <div className="bg-background-elevated-alternative shadow-emphasize flex h-16 w-52 items-center justify-center rounded-full">
            <LogoLink />
          </div>
          <Button
            variant="text/assistive"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-background-elevated-alternative shadow-emphasize flex h-16 w-16 cursor-pointer items-center justify-center rounded-full p-0 focus:outline-none"
          >
            {isMenuOpen ? (
              <RiCloseLargeLine size={24} />
            ) : (
              <RiMenuLine size={24} />
            )}
          </Button>
        </div>

        {/* 모바일 메뉴 패널 */}
        {isMenuOpen && (
          <div className="animate-in fade-in-0 bg-background-elevated-alternative/80 fixed left-0 top-0 z-40 size-full p-10 pt-32 backdrop-blur">
            <div className="flex flex-col items-end gap-8">
              <LinkButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;