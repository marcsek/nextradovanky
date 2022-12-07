'use client';

import Link from 'next/link';
import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const segment = useSelectedLayoutSegment();
  const isActive = href === `/${segment ?? ''}`;

  return (
    <Link style={{ color: 'white' }} id={isActive ? 'underline' : ''} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
