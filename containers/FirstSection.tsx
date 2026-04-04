import { useTranslations } from 'next-intl';

const FirstSection = () => {
  const t = useTranslations('HomePage');

  return (
    <section
      className="relative h-96 w-full overflow-hidden rounded-[2.5rem] bg-cover bg-center md:h-[440px] lg:h-[560px] shadow-2xl"
      style={{
        backgroundImage: `url('https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/45" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 p-6 md:gap-8 lg:gap-10">
        <h1 className="text-pretty text-center text-5xl font-bold text-white md:text-6xl lg:text-7xl tracking-tight leading-tight">
          {t('title')}
        </h1>
        <p className="max-w-2xl text-center text-lg text-white/85 md:text-xl lg:text-2xl font-light leading-relaxed">
          {t('description')}
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
