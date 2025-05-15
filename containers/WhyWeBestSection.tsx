import { getTranslations } from "next-intl/server";
import { RiDiscountPercentFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";

const icons = [GiClothes, TbTruckDelivery, RiDiscountPercentFill];

export default async function WhyWeBestSection() {
  const t = await getTranslations("WhyBestSection");

  const advantages = [
    {
      icon: icons[0],
      title: t("firstFactor.name"),
      description: t("firstFactor.cause"),
    },
    {
      icon: icons[1],
      title: t("secondFactor.name"),
      description: t("secondFactor.cause"),
    },
    {
      icon: icons[2],
      title: t("thirdFactor.name"),
      description: t("thirdFactor.cause"),
    },
  ];

  return (
    <div
      id="why_best"
      className="flex flex-col w-full items-center justify-center mt-20 px-4"
    >
      <div className="flex flex-col gap-2 text-center mb-10">
        <p className="text-4xl font-bold">{t("title")}</p>
        <span className="text-2xl font-medium">{t("description")}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full max-w-7xl">
        {advantages.map((adv, idx) => {
          const Icon = adv.icon;
          return (
            <div
              key={idx}
              className="flex hover:scale-105 transition-all cursor-pointer flex-col items-center justify-center gap-4 text-center max-w-sm"
            >
              <Icon size={120} />
              <h3 className="text-xl font-semibold">{adv.title}</h3>
              <span className="text-lg text-muted-foreground">
                {adv.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
