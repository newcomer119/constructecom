import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import logo from '@/assets/logo.png';

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" width={230} height={48} />
    </Link>
  );
};

export default Logo;