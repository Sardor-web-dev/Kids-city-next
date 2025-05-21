import AnimatedCatalogue from "@/components/animations/AnimatedCatalogue";
import prisma from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = {
  searchParams: {
    gender?: string;
  };
};

export default async function Catalogue({ searchParams }: Props) {
  const gender = searchParams.gender;
  if (!gender || !["boy", "girl"].includes(gender)) {
    return notFound();
  }

  const clothes = await prisma.cloth.findMany({
    where: { gender },
  });

  const t = await getTranslations("Catalogue");

  return (
    <AnimatedCatalogue
      title={t("title")}
      description={t("description")}
      clothes={clothes}
    />
  );
}
