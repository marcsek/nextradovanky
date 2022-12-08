import React from 'react';
import NavLink from './NavLink';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import Image from 'next/image';
import Link from 'next/link';

const Header = async () => {
  const session = await unstable_getServerSession(authOptions);

  return (
    <header>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          backgroundColor: '#232323',
          color: 'white',
          padding: '1.5rem 2rem',
        }}
      >
        {session ? (
          <Link style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} href="/auth/login">
            <Image style={{ borderRadius: '50%' }} src={session?.user?.image ?? ''} alt={'profile picture'} height={25} width={25}></Image>
            <h1 style={{ margin: '0' }}>{session ? session.user?.name : 'Header'}</h1>
          </Link>
        ) : (
          <h1 style={{ margin: '0' }}>Header</h1>
        )}
        <NavLink href="/">Home</NavLink>
        <NavLink href="/movies">Movies</NavLink>
      </nav>
    </header>
  );
};

export default Header;
