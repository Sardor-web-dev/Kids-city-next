import { getTranslations } from 'next-intl/server';

export default async function AboutSection() {
  const t = await getTranslations('AboutSection');
  const aboutText = t.raw('paragraph');
  return (
    <section
      id="about_us"
      className="flex w-full flex-col items-center justify-between gap-20 lg:flex-row lg:gap-28"
    >
      <div className="flex h-full w-full max-w-2xl flex-col gap-10 text-left lg:w-auto">
        <h2 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl leading-tight">{t('title')}</h2>
        <div className="space-y-7">
          {aboutText.map((paragraph: string, index: any) => (
            <p key={index} className="text-lg leading-loose text-foreground/60 font-light">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full max-w-md lg:max-w-2xl group">
        <img
          className="h-auto w-full rounded-[2.5rem] object-cover shadow-2xl transition-all duration-700 lg:hover:shadow-3xl lg:hover:scale-[1.03]"
          src="https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig"
          alt="Kids City магазин"
        />
      </div>
    </section>
  );
}
