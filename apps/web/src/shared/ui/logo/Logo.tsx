import Image from 'next/image';

type LogoProps = {
  width: number;
  height: number;
  className?: string;
};

const LOGO_SRC = '/assets/images/logo-company.svg';
const LOGO_ALT = 'Our Company Logo';

export function Logo({ width, height, className }: LogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={width}
      height={height}
      className={className}
    />
  );
}

/**
 How To Use
 
  import { Logo } from '@/shared';
 
  function foo(){
    return (
      <Logo
        width={242}
        height={40}
        className="h-auto" // optional
      />
    )
  }
 * 
 */
