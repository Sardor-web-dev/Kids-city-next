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
      className="mx-auto mt-10 flex w-full max-w-[1250px] flex-col items-center gap-6 rounded-2xl bg-[#9f887e] px-4 py-10 text-white"
    >
      <h2 className="text-3xl font-extrabold">{t('title')}</h2>

      <div className="flex flex-col items-center justify-center gap-10 text-center text-lg font-medium md:flex-row">
        <div className="space-y-2">
          <p className="flex items-center">
            <FaPhoneAlt size={20} className="mr-2 text-2xl" />
            {t('phone')}
            <Link href="tel:+998973970034" className="underline hover:text-gray-200">
              +998 97 397 00 34
            </Link>
          </p>
          <p className="flex items-center">
            <FaLocationArrow size={20} className="mr-2 text-2xl" />
            {t('adress')}
          </p>
        </div>

        <div className="space-y-2">
          <p className="flex items-center">
            <FaInstagram size={20} className="mr-2 text-2xl" />
            <Link
              className="underline hover:text-gray-200"
              href="https://www.instagram.com/kids_city_sam/"
              target="_blank"
            >
              Instagram: @kids_city_sam
            </Link>
          </p>
          <p className="flex items-center">
            <BsTelegram size={20} className="mr-2 text-2xl" />
            <Link
              className="underline hover:text-gray-200"
              href="https://t.me/kids_city_sam"
              target="_blank"
            >
              Telegram: t.me/kids_city_sam
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 w-full">
        <iframe
          className="h-[300px] w-full rounded-md border-none"
          src="https://yandex.uz/map-widget/v1/?display-text=kids%20city&ll=66.964099%2C39.661719&mode=search&oid=157073967785&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXHjFvNzvlBAETEnaJPD00NAEhIJJGO1%2BX8dJ0ARe8A8ZMqHE0AiBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9ARx8XCjCAQapldqSyQSCAglraWRzIGNpdHmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=66.964099%2C39.661719&sspn=0.000705%2C0.000298&text=kids%20city&z=21"
          allowFullScreen
        ></iframe>
      </div>
    </footer>
  );
}
