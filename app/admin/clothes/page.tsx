import DeleteBtn from "@/components/custom/DeleteBtn";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Clothes() {
  const clothes = await prisma.cloth.findMany();

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Одежда</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clothes.map((cloth) => (
          <div
            key={cloth.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col justify-between transition-transform hover:scale-[1.02]"
          >
            <img
              src={cloth.Image}
              alt={cloth.name}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1">{cloth.name}</h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {cloth.description}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-lg font-bold text-green-600">
                  {cloth.price.toLocaleString()} сум
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <DeleteBtn id={cloth.id} />
                <Link href={`/admin/clothes/edit/${cloth.id}`}>
                  <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition">
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
