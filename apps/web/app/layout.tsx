import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning OAuth',
  description: 'Learn OAuth 2.0 and OpenID Connect',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
