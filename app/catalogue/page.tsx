import prisma from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import AnimatedCatalogue from "@/components/animations/AnimatedCatalogue";

type Props = {
  searchParams: Promise<{ gender?: string }>;
};

export default async function Catalogue({ searchParams }: Props) {
  const params = await searchParams;
  const gender = params.gender;

  const t = await getTranslations("Catalogue");

  let clothes;

  if (!gender) {
    // Если пол не указан — показать всё
    clothes = await prisma.cloth.findMany();
  } else if (["boy", "girl"].includes(gender)) {
    clothes = await prisma.cloth.findMany({
      where: { gender },
    });
  } else {
    // Неверный параметр пола — 404
    return notFound();
  }

  return (
    <AnimatedCatalogue
      title={t("title")}
      description={t("description")}
      clothes={clothes}
      gender={gender}
    />
  );
}
