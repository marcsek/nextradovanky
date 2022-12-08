'use client';

import { SessionProvider } from 'next-auth/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AuthProviders({ children, session }: { children: React.ReactNode; session: any }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
