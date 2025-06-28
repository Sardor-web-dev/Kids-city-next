import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/custom/SessionProvider';
import { Toaster } from '@/components/ui/sonner';
import Header from '../../components/custom/AdminHeader';
import Footer from '@/components/custom/Footer';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const session = await getServerSession();
  return (
    <SessionProvider session={session}>
      <NextIntlClientProvider locale={locale}>
        <section className="pr-2 pl-2">
          <Header />
          {children}
          <Toaster />
          <Footer />
        </section>
      </NextIntlClientProvider>
    </SessionProvider>
  );
}
