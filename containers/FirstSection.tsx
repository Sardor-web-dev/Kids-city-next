import { useTranslations } from 'next-intl';

const FirstSection = () => {
  const t = useTranslations('HomePage');

  return (
    <section
      className="relative h-96 w-full overflow-hidden rounded-3xl bg-cover bg-center md:h-[420px] lg:h-[520px]"
      style={{
        backgroundImage: `url('https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-primary/40" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 p-6 md:gap-8">
        <h1 className="text-pretty text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight">
          {t('title')}
        </h1>
        <p className="max-w-3xl text-center text-lg text-white/90 md:text-xl font-light leading-relaxed">
          {t('description')}
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
