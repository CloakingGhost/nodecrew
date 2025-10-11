import * as React from 'react';

import { cn } from '../../lib';

import { Logo } from '../logo';

const ResultFullScreen = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    description: string;
    children: React.ReactNode;
  }
>(({ className, title, description, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-screen w-full flex-col items-center justify-center gap-8 p-4',
      className,
    )}
    {...props}
  >
    <div className="flex flex-col items-center">
      <Logo className="size-32" />
      <div className="flex flex-col items-center">
        <p className="typography-title2-bold text-label-neutral animate-in fade-in-0 slide-in-from-bottom-1">
          {title}
        </p>
        <span className="typography-label1-normal-medium text-label-alternative">
          {description}
        </span>
      </div>
    </div>
    {children}
  </div>
));
ResultFullScreen.displayName = 'ResultFullScreen';

export { ResultFullScreen };
