import { useTranslations } from 'next-intl';

const FirstSection = () => {
  const t = useTranslations('HomePage');

  return (
    <section
      className="h-150 w-full rounded-2xl bg-cover"
      style={{
        backgroundImage: `url('https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig')`,
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-4">
        <h1 className="text-center text-2xl font-bold text-white lg:text-5xl">{t('title')}</h1>
        <span className="max-w-[1000px] text-center text-lg font-bold text-white lg:text-2xl">
          {t('description')}
        </span>
      </div>
    </section>
  );
};

export default FirstSection;
