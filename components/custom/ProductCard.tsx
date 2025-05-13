"use client";

import { Cloth } from "@/app/generated/prisma";
import { useRouter } from "next/navigation";

const ProductCard = ({ cloth }: { cloth: Cloth }) => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push(`products/${cloth.id}`)}
        key={cloth.id}
        className="bg-white cursor-pointer shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <img
          className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
          src={cloth.Image}
          alt={cloth.name}
        />
        <div className="p-5 flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-gray-800">{cloth.name}</h2>
          <p className="text-gray-600">{cloth.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
