import Overview from "@/components/custom/Overview";
import { getTranslations } from "next-intl/server";

export default async function ProductSection() {
  const t = await getTranslations("HomePage");
  const t2 = await getTranslations("OverviewComponent");
  const categories = [
    {
      img: "/clothes.jpg",
      text: t2("boy"),
      location: "/catalogue?gender=boy",
    },
    {
      img: "/paijamas.jpg",
      text: t2("girl"),
      location: "/catalogue?gender=girl",
    },
  ];
  return (
    <div
      id="clothes"
      className="flex flex-col h-full items-center justify-center gap-10 mt-12"
    >
      <div className="text-center flex flex-col gap-3">
        <p className="text-4xl font-bold">{t("ourproducts")}</p>
        <span className="text-2xl font-normal">{t("desc")}</span>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row items-center justify-center lg:gap-10">
        {categories.map((item, i) => (
          <Overview key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
