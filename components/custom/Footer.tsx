"use client";

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer
      id="contacts"
      className="rounded-2xl w-full max-w-[1250px] mx-auto mt-10 bg-[#9f887e] text-white py-10 px-4 flex flex-col items-center gap-6"
    >
      <h2 className="text-3xl font-extrabold">{t("title")}</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center text-lg font-medium">
        <div className="space-y-2">
          <p className="flex items-center">
            <FaPhoneAlt size={20} className="text-2xl mr-2" />
            {t("phone")}
            <Link
              href="tel:+998973970034"
              className="underline hover:text-gray-200"
            >
              +998 97 397 00 34
            </Link>
          </p>
          <p className="flex items-center">
            <FaLocationArrow size={20} className="text-2xl mr-2" />
            {t("adress")}
          </p>
        </div>

        <div className="space-y-2">
          <p className="flex items-center">
            <FaInstagram size={20} className="text-2xl mr-2" />
            <Link
              className="underline hover:text-gray-200"
              href="https://www.instagram.com/kids_city_sam/"
              target="_blank"
            >
              Instagram: @kids_city_sam
            </Link>
          </p>
          <p className="flex items-center">
            <BsTelegram size={20} className="text-2xl mr-2" />
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

      <div className="w-full mt-8">
        <iframe
          className="w-full h-[300px] rounded-md border-none"
          src="https://yandex.uz/map-widget/v1/?display-text=kids%20city&ll=66.964099%2C39.661719&mode=search&oid=157073967785&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXHjFvNzvlBAETEnaJPD00NAEhIJJGO1%2BX8dJ0ARe8A8ZMqHE0AiBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9ARx8XCjCAQapldqSyQSCAglraWRzIGNpdHmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=66.964099%2C39.661719&sspn=0.000705%2C0.000298&text=kids%20city&z=21"
          allowFullScreen
        ></iframe>
      </div>
    </footer>
  );
}
