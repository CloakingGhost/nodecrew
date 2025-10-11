import * as React from 'react';

import { cn } from '../../lib';

import { RiCheckboxCircleFill, RiCloseCircleFill } from '@remixicon/react';

import { Button } from '../button';

/**
 * @description 결과 표시 컴포넌트
 * @param {string} icon - 아이콘은 Ri icon의 Filled 버전을 사용해야 합니다.
 */
const Result = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'success' | 'error';
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    action?: () => void;
    actionLabel?: string;
    cancel?: () => void;
    cancelLabel?: string;
  }
>(
  (
    {
      className,
      variant,
      title,
      description,
      icon,
      action,
      actionLabel,
      cancel,
      cancelLabel,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        'flex h-full w-full flex-col items-center justify-center gap-6 py-16',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="animate-in fade-in-0 slide-in-from-bottom-1">
          {variant === 'success' ? (
            <RiCheckboxCircleFill className="text-status-positive size-8" />
          ) : variant === 'error' ? (
            <RiCloseCircleFill className="text-status-negative size-8" />
          ) : icon ? (
            <div className="text-label-alternative">{icon}</div>
          ) : null}
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="typography-label1-normal-bold text-label-neutral">
            {title}
          </span>
          <span className="typography-caption1 text-label-alternative">
            {description}
          </span>
        </div>
      </div>
      {action || cancel ? (
        <div className="flex flex-col items-center gap-2">
          {action && (
            <Button
              variant={'outlined/assistive'}
              size={'small'}
              onClick={action}
            >
              {actionLabel ?? 'Confirm'}
            </Button>
          )}
          {cancel && (
            <Button variant={'text/assistive'} size={'small'} onClick={cancel}>
              {cancelLabel ?? 'Cancel'}
            </Button>
          )}
        </div>
      ) : null}
    </div>
  ),
);
Result.displayName = 'Result';

export { Result };
