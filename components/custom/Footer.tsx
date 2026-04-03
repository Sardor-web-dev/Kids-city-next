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
      className="mx-auto mt-24 w-full bg-primary/5 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1250px] px-4">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-foreground">{t('title')}</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaPhoneAlt size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium uppercase tracking-wide text-foreground/60">{t('phone')}</p>
                  <Link href="tel:+998973970034" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                    +998 97 397 00 34
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaLocationArrow size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium uppercase tracking-wide text-foreground/60">{t('adress')}</p>
                  <p className="text-base font-medium text-foreground">Самарканд</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-foreground">Социальные сети</h4>
            <div className="space-y-4">
              <Link
                className="flex items-center gap-3 text-foreground/70 transition-all duration-200 hover:text-primary hover:translate-x-1"
                href="https://www.instagram.com/kids_city_sam/"
                target="_blank"
              >
                <FaInstagram size={20} />
                <span className="text-sm font-medium">@kids_city_sam</span>
              </Link>
              <Link
                className="flex items-center gap-3 text-foreground/70 transition-all duration-200 hover:text-primary hover:translate-x-1"
                href="https://t.me/kids_city_sam"
                target="_blank"
              >
                <BsTelegram size={20} />
                <span className="text-sm font-medium">t.me/kids_city_sam</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-foreground">О магазине</h4>
            <p className="text-sm leading-relaxed text-foreground/70">
              Kids City – это премиум магазин детской одежды с лучшей коллекцией для мальчиков и девочек.
            </p>
          </div>
        </div>

        <div className="mb-12 h-80 overflow-hidden rounded-3xl">
          <iframe
            className="h-full w-full border-none"
            src="https://yandex.uz/map-widget/v1/?display-text=kids%20city&ll=66.964099%2C39.661719&mode=search&oid=157073967785&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXHjFvNzvlBAETEnaJPD00NAEhIJJGO1%2BX8dJ0ARe8A8ZMqHE0AiBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9ARx8XCjCAQapldqSyQSCAglraWRzIGNpdHmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=66.964099%2C39.661719&sspn=0.000705%2C0.000298&text=kids%20city&z=21"
            allowFullScreen
          ></iframe>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-foreground/50">
            © 2024 Kids City. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
