"use client";
import { useTranslations } from "next-intl";

const NotFound = () => {
  const t = useTranslations("404");
  return (
    <>
      <div className="max-w-[1250px] mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg text-gray-600">{t("description")}</p>
        <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">
          {t("button")}
        </a>
      </div>
    </>
  );
};

export default NotFound;
