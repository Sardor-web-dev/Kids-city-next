import { getTranslations } from 'next-intl/server';

export default async function AboutSection() {
  const t = await getTranslations('AboutSection');
  const aboutText = t.raw('paragraph');
  return (
    <section
      id="about_us"
      className="mt-20 flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between"
    >
      <div className="flex h-full max-w-[500px] flex-col gap-5 text-left">
        <h2 className="text-center text-2xl font-bold">{t('title')}</h2>
        {aboutText.map((paragraph: string, index: any) => (
          <p key={index} className="text-start text-base leading-relaxed font-medium">
            {paragraph}
          </p>
        ))}
      </div>
      <img
        className="h-[450px] rounded-2xl transition-transform duration-300 lg:hover:scale-105"
        src="https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig"
        alt="Наш магазин"
      />
    </section>
  );
}
