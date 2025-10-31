import { type RemixiconComponentType } from '@remixicon/react';

import PixelCard from './PixelCard';

type PielxCardProps = {
  Icon: RemixiconComponentType;
  title: string;
  content: readonly string[];
  size: number | string;
};

export default function PixelCardItem({
  Icon,
  title,
  content,
  size,
}: PielxCardProps) {
  return (
    <PixelCard className="h-95 bg-background-normal-normal rounded-4xl max-w-110 md:max-w-134 w-full p-8 md:p-16">
      <div className="flex h-full w-full items-center justify-center md:justify-start">
        <div className="flex flex-col gap-5 sm:gap-10">
          <header>
            <div className="flex flex-col gap-2 sm:gap-4">
              <div className="icon-primary-radial-gradient">
                <Icon
                  {...(typeof size === 'number'
                    ? { size }
                    : { className: String(size) })}
                />
              </div>
              <p className="text-primary-radial-gradient typography-title2-bold">
                {title}
              </p>
            </div>
          </header>
          <main className="flex flex-col gap-1 sm:gap-0">
            {content.map((c, idx) => (
              <p
                key={idx}
                className="typography-body1-normal-bold text-label-neutral"
              >
                {c}
              </p>
            ))}
          </main>
        </div>
      </div>
    </PixelCard>
  );
}
