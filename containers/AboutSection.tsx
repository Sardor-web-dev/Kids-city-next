import { getTranslations } from 'next-intl/server';

export default async function AboutSection() {
  const t = await getTranslations('AboutSection');
  const aboutText = t.raw('paragraph');
  return (
    <section
      id="about_us"
      className="mt-20 flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16"
    >
      <div className="flex h-full w-full max-w-xl flex-col gap-6 text-left lg:w-auto">
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-left">{t('title')}</h2>
        <div className="space-y-4">
          {aboutText.map((paragraph: string, index: any) => (
            <p key={index} className="text-base leading-relaxed text-foreground/80">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full max-w-md lg:max-w-lg">
        <img
          className="h-auto w-full rounded-3xl object-cover shadow-xl transition-transform duration-300 lg:hover:scale-105"
          src="https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig"
          alt="Kids City магазин"
        />
      </div>
    </section>
  );
}
