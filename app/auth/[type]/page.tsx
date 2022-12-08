'use client';

import React from 'react';
import { signIn, signOut } from 'next-auth/react';

const LoginPage = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Log in</button>
      <button onClick={() => signOut()}>sign out</button>
    </div>
  );
};

export default LoginPage;
