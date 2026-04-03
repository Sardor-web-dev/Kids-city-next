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
    <div className="flex flex-col gap-3">
      <div
        key={cloth.id}
        className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary"
      >
        {/* Изображение и кнопка "Избранное" */}
        <div className="relative aspect-square w-full cursor-pointer overflow-hidden bg-muted">
          <img
            onClick={() => router.push(`products/${cloth.id}`)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={cloth.Image}
            alt={cloth.name}
          />
          <button
            onClick={() => toggleFavorite(cloth.id)}
            className="absolute top-3 right-3 rounded-full bg-white/95 p-2 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white"
          >
            <Heart
              className={`h-5 w-5 cursor-pointer transition-colors ${
                favorites.some(fav => fav?.id === cloth.id)
                  ? 'fill-destructive text-destructive'
                  : 'text-foreground/30'
              }`}
            />
          </button>
        </div>

        {/* Контент карточки */}
        <div className="flex flex-col gap-4 p-5">
          <div>
            <h2 className="text-xl font-semibold text-foreground line-clamp-2">{cloth.name}</h2>
            <p className="mt-1 text-sm text-foreground/60 line-clamp-2">{cloth.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-primary">{cloth.price.toLocaleString()} сум</p>
          </div>

          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-full rounded-lg border-border bg-muted hover:bg-muted/80">
              <SelectValue placeholder="Выбрать размер" />
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
