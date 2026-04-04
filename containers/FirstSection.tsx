import { useTranslations } from 'next-intl';

const FirstSection = () => {
  const t = useTranslations('HomePage');

  return (
    <section
      className="relative h-72 sm:h-80 md:h-96 lg:h-[440px] xl:h-[560px] w-full overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-cover bg-center shadow-xl lg:shadow-2xl"
      style={{
        backgroundImage: `url('https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/32 to-black/45" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8">
        <h1 className="text-pretty text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
          {t('title')}
        </h1>
        <p className="max-w-xl sm:max-w-2xl text-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-white font-light leading-relaxed drop-shadow-md">
          {t('description')}
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
