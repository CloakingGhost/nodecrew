import { useState, useEffect } from 'react';

export default function useMediaQuery(maxWidth: number): boolean {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${maxWidth}px)`);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMatch(event.matches);
    };

    setIsMatch(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [maxWidth]);

  return isMatch;
}
