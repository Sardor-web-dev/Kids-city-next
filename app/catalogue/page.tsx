import prisma from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import AnimatedCatalogue from "@/components/animations/AnimatedCatalogue";

type Props = {
  searchParams: Promise<{ gender?: string }>; // Promise, так как Next.js требует
};

export default async function Catalogue({ searchParams }: Props) {
  const params = await searchParams; // ждем объект параметров
  const gender = params.gender;

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
