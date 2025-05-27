import DeleteBtn from "@/components/custom/DeleteBtn";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Clothes() {
  const clohes = await prisma.cloth.findMany();
  return (
    <>
      <div className="grid gap-10 max-w-[1250px] mx-auto grid-cols-4">
        {clohes.map((cloth) => (
          <div
            key={cloth.id}
            className="border-1 w-[300px] h-[400px] border-black flex flex-col items-center justify-center rounded-lg "
          >
            <img
              src={cloth.Image}
              alt={cloth.name}
              className="w-50 h-50 object-cover mb-2"
            />
            <h2 className="text-xl font-bold">{cloth.name}</h2>
            <p className="text-gray-600">{cloth.description}</p>
            <p className="text-lg font-semibold mt-2">
              {cloth.price.toLocaleString()} сум
            </p>
            <div className="flex items-center gap-2 mt-5">
              <DeleteBtn id={cloth.id} />
              <Link href={`/admin/clothes/edit/${cloth.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                  Изменить
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
