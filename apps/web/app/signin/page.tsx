'use client';

import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem', gap: '1rem' }}>
      <h1>Sign in to Learning OAuth</h1>
      <button onClick={() => signIn('google', { callbackUrl: '/' })}>
        Sign in with Google
      </button>
      <button onClick={() => signIn('azure-ad', { callbackUrl: '/' })}>
        Sign in with Microsoft
      </button>
    </main>
  );
}
