"use client";

import { Cloth } from "@/app/generated/prisma";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import ButtonCart from "./ButtonCart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

const ProductCard = ({ cloth }: { cloth: Cloth }) => {
  const router = useRouter();
  const t = useTranslations("Catalogue");
  const [selectedSize, setSelectedSize] = useState<string>("");
  console.log(cloth.size)
  return (
    <>
      <div className="flex flex-col gap-2">
        <div
          onClick={() => router.push(`products/${cloth.id}`)}
          key={cloth.id}
          className="bg-white cursor-pointer shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            className="w-full h-60 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            src={cloth.Image}
            alt={cloth.name}
          />
          <div className="p-5 flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-gray-800">
              {cloth.name}
            </h2>
            <p className="text-gray-600">{cloth.description}</p>
            <p>{cloth.price.toLocaleString()} сум</p>
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-full px-4 py-2 border rounded-lg">
                <SelectValue placeholder="Размеры" />
              </SelectTrigger>
              <SelectContent>
                {cloth.size.map((size, i) => (
                  <SelectItem key={i} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <ButtonCart cloth={cloth} selectedSize={selectedSize} />
      </div>
    </>
  );
};

export default ProductCard;
