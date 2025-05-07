import prisma from "@/lib/prisma";

export default async function Admin() {
  const clothes = await prisma.cloth.findMany();

  return (
    <div className="flex flex-col items-center justify-center gap-12 py-16 px-4 md:px-12">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Наши товары
        </h1>
        <p className="text-lg md:text-2xl text-gray-600">
          Самая лучшая и высококачественная детская одежда в Самарканде!
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
        {clothes.map((cloth: any) => (
          <div
            key={cloth.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              src={cloth.Image}
              alt={cloth.name}
            />
            <div className="p-5 flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {cloth.name}
              </h2>
              <p className="text-gray-600">{cloth.description}</p>
              <p className="text-blue-600 font-medium text-lg">
                {cloth.Price} сум
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
