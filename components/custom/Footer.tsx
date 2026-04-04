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
      className="mx-auto mt-16 sm:mt-24 lg:mt-32 w-full bg-gradient-to-b from-primary/3 to-primary/8 py-12 sm:py-16 md:py-20 lg:py-24 pb-20 sm:pb-12"
    >
      <div className="mx-auto max-w-[1250px] px-3 sm:px-4">
        <div className="mb-12 sm:mb-16 lg:mb-20 grid grid-cols-1 gap-10 sm:gap-12 md:gap-16 lg:grid-cols-3">
          <div>
            <h3 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-foreground">{t('title')}</h3>
            <div className="space-y-5 sm:space-y-6 md:space-y-7">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 flex-shrink-0 rounded-full bg-primary/10 p-2">
                  <FaPhoneAlt size={14} className="text-primary sm:w-4 sm:h-4" />
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50">{t('phone')}</p>
                  <Link href="tel:+998973970034" className="text-sm sm:text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300">
                    +998 97 397 00 34
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 flex-shrink-0 rounded-full bg-primary/10 p-2">
                  <FaLocationArrow size={14} className="text-primary sm:w-4 sm:h-4" />
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50">{t('adress')}</p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground">Самарканд</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 sm:mb-8 text-lg sm:text-xl font-bold text-foreground">Социальные сети</h4>
            <div className="space-y-3 sm:space-y-4">
              <Link
                className="group flex items-center gap-3 sm:gap-4 py-2 text-foreground/60 transition-all duration-300 hover:text-primary"
                href="https://www.instagram.com/kids_city_sam/"
                target="_blank"
              >
                <span className="rounded-full bg-primary/10 p-2 sm:p-2.5 transition-all duration-300 group-hover:bg-primary/20">
                  <FaInstagram size={16} className="text-primary sm:w-4.5 sm:h-4.5" />
                </span>
                <span className="text-sm sm:text-base font-medium">@kids_city_sam</span>
              </Link>
              <Link
                className="group flex items-center gap-3 sm:gap-4 py-2 text-foreground/60 transition-all duration-300 hover:text-primary"
                href="https://t.me/kids_city_sam"
                target="_blank"
              >
                <span className="rounded-full bg-primary/10 p-2 sm:p-2.5 transition-all duration-300 group-hover:bg-primary/20">
                  <BsTelegram size={16} className="text-primary sm:w-4.5 sm:h-4.5" />
                </span>
                <span className="text-sm sm:text-base font-medium">t.me/kids_city_sam</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-6 sm:mb-8 text-lg sm:text-xl font-bold text-foreground">О магазине</h4>
            <p className="leading-relaxed text-foreground/60 text-xs sm:text-sm md:text-base">
              Kids City – премиум магазин детской одежды с лучшей коллекцией для мальчиков и девочек. Мы предлагаем качество, стиль и комфорт для ваших детей.
            </p>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 h-60 sm:h-72 md:h-80 overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] shadow-lg">
          <iframe
            className="h-full w-full border-none"
            src="https://yandex.uz/map-widget/v1/?display-text=kids%20city&ll=66.964099%2C39.661719&mode=search&oid=157073967785&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXHjFvNzvlBAETEnaJPD00NAEhIJJGO1%2BX8dJ0ARe8A8ZMqHE0AiBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9ARx8XCjCAQapldqSyQSCAglraWRzIGNpdHmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=66.964099%2C39.661719&sspn=0.000705%2C0.000298&text=kids%20city&z=21"
            allowFullScreen
          ></iframe>
        </div>

        <div className="border-t border-border/30 pt-8 sm:pt-10">
          <p className="text-center text-xs sm:text-sm font-medium text-foreground/40">
            © 2024 Kids City. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
