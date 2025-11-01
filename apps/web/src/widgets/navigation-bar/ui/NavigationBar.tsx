'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@nodecrew/design-system';
import type { ButtonProps } from '@nodecrew/design-system';

import {
  RiCloseLargeLine,
  RiMenuLine,
  RiExternalLinkLine,
} from '@remixicon/react';

import { Logo } from '@/shared/ui';

const LOGO_SIZE = { width: 121, height: 24 } as const;

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

function LogoLink({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick}>
      <Logo {...LOGO_SIZE} />
    </Link>
  );
}
// 링크 버튼
function LinkButton({ onClick }: { onClick?: () => void }) {
  const currentPath = usePathname();

  return (
    <>
      {NAV_LINKS.map(({ name, href, variant, hasIcon }) => (
        <Link key={name} href={href} onClick={onClick}>
          <Button
            variant={variant}
            size="small"
            iconLeft={hasIcon ? <RiExternalLinkLine size={16} /> : undefined}
            className={
              hasIcon ? 'bg-fill-normal text-label-normal' : 'text-label-normal'
            }
          >
            <span
              className={`typography-heading2-bold md:typography-label1-normal-bold ${currentPath?.startsWith(href) ? 'text-primary-normal' : undefined}`}
            >
              {name}
            </span>
          </Button>
        </Link>
      ))}
    </>
  );
}

// 메인 로직
function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = (status: boolean) => setIsMenuOpen(status);

  return (
    <nav className="fixed top-0 z-50 flex w-full justify-center px-5 py-5">
      {/* --- PC용 네비게이션 --- */}
      <div className="hidden w-full justify-center md:flex">
        <div className="max-w-275 h-18 shadow-emphasize border-1 border-line-normal-alternative bg-background-elevated-alternative flex w-full items-center justify-between rounded-full px-10">
          <LogoLink />

          <div className="flex w-64 items-center justify-between">
            <LinkButton />
          </div>
        </div>
      </div>

      {/* --- 모바일용 네비게이션 --- */}
      <div className="relative block w-full md:hidden">
        <div className="relative z-50 flex items-center justify-between">
          <div className="border-1 border-line-normal-alternative bg-background-elevated-alternative shadow-emphasize flex h-16 w-52 items-center justify-center rounded-full">
            <LogoLink onClick={() => handleMenu(false)} />
          </div>
          <Button
            variant="text/assistive"
            onClick={() => handleMenu(!isMenuOpen)}
            className="border-1 border-line-normal-alternative bg-background-elevated-alternative shadow-emphasize !m-0 flex size-16 items-center justify-center rounded-full focus:outline-none"
          >
            {isMenuOpen ? (
              <RiCloseLargeLine className="size-6" />
            ) : (
              <RiMenuLine className="size-6" />
            )}
          </Button>
        </div>

        {/* 모바일 메뉴 패널 */}
        {isMenuOpen && (
          <div
            className="animate-in fade-in-0 bg-background-elevated-alternative/80 fixed left-0 top-0 z-40 size-full p-10 pt-32 backdrop-blur duration-200"
            onClick={e => {
              console.log(e.target);
              console.log(e.currentTarget);
              if (e.target === e.currentTarget) {
                handleMenu(false);
              }
            }}
          >
            <div className="ml-auto flex w-fit flex-col gap-8 text-right">
              <LinkButton onClick={() => handleMenu(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
