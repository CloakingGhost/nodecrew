import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { cn } from '../../lib';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  cn(
    'no-wrap relative inline-flex cursor-pointer select-none items-center justify-center gap-1.5',
  ),
  {
    variants: {
      variant: {
        'solid/primary': cn(
          'shadow-normal text-static-white bg-primary-normal interaction-strong',
          'aria-disabled:bg-interaction-disable aria-disabled:text-label-assistive',
        ),
        'outlined/primary': cn(
          'shadow-normal inset-ring-primary-normal bg-background-elevated-normal/70 text-primary-normal interaction-normal inset-ring',
          'aria-disabled:inset-ring-line-normal-normal aria-disabled:text-label-disable',
        ),
        'outlined/secondary': cn(
          'shadow-normal inset-ring-line-normal-neutral bg-background-elevated-normal/70 text-primary-normal interaction-light inset-ring',
          'aria-disabled:inset-ring-line-normal-normal aria-disabled:text-label-disable',
        ),
        'outlined/assistive': cn(
          'shadow-normal inset-ring-line-normal-neutral bg-background-elevated-normal/70 text-label-normal interaction-light inset-ring',
          'aria-disabled:inset-ring-line-normal-normal aria-disabled:text-label-disable',
        ),
        'text/primary': cn(
          '!before:left-[-7px] !before:w-[calc(100%+14px)] !mx-[-6px] !my-[-4px] !px-[6px] !py-[4px]',
          '!interaction-normal text-primary-normal',
          'aria-disabled:text-label-disable',
        ),
        'text/secondary': cn(
          '!before:left-[-7px] !before:w-[calc(100%+14px)] !mx-[-6px] !my-[-4px] !px-[6px] !py-[4px]',
          '!interaction-light text-label-normal',
          'aria-disabled:text-label-disable',
        ),
        'text/assistive': cn(
          '!before:left-[-7px] !before:w-[calc(100%+14px)] !mx-[-6px] !my-[-4px] !px-[6px] !py-[4px]',
          '!interaction-light text-label-alternative',
          'aria-disabled:text-label-disable',
        ),
      },
      size: {
        large:
          'py-[12px] px-[28px] rounded-[10px] typography-body1-normal-bold [&_svg]:size-[1rem]',
        medium:
          'py-[9px] px-[20px] rounded-[8px] typography-body2-normal-bold [&_svg]:size-[0.813rem]',
        small:
          'py-[7px] px-[14px] rounded-[6px] typography-label2-bold [&_svg]:size-[0.813rem]',
      },
      disabled: {
        false: '',
        true: 'pointer-events-none cursor-not-allowed',
      },
    },
    defaultVariants: {
      variant: 'solid/primary',
      size: 'large',
      disabled: false,
    },
  },
);

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      disabled,
      iconLeft,
      iconRight,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const IconLeft = () => iconLeft as React.ReactSVGElement;
    const IconRight = () => iconRight;
    const ButtonChild = () => (
      <>
        <IconLeft />
        {props.children}
        <IconRight />
      </>
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, disabled }), className)}
        tabIndex={disabled ? -1 : undefined}
        aria-disabled={disabled || undefined}
        ref={ref}
        {...props}
      >
        <ButtonChild />
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
