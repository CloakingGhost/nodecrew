'use client';

import { cn } from '../../lib';

import { cva, type VariantProps } from 'class-variance-authority';

const tagVariants = cva(
  'relative whitespace-nowrap inline-flex items-center rounded-md border px-2 py-0.5 typography-caption1-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-fill-normal text-label-normal',
        primary: 'border-transparent bg-primary-normal/12 text-primary-normal',
        positive:
          'border-transparent bg-status-positive/12 text-status-positive',
        negative:
          'border-transparent bg-status-negative/12 text-status-negative',
        cautionary:
          'border-transparent bg-status-cautionary/12 text-status-cautionary',
        outlined: 'border-line-normal-normal',
        disabled: 'border-transparent bg-fill-alternative text-label-disable',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

function Tag({ className, variant, ...props }: TagProps) {
  return <div className={cn(tagVariants({ variant }), className)} {...props} />;
}

export { Tag, tagVariants };
