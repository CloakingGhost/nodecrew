import Image from 'next/image';

type Props = {
  width: number;
  height: number;
  className?: string;
};

function Logo({ width, height, className }: Props) {
  const logo = '/assets/images/logo-company.svg';
  const alt = 'Our Company Logo';

  return (
    <Image
      src={logo}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}

export default Logo;

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
