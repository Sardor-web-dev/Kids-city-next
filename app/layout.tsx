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
        <meta
          property="og:title"
          content="Детская одежда в Самарканде — Kids City"
        />
        <meta
          property="og:description"
          content="Качественная детская одежда для девочек и мальчиков. Быстрая доставка по Самарканду."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kidscity.uz/" />
        <meta property="og:image" content="/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kids City — Детская одежда в Самарканде"
        />
        <meta
          name="twitter:description"
          content="Магазин детской одежды в Самарканде. Модные вещи для мальчиков и девочек."
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
