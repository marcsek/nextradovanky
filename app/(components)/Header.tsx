import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
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
        <h1 style={{ margin: '0' }}>Header</h1>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/movies">Movies</NavLink>
      </nav>
    </header>
  );
};

export default Header;
