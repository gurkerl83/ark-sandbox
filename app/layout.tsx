import { ReactNode } from 'react';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main
          style={{
            minHeight: '100vh',
            minWidth: '100vw',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
