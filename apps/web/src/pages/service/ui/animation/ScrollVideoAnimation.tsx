'use client';

import { useRef, useEffect } from 'react';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

import { useMediaQuery } from './hooks';
import { AnimationAbout, AnimationTitle } from './ui';

const ANIMATION_TIMES = {
  CONTENT_1_END: 0.4,
  CONTENT_2_START: 0.4,
  CONTENT_2_END: 0.85,
  FULL_DURATION: [0, 0.6] as [number, number],
};

const ANIMATION_VALUES = {
  CLIP_PATH: {
    INSET_START: 0,
    INSET_END: 80,
    RADIUS_START: 0,
    RADIUS_END: 32,
  },
  DIMMER: {
    OPACITY_START: 0.1,
    OPACITY_END: 0.6,
  },
  CONTENT: {
    Y_START_OUT_BOTTOM: '100%',
    Y_START_OUT_TOP: '-100%',
    Y_CENTER: '0%',
  },
};

const CONFIG = {
  SCROLL_TRACK_CLASS: 'relative h-animation w-full',
  SCROLL_OFFSET: ['start start', 'end end'] as const,
  VIDEO: {
    WEBM: '/assets/videos/dailyalgo-cover.webm',
    MP4: '/assets/videos/dailyalgo-cover.mp4',
    POSTER: '/assets/images/dailyalgo-cover-poster.webp',
  },
  MOBILE_MAX_WIDTH: 640,
  MOBILE_INSET_END: 12,
};

function formatClipPath(values: number[]): string {
  const [latestInset, latestRadius] = values;
  return `inset(${latestInset}px round ${latestRadius}px)`;
}

export default function ScrollVideoAnimation() {
  const isMobile = useMediaQuery(CONFIG.MOBILE_MAX_WIDTH);
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: [...CONFIG.SCROLL_OFFSET],
  });

  const useScrollTransform = <T extends string | number>(
    inputRange: number[],
    outputRange: T[],
  ): MotionValue<T> => {
    return useTransform(scrollYProgress, inputRange, outputRange);
  };

  const endInset = isMobile
    ? CONFIG.MOBILE_INSET_END
    : ANIMATION_VALUES.CLIP_PATH.INSET_END;

  const inset = useScrollTransform(ANIMATION_TIMES.FULL_DURATION, [
    ANIMATION_VALUES.CLIP_PATH.INSET_START,
    endInset,
  ]);

  const radius = useScrollTransform(ANIMATION_TIMES.FULL_DURATION, [
    ANIMATION_VALUES.CLIP_PATH.RADIUS_START,
    ANIMATION_VALUES.CLIP_PATH.RADIUS_END,
  ]);

  const clipPath = useTransform([inset, radius], formatClipPath);

  const dimmerOpacity = useScrollTransform(ANIMATION_TIMES.FULL_DURATION, [
    ANIMATION_VALUES.DIMMER.OPACITY_START,
    ANIMATION_VALUES.DIMMER.OPACITY_END,
  ]);

  const content1InputRange = [0, ANIMATION_TIMES.CONTENT_1_END];

  const content1Y = useScrollTransform(
    content1InputRange,
    isMobile
      ? [ANIMATION_VALUES.CONTENT.Y_CENTER, ANIMATION_VALUES.CONTENT.Y_CENTER]
      : [
          ANIMATION_VALUES.CONTENT.Y_CENTER,
          ANIMATION_VALUES.CONTENT.Y_START_OUT_TOP,
        ],
  );

  const content1Opacity = useScrollTransform(
    content1InputRange,
    isMobile ? [1, 0] : [1, 1],
  );

  const content2InputRange = [
    ANIMATION_TIMES.CONTENT_2_START,
    ANIMATION_TIMES.CONTENT_2_END,
    1,
  ];

  const content2Y = useScrollTransform(
    content2InputRange,
    isMobile
      ? [
          ANIMATION_VALUES.CONTENT.Y_CENTER,
          ANIMATION_VALUES.CONTENT.Y_CENTER,
          ANIMATION_VALUES.CONTENT.Y_CENTER,
        ]
      : [
          ANIMATION_VALUES.CONTENT.Y_START_OUT_BOTTOM,
          ANIMATION_VALUES.CONTENT.Y_CENTER,
          ANIMATION_VALUES.CONTENT.Y_CENTER,
        ],
  );

  const content2Opacity = useScrollTransform(
    content2InputRange,
    isMobile ? [0, 1, 1] : [1, 1, 1],
  );

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch();
    }
  }, []);

  return (
    <div ref={scrollRef} className={CONFIG.SCROLL_TRACK_CLASS}>
      <div className="bg-background-normal-alternative sticky top-0 h-lvh w-full overflow-hidden">
        <motion.div style={{ clipPath }} className="absolute inset-0 z-10">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted={true}
            loop={true}
            playsInline={true}
            poster={CONFIG.VIDEO.POSTER}
            preload="metadata"
          >
            <source src={CONFIG.VIDEO.WEBM} type="video/webm" />
            <source src={CONFIG.VIDEO.MP4} type="video/mp4" />
          </video>

          <motion.div
            style={{ opacity: dimmerOpacity }}
            className="absolute inset-0 z-10 bg-black"
          />

          <motion.div
            style={{ y: content1Y, opacity: content1Opacity, translateZ: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center will-change-transform"
          >
            <AnimationTitle />
          </motion.div>

          <motion.div
            style={{ y: content2Y, opacity: content2Opacity, translateZ: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center will-change-transform"
          >
            <AnimationAbout />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
