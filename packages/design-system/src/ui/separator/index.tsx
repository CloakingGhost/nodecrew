'use client';

import * as React from 'react';

import { cn } from '../../lib';

import * as SeparatorPrimitive from '@radix-ui/react-separator';

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  vertical?: boolean;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ className, vertical = false, decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={vertical ? 'vertical' : 'horizontal'}
    className={cn(
      'bg-line-normal-alternative shrink-0 grow-0',
      vertical ? 'h-full w-px' : 'h-px w-full',
      className,
    )}
    {...props}
  />
));
Separator.displayName = 'Separator';

export { Separator };
