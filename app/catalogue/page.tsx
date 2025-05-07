import prisma from "@/lib/prisma";

export default async function Admin() {
  const clothes = await prisma.cloth.findMany();

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-12">
      <div className="text-center flex flex-col gap-3">
        <p className="text-4xl font-bold">Наши товары</p>
        <span className="text-2xl font-normal">
          Самая лучшая и высококачественная детская одежда в Самарканде!
        </span>
      </div>
      <div className="flex items-center justify-center gap-10">
        {clothes.map((cloth: any) => (
          <div
            key={cloth.id}
            className="flex flex-col w-100 h-120 items-center justify-center gap-4"
          >
            <div className="flex flex-col gap-4 items-center justify-center">
              <img
                className="rounded-2xl p-2 hover:scale-105 transition-all cursor-pointer"
                src={cloth.Image}
                alt={cloth.name}
              />
              <p className="text-2xl font-bold text-black">{cloth.name}</p>
              <p className="text-xl font-medium text-black">
                {cloth.description}
              </p>

              <p className="text-blue-600">{cloth.Price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
