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
      className="mx-auto mt-16 flex w-full max-w-[1250px] flex-col items-center gap-8 rounded-3xl bg-gradient-to-br from-primary via-primary to-accent px-4 py-12 text-primary-foreground md:py-16"
    >
      <h2 className="text-center text-3xl font-bold md:text-4xl">{t('title')}</h2>

      <div className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaPhoneAlt size={20} className="mt-1 flex-shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="font-medium">{t('phone')}</span>
              <Link href="tel:+998973970034" className="font-semibold opacity-90 transition-opacity hover:opacity-100">
                +998 97 397 00 34
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaLocationArrow size={20} className="mt-1 flex-shrink-0" />
            <span className="font-medium">{t('adress')}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaInstagram size={20} className="mt-1 flex-shrink-0" />
            <Link
              className="font-semibold opacity-90 transition-opacity hover:opacity-100"
              href="https://www.instagram.com/kids_city_sam/"
              target="_blank"
            >
              Instagram: @kids_city_sam
            </Link>
          </div>
          <div className="flex items-start gap-3">
            <BsTelegram size={20} className="mt-1 flex-shrink-0" />
            <Link
              className="font-semibold opacity-90 transition-opacity hover:opacity-100"
              href="https://t.me/kids_city_sam"
              target="_blank"
            >
              Telegram: t.me/kids_city_sam
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 w-full">
        <iframe
          className="h-80 w-full rounded-2xl border-none"
          src="https://yandex.uz/map-widget/v1/?display-text=kids%20city&ll=66.964099%2C39.661719&mode=search&oid=157073967785&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXHjFvNzvlBAETEnaJPD00NAEhIJJGO1%2BX8dJ0ARe8A8ZMqHE0AiBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9ARx8XCjCAQapldqSyQSCAglraWRzIGNpdHmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=66.964099%2C39.661719&sspn=0.000705%2C0.000298&text=kids%20city&z=21"
          allowFullScreen
        ></iframe>
      </div>
    </footer>
  );
}
