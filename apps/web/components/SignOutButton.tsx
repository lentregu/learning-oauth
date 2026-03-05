'use client';

import { signOut, useSession } from 'next-auth/react';

export default function SignOutButton() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <button onClick={() => signOut({ callbackUrl: '/signin' })}>
      Sign out ({session.user?.name ?? session.user?.email})
    </button>
  );
}
