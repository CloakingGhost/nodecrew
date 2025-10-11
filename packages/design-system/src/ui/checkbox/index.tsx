import * as React from 'react';

import { cn } from '../../lib';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva, type VariantProps } from 'class-variance-authority';

import CheckedIcon from './checkbox_checked.svg?react';

const checkboxVariants = cva(
  cn(
    'focus-visible:ring-primary-normal peer relative size-4 shrink-0 transition-all focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
  ),
  {
    variants: {
      size: {
        small: cn(
          'size-4',
          'interaction-light after:-left-[7px] after:-top-[7px] after:-z-20 after:size-7 after:rounded-full',
        ),
        medium: cn(
          'size-[18px]',
          'interaction-light after:-left-[9px] after:-top-[9px] after:-z-20 after:size-[34px] after:rounded-full',
        ),
      },
      rounded: {
        true: cn('rounded-full'),
        false: cn('rounded-sm'),
      },
      background: {
        true: cn(
          'border-line-normal-normal border p-0.5 text-[#00000000]',
          'data-[state=checked]:bg-primary-normal data-[state=checked]:text-static-white',
        ),
        false: cn(
          'data-[state=unchecked]:text-label-assistive data-[state=checked]:text-primary-normal',
        ),
      },
      status: {
        success: cn('data-[state=unchecked]:border-status-positive'),
        error: cn('data-[state=unchecked]:border-status-negative'),
      },
    },
    defaultVariants: {
      size: 'small',
      rounded: false,
      background: true,
    },
  },
);

export interface CheckboxProps
  extends CheckboxPrimitive.CheckboxProps,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(({ className, size, rounded, background = true, status, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      checkboxVariants({ size, rounded, background, status }),
      className,
    )}
    {...props}
  >
    <span className={cn('flex size-full items-center justify-center')}>
      <CheckedIcon className="size-full" />
    </span>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
