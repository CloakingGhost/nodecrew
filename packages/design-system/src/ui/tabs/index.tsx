'use client';

import * as React from 'react';

import { cn } from '../../lib';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { Button } from '../button';
import { ButtonProps } from '../button/Button';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={cn(className)} {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={cn(className)} {...props} />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn(className)} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const CardTabButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, iconLeft, children, ...props }, ref) => {
    const selected = React.useMemo(() => {
      return (props as { 'data-state'?: string })['data-state'] === 'active';
    }, [props]);

    return (
      <Button
        {...props}
        ref={ref}
        variant={'outlined/assistive'}
        className={cn(
          'rounded-md px-2 py-1.5',
          selected && 'bg-background-normal-alternative',
          !selected && 'text-label-alternative inset-ring-0',
          className,
        )}
        iconLeft={iconLeft}
      >
        <span className={cn('typography-caption2')}>{children}</span>
      </Button>
    );
  },
);
CardTabButton.displayName = TabsPrimitive.Trigger.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent, CardTabButton };
