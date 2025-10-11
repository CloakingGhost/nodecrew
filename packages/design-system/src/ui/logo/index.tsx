'use client';

import * as React from 'react';

import { cn } from '../../lib';

import { cva } from 'class-variance-authority';

import LogoHorizontal from '../../assets/logo/logo-horizontal.svg?react';
import LogoVertical from '../../assets/logo/logo-vertical.svg?react';
import LogoIcon from '../../assets/logo/logo.svg?react';

const logoVariants = cva('', {
  variants: {
    color: {
      normal: cn('text-primary-normal'),
      black: cn('text-static-black'),
      white: cn('text-static-white'),
    },
  },
  defaultVariants: {
    color: 'normal',
  },
});

const Logo = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    variant?: 'horizontal' | 'vertical';
    color?: 'black' | 'white';
  }
>(({ className, color, variant, ...props }, ref) =>
  (() => {
    if (variant === 'horizontal') {
      return (
        <LogoHorizontal
          ref={ref}
          className={cn(logoVariants({ color }), className)}
          {...props}
        />
      );
    }
    if (variant === 'vertical') {
      return (
        <LogoVertical
          ref={ref}
          className={cn(logoVariants({ color }), className)}
          {...props}
        />
      );
    }
    return (
      <LogoIcon
        ref={ref}
        className={cn(logoVariants({ color }), className)}
        {...props}
      />
    );
  })(),
);
Logo.displayName = 'Logo';

export { Logo };
