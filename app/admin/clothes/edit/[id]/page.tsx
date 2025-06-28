import EditForm from '@/components/custom/EditForm';
import { prisma } from '@/lib/prisma';

export default async function EditClothPage({ params }: any) {
  const cloth = await prisma.cloth.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!cloth) return <div>Товар не найден</div>;

  return (
    <div className="mx-auto mt-10 max-w-xl">
      <h1 className="mb-4 text-2xl font-bold">Редактировать товар</h1>
      <EditForm cloth={cloth} />
    </div>
  );
}
