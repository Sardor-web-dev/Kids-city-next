import { getTranslations } from "next-intl/server";

export default async function AboutSection() {
  const t = await getTranslations("AboutSection");
  const aboutText = t.raw("paragraph");
  return (
    <section
      id="about_us"
      className="mt-20 w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:justify-between"
    >
      <div className="text-left max-w-[500px] h-full flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-center">{t("title")}</h2>
        {aboutText.map((paragraph: string, index: any) => (
          <p
            key={index}
            className="font-medium text-start text-base leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <img
        className="h-[450px] lg:hover:scale-105 transition-transform duration-300 rounded-2xl"
        src="https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig"
        alt="Наш магазин"
      />
    </section>
  );
}
