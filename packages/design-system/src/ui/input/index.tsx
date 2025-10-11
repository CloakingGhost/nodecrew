'use client';

import * as React from 'react';

import { cn } from '../../lib';

import {
  RiErrorWarningFill,
  RiCheckboxCircleFill,
  RiEyeLine,
  RiEyeOffLine,
} from '@remixicon/react';
import { cva } from 'class-variance-authority';

const inputVariants = cva(
  'text-label-normal flex h-10 w-full px-3 py-1 typography-body2-normal transition placeholder:text-label-assistive focus-visible:outline-none bg-background-normal-normal hover:ring-1 hover:ring-primary-normal disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        outlined: 'border border-line-normal-normal',
        filled: 'bg-fill-alternative',
      },
      status: {
        default: '',
        error:
          'focus-visible:ring-1 border-status-negative focus-visible:ring-status-negative hover:ring-status-negative pr-7',
        success:
          'focus-visible:ring-1 focus-visible:ring-status-positive hover:ring-status-positive pr-7',
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-md',
      },
      disabled: {
        true: 'cursor-default border-line-normal-alternative focus-visible:ring-line-normal-alternative hover:ring-line-normal-alternative',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'outlined',
      status: 'default',
      rounded: false,
    },
  },
);

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'prefix' | 'suffix'
  > {
  status?: 'default' | 'error' | 'success';
  variant?: 'outlined' | 'filled';
  rounded?: boolean;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      status,
      variant,
      rounded,
      disabled,
      prefix,
      suffix,
      ...props
    },
    ref,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const togglePasswordVisibility = () =>
      setIsPasswordVisible(!isPasswordVisible);

    const prefixRef = React.useRef<HTMLDivElement>(null);
    const suffixRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (prefixRef.current && inputRef.current) {
        const prefixWidth = prefixRef.current.offsetWidth;
        inputRef.current.style.paddingLeft = `${prefixWidth + 8}px`; // 8px for spacing
      }

      if (suffixRef.current && inputRef.current) {
        const suffixWidth = suffixRef.current.offsetWidth;
        inputRef.current.style.paddingRight = `${suffixWidth + 8}px`; // 8px for spacing
      }
    }, [prefix, suffix]);

    const prefixContainer = prefix ? (
      <div
        ref={prefixRef}
        className="typography-label1-normal-bold text-label-alternative absolute left-2 flex shrink-0 px-1"
      >
        {prefix}
      </div>
    ) : null;

    const suffixContainer =
      type === 'password' ? (
        <div
          ref={suffixRef}
          className={cn(
            'typography-label1-normal-bold text-label-assistive absolute right-2 flex shrink-0 px-1 transition-transform',
            status === 'success' || (status === 'error' && '-translate-x-5'),
          )}
        >
          {isPasswordVisible ? (
            <RiEyeLine className="size-4" onClick={togglePasswordVisibility} />
          ) : (
            <RiEyeOffLine
              className="size-4"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      ) : suffix ? (
        <div
          ref={suffixRef}
          className="typography-label1-normal-bold text-label-alternative absolute right-2 flex shrink-0 px-1"
        >
          {suffix}
        </div>
      ) : null;

    const statusContainer = (
      <div className="absolute right-2">
        {status === 'success' ? (
          <RiCheckboxCircleFill className="text-status-positive animate-in fade-in-0 zoom-in-75 size-5" />
        ) : status === 'error' ? (
          <RiErrorWarningFill className="text-status-negative animate-in fade-in-0 zoom-in-75 size-5" />
        ) : null}
      </div>
    );
    return (
      <div className="relative flex w-full items-center">
        <input
          type={
            type === 'password'
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : type
          }
          className={cn(
            inputVariants({ variant, status, rounded, disabled }),
            type === 'file' &&
              'h-fit cursor-pointer rounded-none border-0 bg-transparent p-0 pt-1 file:cursor-pointer file:rounded-md file:border-0 file:bg-transparent file:p-1 file:px-2 hover:ring-0 focus-visible:ring-0',
            className,
          )}
          aria-disabled={disabled || undefined}
          disabled={disabled || undefined}
          ref={element => {
            if (typeof ref === 'function') {
              ref(element);
            } else if (ref) {
              ref.current = element;
            }
            inputRef.current = element;
          }}
          {...props}
        />
        {prefixContainer}
        {suffixContainer}
        {statusContainer}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
