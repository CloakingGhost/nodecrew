import { cn } from '../../lib';

import loading from './loading.gif';

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: boolean;
}

function Loading({ className, background = false, ...props }: LoadingProps) {
  return (
    <div
      className={cn(
        'relative size-full',
        background && 'bg-fill-normal',
        className,
      )}
      {...props}
    >
      <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2">
        <img
          src={loading as unknown as string}
          alt="loading"
          loading="eager"
          className="absolute"
        />
      </div>
    </div>
  );
}

export { Loading };
