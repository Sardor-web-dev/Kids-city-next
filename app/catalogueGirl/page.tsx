import ProductCard from "@/components/custom/ProductCard";
import prisma from "@/lib/prisma";
import { cloth } from "@/types/cloth";
import { getTranslations } from "next-intl/server";

export default async function Catalogue() {
  const clothes = await prisma.cloth.findMany({
    where: {
      gender: "girl",
    },
  });
  const t = await getTranslations("Catalogue");
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-16 px-4 md:px-12">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {t("title")}
        </h1>
        <p className="text-lg md:text-2xl text-gray-600">{t("description")}</p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
        {clothes.map((cloth: cloth) => (
          <ProductCard key={cloth.id} cloth={cloth} />
        ))}
      </div>
    </div>
  );
}
