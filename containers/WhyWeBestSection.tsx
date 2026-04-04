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
    <div id="why_best" className="flex w-full flex-col items-center justify-center">
      <div className="mb-18 flex flex-col gap-4 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl leading-tight">{t('title')}</h2>
        <p className="text-lg text-foreground/50 md:text-xl font-light">{t('description')}</p>
      </div>

      <div className="grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((adv, idx) => {
          const Icon = adv.icon;
          return (
            <div
              key={idx}
              className="group flex flex-col items-start gap-7 rounded-[2rem] border border-border/20 bg-gradient-to-br from-white to-primary/3 p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:from-white hover:to-primary/5"
            >
              <div className="rounded-[1.25rem] bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
                <Icon size={44} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground mb-3 leading-tight">{adv.title}</h3>
                <p className="text-base leading-relaxed text-foreground/55">{adv.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
