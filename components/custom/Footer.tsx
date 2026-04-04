'use client';

import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer
      id="contacts"
      className="mx-auto mt-32 w-full bg-gradient-to-b from-primary/3 to-primary/8 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1250px] px-4">
        <div className="mb-20 grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div>
            <h3 className="mb-8 text-3xl font-bold text-foreground">{t('title')}</h3>
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 rounded-full bg-primary/10 p-2.5">
                  <FaPhoneAlt size={16} className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50">{t('phone')}</p>
                  <Link href="tel:+998973970034" className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300">
                    +998 97 397 00 34
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 rounded-full bg-primary/10 p-2.5">
                  <FaLocationArrow size={16} className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50">{t('adress')}</p>
                  <p className="text-lg font-semibold text-foreground">Самарканд</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-xl font-bold text-foreground">Социальные сети</h4>
            <div className="space-y-4">
              <Link
                className="group flex items-center gap-4 py-2 text-foreground/60 transition-all duration-300 hover:text-primary"
                href="https://www.instagram.com/kids_city_sam/"
                target="_blank"
              >
                <span className="rounded-full bg-primary/10 p-2.5 transition-all duration-300 group-hover:bg-primary/20">
                  <FaInstagram size={18} className="text-primary" />
                </span>
                <span className="font-medium">@kids_city_sam</span>
              </Link>
              <Link
                className="group flex items-center gap-4 py-2 text-foreground/60 transition-all duration-300 hover:text-primary"
                href="https://t.me/kids_city_sam"
                target="_blank"
              >
                <span className="rounded-full bg-primary/10 p-2.5 transition-all duration-300 group-hover:bg-primary/20">
                  <BsTelegram size={18} className="text-primary" />
                </span>
                <span className="font-medium">t.me/kids_city_sam</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-xl font-bold text-foreground">О магазине</h4>
            <p className="leading-relaxed text-foreground/60 text-base">
              Kids City – премиум магазин детской одежды с лучшей коллекцией для мальчиков и девочек. Мы предлагаем качество, стиль и комфорт для ваших детей.
            </p>
          </div>
        </div>

        <div className="mb-16 h-80 overflow-hidden rounded-[2.5rem] shadow-lg">
          <iframe
            className="h-full w-full border-none"
            src="https://yandex.uz/map-widget/v1/?display-text=kids%20city&ll=66.964099%2C39.661719&mode=search&oid=157073967785&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXHjFvNzvlBAETEnaJPD00NAEhIJJGO1%2BX8dJ0ARe8A8ZMqHE0AiBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9ARx8XCjCAQapldqSyQSCAglraWRzIGNpdHmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=66.964099%2C39.661719&sspn=0.000705%2C0.000298&text=kids%20city&z=21"
            allowFullScreen
          ></iframe>
        </div>

        <div className="border-t border-border/30 pt-10">
          <p className="text-center text-sm font-medium text-foreground/40">
            © 2024 Kids City. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
