import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/custom/SessionProvider";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kids City",
  description: "Лучший магазин детской одежды в Самарканде - Kids City",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const session = await getServerSession();
  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="0p3dzVZBftt1SfcmFS_eusWN86qGivUV6xhcrVR_x6s"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider session={session}>
          <NextIntlClientProvider locale={locale}>
            <section className="pl-2 pr-2 ">
              <Header />
              {children}
              <Footer />
            </section>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
