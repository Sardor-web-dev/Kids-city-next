import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
type Props = {
  params: {
    id: string; 
  };
};

export default async function ProductPage({ params }: Props) {
  const id = Number(params.id);

  if (isNaN(id)) return notFound(); 

  const cloth = await prisma.cloth.findUnique({
    where: { id },
  });

  if (!cloth) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <img
        src={cloth.Image}
        alt={cloth.name}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{cloth.name}</h1>
      <p className="text-gray-600 mb-4">{cloth.description}</p>
    </div>
  );
}
