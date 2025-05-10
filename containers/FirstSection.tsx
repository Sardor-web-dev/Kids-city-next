"use client"

import { useTranslations } from "next-intl";

const FirstSection = () => {
  const t = useTranslations("HomePage");

  return (
    <>
      <div className="bg-[url('https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig')] rounded-2xl w-full h-150 bg-cover">
        <div className="flex p-4 flex-col items-center justify-center w-full h-full gap-10">
          <p className="text-white font-bold text-2xl lg:text-5xl text-center">
            {t("title")}
          </p>
          <span className="text-white max-w-[1000px] font-bold text-lg lg:text-2xl text-center">
            {t("description")}
          </span>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
