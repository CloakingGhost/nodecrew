import { ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '../../lib';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonIconVariants = cva(
  'relative rounded-full aspect-square after:aspect-square cursor-pointer select-none',
  {
    variants: {
      variant: {
        normal:
          'interaction-strong text-label-normal after:top-[-8px] after:left-[-8px] after:w-[calc(100%+16px)] after:h-[calc(100%+16px)] aria-disabled:text-label-disable',
        background: cn(
          'interaction-light text-label-alternative p-[2px]',
          'before:bg-fill-normal before:absolute before:left-[-4px] before:top-[-4px] before:size-[calc(100%+8px)] before:rounded-full before:opacity-100 before:content-[""]',
          'after:left-[-4px] after:top-[-4px] after:size-[calc(100%+8px)]',
        ),
        solid:
          'interaction-strong text-static-white bg-primary-normal aria-disabled:text-label-assistive aria-disabled:bg-interaction-disable',
        outlined:
          'interaction-light text-label-normal inset-ring inset-ring-line-normal-normal',
      },
      size: {
        normal: 'p-[10px] [&_svg]:size-[20px]',
        small: 'p-[7px] [&_svg]:size-[18px]',
        custom:
          'flex justify-center items-center [&_svg]:size-full [&_svg]:shirk-0 size-4',
      },
      disabled: {
        false: '',
        true: 'text-label-disable pointer-events-none cursor-not-allowed',
      },
    },
    defaultVariants: {
      variant: 'normal',
      size: 'custom',
      disabled: false,
    },
  },
);

export interface ButtonIconProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonIconVariants> {
  asChild?: boolean;
}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const ButtonChild = () => props.children;

    return (
      <Comp
        className={cn(
          buttonIconVariants({ variant, size, disabled, className }),
        )}
        tabIndex={disabled ? -1 : undefined}
        disabled={disabled || undefined}
        aria-disabled={disabled || undefined}
        ref={ref}
        {...props}
      >
        <ButtonChild />
      </Comp>
    );
  },
);
ButtonIcon.displayName = 'ButtonIcon';

export { ButtonIcon, buttonIconVariants };
