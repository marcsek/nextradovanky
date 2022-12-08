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
      <body className="m-0 flex flex-col h-screen">
        <AuthProviders session={session}>
          {/* @ts-ignore */}
          <Header />
          <div className="flex-grow bg-zinc-900 text-neutral-50">{children}</div>
        </AuthProviders>
      </body>
    </html>
  );
};

export default Layout;
