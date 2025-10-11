import * as React from 'react';

import { cn } from '../../lib';

import { cva } from 'class-variance-authority';

const textareaVariants = cva(
  'text-label-normal min-h-[60px] rounded-md flex h-10 w-full px-3 py-1 typography-body2-normal placeholder:text-label-assistive focus-visible:outline-none bg-background-normal-normal hover:ring-1 hover:ring-primary-normal disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        outlined: 'border border-line-normal-normal',
        filled: 'bg-background-normal-alternative',
      },
      disabled: {
        true: 'cursor-default border-line-normal-alternative focus-visible:ring-line-normal-alternative hover:ring-line-normal-alternative',
        false: '',
      },
      readOnly: {
        true: 'hover:ring-0',
        false: '',
      },
      status: {
        default: '',
        error:
          'focus-visible:ring-1 border-status-negative focus-visible:ring-status-negative hover:ring-status-negative',
        success:
          'focus-visible:ring-1 focus-visible:ring-status-positive hover:ring-status-positive',
      },
    },
    defaultVariants: {
      variant: 'outlined',
      status: 'default',
    },
  },
);

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'outlined' | 'filled';
  status?: 'default' | 'error' | 'success';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, disabled, readOnly, status, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          textareaVariants({ variant, disabled, readOnly, status, className }),
        )}
        disabled={disabled}
        aria-disabled={disabled}
        ref={ref}
        readOnly={readOnly}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
