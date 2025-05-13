import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: any }) {
  const t = await getTranslations("Catalogue");
  const id = Number(params.id);

  if (isNaN(id)) return notFound();

  const cloth = await prisma.cloth.findUnique({
    where: { id },
  });

  if (!cloth) return notFound();

  return (
    <>
      <div className="max-w-3xl mx-auto py-12 px-4">
        <img
          src={cloth.Image}
          alt={cloth.name}
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{cloth.name}</h1>
        <Button>{t("button")}</Button>
      </div>
    </>
  );
}
