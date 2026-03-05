export { default } from 'next-auth/middleware';

export const config = {
  // Protect all routes except sign-in page, auth API, and static assets
  matcher: ['/((?!signin|api/auth|_next/static|_next/image|favicon.ico).*)'],
};
