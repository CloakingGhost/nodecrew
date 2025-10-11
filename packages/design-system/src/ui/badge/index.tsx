'use client';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib';

const badgeVariants = cva(
  'relative inline-flex items-center rounded-full px-2 py-0.5 typography-caption2-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default',
  {
    variants: {
      variant: {
        default: 'bg-primary-normal text-static-white',
        secondary: 'bg-fill-normal text-label-normal',
        negative: 'bg-status-negative text-static-white',
        positive: 'bg-status-positive text-static-white',
        cautionary: 'bg-status-cautionary text-static-white',
        outlined: 'inset-ring inset-ring-primary-normal text-primary-normal',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, onClick, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        onClick && 'interaction-strong cursor-pointer',
        className,
      )}
      onClick={onClick}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
