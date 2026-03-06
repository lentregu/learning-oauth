'use client';

import { signIn, getProviders } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function SignInPage() {
  const [providers, setProviders] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    const loadProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    loadProviders();
  }, []);

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem', gap: '1rem' }}>
      <h1>Sign in to Learning OAuth</h1>
      {providers?.google && (
        <button onClick={() => signIn('google', { callbackUrl: '/' })}>
          Sign in with Google
        </button>
      )}
      {providers?.['azure-ad'] && (
        <button onClick={() => signIn('azure-ad', { callbackUrl: '/' })}>
          Sign in with Microsoft
        </button>
      )}
    </main>
  );
}
