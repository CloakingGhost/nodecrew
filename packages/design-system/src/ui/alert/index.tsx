import * as React from 'react';

import { cn } from '../../lib';

import {
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
} from '@remixicon/react';
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva(
  'shadow-normal flex flex-col justify-center gap-1 relative w-full rounded-lg backdrop-blur py-3 px-4 [&>svg]:absolute [&>svg]:left-2.5 [&>svg~*]:pl-6 [&>svg]:size-5 [&>svg]:top-[50%] [&>svg]:translate-y-[-50%]',
  {
    variants: {
      variant: {
        default:
          'border border-line-normal-normal bg-background-elevated-normal/70',
        success:
          'text-status-positive border-1 border-status-positive/20 bg-status-positive/5',
        error:
          'text-status-negative border-1 border-status-negative/20 bg-status-negative/5',
        info: 'text-primary-normal border-1 border-primary-normal/20 bg-primary-normal/5',
        warning:
          'text-status-cautionary border-1 border-status-cautionary/20 bg-status-cautionary/5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  >
    {variant === 'info' && <RiInformationFill />}
    {variant === 'success' && <RiCheckboxCircleFill />}
    {(variant === 'error' || variant === 'warning') && <RiErrorWarningFill />}
    {children}
  </div>
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      'typography-label1-normal-bold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('typography-label2 text-label-neutral', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
