import React from 'react';
import Header from './(components)/Header';
import '../styles/globals.css';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import AuthProviders from './AuthProviders';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await unstable_getServerSession(authOptions);

  return (
    <html>
      <body
        style={{
          margin: '0',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <AuthProviders session={session}>
          {/* @ts-ignore */}
          <Header />
          <div style={{ backgroundColor: '#303030', flexGrow: '1', color: 'white' }}>{children}</div>
        </AuthProviders>
      </body>
    </html>
  );
};

export default Layout;
