import { ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '../../lib';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const ButtonFloatVariants = cva(
  'relative p-4 shadow-strong rounded-full aspect-ratio-1/1 interaction-strong text-static-white bg-primary-normal cursor-pointer select-none',
  {
    variants: {
      disable: {
        false: '',
        true: 'text-label-assistive bg-interaction-disable',
      },
    },
    defaultVariants: {
      disable: false,
    },
  },
);

export interface ButtonFloatProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonFloatVariants> {
  asChild?: boolean;
}

const ButtonFloat = forwardRef<HTMLButtonElement, ButtonFloatProps>(
  ({ className, asChild = false, disable, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const ButtonChild = () => props.children;

    return (
      <Comp
        className={cn(ButtonFloatVariants({ disable, className }))}
        tabIndex={disable ? -1 : undefined}
        aria-disabled={disable || undefined}
        ref={ref}
        {...props}
      >
        <ButtonChild />
      </Comp>
    );
  },
);
ButtonFloat.displayName = 'ButtonFloat';

export { ButtonFloat, ButtonFloatVariants };
