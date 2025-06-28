import DeleteBtn from '@/components/custom/DeleteBtn';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function Clothes() {
  const clothes = await prisma.cloth.findMany();

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold">Одежда</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clothes.map(cloth => (
          <div
            key={cloth.id}
            className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-md transition-transform hover:scale-[1.02]"
          >
            <img src={cloth.Image} alt={cloth.name} className="h-[220px] w-full object-cover" />
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <h2 className="mb-1 text-xl font-semibold">{cloth.name}</h2>
                <p className="mb-2 line-clamp-2 text-sm text-gray-600">{cloth.description}</p>
              </div>
              <div className="mt-2">
                <p className="text-lg font-bold text-green-600">
                  {cloth.price.toLocaleString()} сум
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <DeleteBtn id={cloth.id} />
                <Link href={`/admin/clothes/edit/${cloth.id}`}>
                  <button className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700">
                    Изменить
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
