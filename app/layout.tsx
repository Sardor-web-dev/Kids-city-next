import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/custom/SessionProvider";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import Script from "next/script";
import { CartProvider } from "@/contexts/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const ogImage = `https://kidscity.uz/logo.png`;

  return {
    title: "Kids City",
    description: "Лучший магазин детской одежды в Самарканде",
    keywords:
      "детская одежда Самарканд, детская мода, вещи для девочек, мальчиков, магазин детской одежды, kids city, детские платья, костюмы, одежда 0-10 лет",
    openGraph: {
      title: "Детская одежда в Самарканде — Kids City",
      description:
        "Качественная детская одежда для девочек и мальчиков. Быстрая доставка по Самарканду.",
      type: "website",
      siteName: "Kids City",
      url: "https://www.kidscity.uz",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Kids City logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Лучшая детская одежда в Самарканде - Kids City",
      description:
        "Магазин детской одежды в Самарканде. Модные вещи для мальчиков и девочек.",
      site: "@kidscity",
      images: [ogImage],
    },
  };
}

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
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.kidscity.uz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Yandex.Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],
            k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(101778849, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Yandex.Metrika noscript fallback */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/101778849"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        <SessionProvider session={session}>
          <NextIntlClientProvider locale={locale}>
            <CartProvider>
              <section className="pl-2 pr-2 ">
                <Header />
                {children}
                <Footer />
              </section>
            </CartProvider>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
