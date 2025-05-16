"use client";

import { Cloth } from "@/app/generated/prisma";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { useCart } from "@/contexts/CartContext";

const ProductCard = ({ cloth }: { cloth: Cloth }) => {
  const router = useRouter();
  const t = useTranslations("Catalogue");
  const { addItem } = useCart();

  return (
    <>
      <div className="flex flex-col gap-2">
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
            <h2 className="text-xl font-semibold text-gray-800">
              {cloth.name}
            </h2>
            <p className="text-gray-600">{cloth.description}</p>
          </div>
          <p>{cloth.price} сум</p>
        </div>
        <Button
          className="cursor-pointer"
          onClick={() => {
            router.push("/cart");
            addItem({
              id: cloth.id,
              name: cloth.name,
              Image: cloth.Image,
              price: cloth.price,
              quantity: 1,
              description: cloth.description,
              gender: cloth.gender,
              authorId: cloth.authorId,
            });
          }}
        >
          {t("button")}
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
