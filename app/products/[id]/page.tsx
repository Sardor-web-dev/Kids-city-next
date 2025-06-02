import AnimatedProductPage from "@/components/animations/AnimatedProductPage";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: any }) {
  const id = Number(params.id);

  if (isNaN(id)) return notFound();

  const cloth = await prisma.cloth.findUnique({
    where: { id },
  });

  if (!cloth) return notFound();

  return (
    <AnimatedProductPage cloth={cloth}/>
  );
}
