import { useTranslations } from 'next-intl';

const FirstSection = () => {
  const t = useTranslations('HomePage');

  return (
    <section
      className="relative h-80 w-full overflow-hidden rounded-3xl bg-cover bg-center md:h-96 lg:h-[500px]"
      style={{
        backgroundImage: `url('https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 p-4 md:gap-8">
        <h1 className="text-pretty text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {t('title')}
        </h1>
        <p className="max-w-2xl text-center text-lg font-medium text-white/95 md:text-xl lg:text-2xl">
          {t('description')}
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
