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
      <div className="mb-16 flex flex-col gap-4 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">{t('title')}</h2>
        <p className="text-lg text-foreground/55 md:text-xl font-light">{t('description')}</p>
      </div>

      <div className="grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((adv, idx) => {
          const Icon = adv.icon;
          return (
            <div
              key={idx}
              className="group flex flex-col items-start gap-6 rounded-3xl border border-border/40 bg-card p-10 transition-all duration-500 hover:border-primary/60 hover:shadow-xl hover:bg-primary/2"
            >
              <div className="rounded-2xl bg-primary/8 p-5 transition-all duration-300 group-hover:bg-primary/15">
                <Icon size={48} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{adv.title}</h3>
                <p className="text-base leading-relaxed text-foreground/60">{adv.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
