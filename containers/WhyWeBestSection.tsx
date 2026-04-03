import { getTranslations } from 'next-intl/server';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { GiClothes } from 'react-icons/gi';

const icons = [GiClothes, TbTruckDelivery, RiDiscountPercentFill];

export default async function WhyWeBestSection() {
  const t = await getTranslations('WhyBestSection');

  const advantages = [
    {
      icon: icons[0],
      title: t('firstFactor.name'),
      description: t('firstFactor.cause'),
    },
    {
      icon: icons[1],
      title: t('secondFactor.name'),
      description: t('secondFactor.cause'),
    },
    {
      icon: icons[2],
      title: t('thirdFactor.name'),
      description: t('thirdFactor.cause'),
    },
  ];

  return (
    <div id="why_best" className="mt-20 flex w-full flex-col items-center justify-center px-4">
      <div className="mb-12 flex flex-col gap-3 text-center">
        <h2 className="text-pretty text-3xl font-bold md:text-4xl">{t('title')}</h2>
        <p className="text-lg font-medium text-foreground/70 md:text-xl">{t('description')}</p>
      </div>

      <div className="grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {advantages.map((adv, idx) => {
          const Icon = adv.icon;
          return (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center gap-6 rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:scale-105"
            >
              <div className="rounded-2xl bg-primary/10 p-6 transition-all duration-300 group-hover:bg-primary/20">
                <Icon size={56} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{adv.title}</h3>
              <p className="text-base leading-relaxed text-foreground/70">{adv.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
