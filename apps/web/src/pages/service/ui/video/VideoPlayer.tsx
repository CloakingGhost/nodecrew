import { useRef, useEffect } from 'react';

type VideoPlayerProps = {
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  className?: string;
  poster?: string;
  preload?: string;
};
const VIDEO = {
  WEBM: '/assets/videos/ai-screen.webm',
  MP4: '/assets/videos/ai-screen.mp4',
  POSTER: '/assets/images/ai-screen-poster.webp',
};
export default function VideoPlayer({
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  className,
  preload = 'metadata',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry?.isIntersecting) {
        if (autoPlay) {
          videoElement.play().catch(error => console.log(error));
        }
      } else {
        videoElement.pause();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.01, // 0.00 ~ 1.00
    });

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
      observer.disconnect();
    };
  }, [autoPlay]);
  return (
    <video
      ref={videoRef}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      className={className}
      poster={VIDEO.POSTER}
      preload={preload}
    >
      <source src={VIDEO.WEBM} type="video/webm" />
      <source src={VIDEO.MP4} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
