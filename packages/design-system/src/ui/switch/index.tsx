'use client';

import * as React from 'react';

import { cn } from '../../lib';

import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';

const switchVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-normal data-[state=unchecked]:bg-fill-strong',
  {
    variants: {
      size: {
        small: cn('h-6 w-[39px] p-[3px]'),
        medium: cn('h-8 w-[52px] p-1 '),
      },
    },
    defaultVariants: {
      size: 'small',
    },
  },
);

const thumbVariants = cva(
  'pointer-events-none block rounded-full bg-static-white ring-0 transition-transform data-[state=unchecked]:translate-x-0',
  {
    variants: {
      size: {
        small: cn('h-[18px] w-[18px] data-[state=checked]:translate-x-[15px]'),
        medium: cn('h-6 w-6 data-[state=checked]:translate-x-5'),
      },
    },
    defaultVariants: {
      size: 'small',
    },
  },
);

export interface SwitchProps
  extends SwitchPrimitives.SwitchProps,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & SwitchProps
>(({ className, size, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ size }), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={cn(thumbVariants({ size }))} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
