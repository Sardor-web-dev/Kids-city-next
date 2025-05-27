import EditForm from "@/components/custom/EditForm";
import { prisma } from "@/lib/prisma";

export default async function EditClothPage({
  params,
}: {
  params: { id: string };
}) {
  const cloth = await prisma.cloth.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!cloth) return <div>Товар не найден</div>;

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Редактировать товар</h1>
      <EditForm cloth={cloth} />
    </div>
  );
}
