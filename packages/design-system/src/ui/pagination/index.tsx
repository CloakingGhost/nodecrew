import * as React from 'react';

import { cn } from '../../lib';

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMoreLine,
} from '@remixicon/react';

import { ButtonProps, buttonVariants } from '../button';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-2', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  active?: boolean;
  disabled?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({
  className,
  active,
  disabled,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={active ? 'page' : undefined}
    className={cn(
      'h-10 min-w-10 !px-2',
      buttonVariants({
        variant: active ? 'solid/primary' : 'outlined/assistive',
        size: 'small',
        disabled,
      }),
      active ? 'cursor-default after:hidden' : 'cursor-pointer',
      'hover:no-underline',
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <a
    aria-label="Go to previous page"
    aria-disabled={disabled}
    className={cn(
      buttonVariants({
        variant: 'outlined/assistive',
        size: 'small',
        disabled,
      }),
      'size-10 !p-0',
      disabled ? 'cursor-default after:hidden' : 'cursor-pointer',
      className,
    )}
    {...props}
  >
    <RiArrowLeftSLine />
  </a>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <a
    aria-label="Go to next page"
    aria-disabled={disabled}
    className={cn(
      buttonVariants({
        variant: 'outlined/assistive',
        size: 'small',
        disabled,
      }),
      'size-10 !p-0',
      disabled ? 'cursor-default after:hidden' : 'cursor-pointer',
      className,
    )}
    {...props}
  >
    <RiArrowRightSLine />
  </a>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink className={cn('size-10 !p-0', className)} {...props}>
    <RiMoreLine />
    <span className="sr-only">More pages</span>
  </PaginationLink>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
