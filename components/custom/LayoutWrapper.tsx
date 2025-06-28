'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Header from './Header';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const inAdmin = pathname.startsWith('/admin');

  return (
    <>
      <div>
        <section className="pr-2 pl-2">
          {!inAdmin && <Header />}
          {children}
          {!inAdmin && <Footer />}
        </section>
      </div>
    </>
  );
}
