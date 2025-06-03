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
import useFavorites from "@/hooks/useFavorites";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ cloth }: { cloth: Cloth }) => {
  const router = useRouter();
  const t = useTranslations("Catalogue");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="flex flex-col gap-2">
      <div
        key={cloth.id}
        className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        {/* Изображение и кнопка "Избранное" */}
        <div className="relative w-full h-60 cursor-pointer">
          <img
            onClick={() => router.push(`products/${cloth.id}`)}
            className="w-full h-full rounded-t-2xl object-cover hover:scale-105 transition-transform duration-300"
            src={cloth.Image}
            alt={cloth.name}
          />
          <button
            onClick={() => {
              toggleFavorite(cloth.id);
              router.refresh();
            }}
            className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow hover:scale-110 transition-transform"
          >
            <CiHeart
              className={`w-5 h-5 cursor-pointer ${
                favorites.some((fav) => fav?.id === cloth.id)
                  ? "text-red-500 fill-red-500"
                  : "text-gray-400"
              }`}
            />
          </button>
        </div>

        {/* Контент карточки */}
        <div className="p-5 flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-gray-800">{cloth.name}</h2>
          <p className="text-gray-600">{cloth.description}</p>
          <p className="text-base font-medium text-black">
            {cloth.price.toLocaleString()} сум
          </p>

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

      {/* Кнопка добавления в корзину */}
      <ButtonCart cloth={cloth} selectedSize={selectedSize} />
    </div>
  );
};

export default ProductCard;
