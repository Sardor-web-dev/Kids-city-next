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
      <div className="mb-10 sm:mb-14 md:mb-16 lg:mb-18 flex flex-col gap-3 sm:gap-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">{t('title')}</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/50 font-light">{t('description')}</p>
      </div>

      <div className="grid w-full max-w-7xl gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((adv, idx) => {
          const Icon = adv.icon;
          return (
            <div
              key={idx}
              className="group flex flex-col items-start gap-5 sm:gap-6 rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-border/20 bg-gradient-to-br from-white to-primary/3 p-5 sm:p-7 md:p-8 lg:p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-xl lg:hover:shadow-2xl hover:from-white hover:to-primary/5"
            >
              <div className="rounded-lg sm:rounded-xl lg:rounded-[1.25rem] bg-primary/10 p-3 sm:p-4 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
                <Icon size={32} className="text-primary sm:w-11 sm:h-11" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-2 sm:mb-3 leading-tight">{adv.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed text-foreground/55">{adv.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
