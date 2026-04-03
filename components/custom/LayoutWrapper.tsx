'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Header from './Header';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const inAdmin = pathname.startsWith('/admin');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {!inAdmin && <Header />}
      <main className="flex flex-1 flex-col">
        {children}
      </main>
      {!inAdmin && <Footer />}
    </div>
  );
}
