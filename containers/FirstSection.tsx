import { useTranslations } from "next-intl";
import Image from "next/image";

const FirstSection = () => {
  const t = useTranslations("HomePage");

  return (
    <section
      className="rounded-2xl w-full h-150 bg-cover"
      style={{
        backgroundImage: `url('https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig')`,
      }}
    >
      <div className="flex p-4 flex-col items-center justify-center w-full h-full gap-10">
        <h1 className="text-white font-bold text-2xl lg:text-5xl text-center">
          {t("title")}
        </h1>
        <span className="text-white max-w-[1000px] font-bold text-lg lg:text-2xl text-center">
          {t("description")}
        </span>
      </div>
    </section>
  );
};

export default FirstSection;
