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
      <div className="mb-10 flex flex-col gap-2 text-center">
        <p className="text-4xl font-bold">{t('title')}</p>
        <span className="text-2xl font-medium">{t('description')}</span>
      </div>

      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-10 lg:flex-row">
        {advantages.map((adv, idx) => {
          const Icon = adv.icon;
          return (
            <div
              key={idx}
              className="flex max-w-sm cursor-pointer flex-col items-center justify-center gap-4 text-center transition-all hover:scale-105"
            >
              <Icon size={120} />
              <h3 className="text-xl font-semibold">{adv.title}</h3>
              <span className="text-muted-foreground text-lg">{adv.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
