import { getTranslations } from "next-intl/server";

export default async function AboutSection() {
  const t = await getTranslations("AboutSection");
  const aboutText = t.raw("paragraph");
  return (
    <section
      id="about_us"
      className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-[50px] px-4"
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
        className="h-[500px] lg:hover:scale-105 transition-transform duration-300 rounded-2xl"
        src="/shop.png"
        alt="Наш магазин"
      />
    </section>
  );
}
