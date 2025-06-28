'use client';

import { Cloth } from '@/app/generated/prisma';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import ButtonCart from './ButtonCart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useState } from 'react';
import useFavorites from '@/hooks/useFavorites';
import { Heart } from 'lucide-react';

const ProductCard = ({ cloth }: { cloth: Cloth }) => {
  const router = useRouter();
  const t = useTranslations('Catalogue');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="flex flex-col gap-2">
      <div
        key={cloth.id}
        className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
      >
        {/* Изображение и кнопка "Избранное" */}
        <div className="relative h-60 w-full cursor-pointer">
          <img
            onClick={() => router.push(`products/${cloth.id}`)}
            className="h-full w-full rounded-t-2xl object-cover transition-transform duration-300 hover:scale-105"
            src={cloth.Image}
            alt={cloth.name}
          />
          <button
            onClick={() => toggleFavorite(cloth.id)}
            className="absolute top-2 right-2 rounded-full bg-white/90 p-2 shadow backdrop-blur-sm transition-transform hover:scale-110"
          >
            <Heart
              className={`h-5 w-5 cursor-pointer ${
                favorites.some(fav => fav?.id === cloth.id)
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-400'
              }`}
            />
          </button>
        </div>

        {/* Контент карточки */}
        <div className="flex flex-col gap-2 p-5">
          <h2 className="text-xl font-semibold text-gray-800">{cloth.name}</h2>
          <p className="text-gray-600">{cloth.description}</p>
          <p className="text-base font-medium text-black">{cloth.price.toLocaleString()} сум</p>

          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-full rounded-lg border px-4 py-2">
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
