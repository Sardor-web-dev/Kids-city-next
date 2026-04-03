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
    <div className="flex flex-col gap-4 h-full">
      <div
        key={cloth.id}
        className="group h-full flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30"
      >
        {/* Изображение и кнопка "Избранное" */}
        <div className="relative aspect-square w-full cursor-pointer overflow-hidden bg-muted">
          <img
            onClick={() => router.push(`products/${cloth.id}`)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={cloth.Image}
            alt={cloth.name}
          />
          <button
            onClick={() => toggleFavorite(cloth.id)}
            className="absolute top-4 right-4 rounded-full bg-white/90 p-2.5 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white"
          >
            <Heart
              className={`h-5 w-5 cursor-pointer transition-colors ${
                favorites.some(fav => fav?.id === cloth.id)
                  ? 'fill-destructive text-destructive'
                  : 'text-foreground/25'
              }`}
            />
          </button>
        </div>

        {/* Контент карточки */}
        <div className="flex flex-col gap-4 p-6 flex-1">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground line-clamp-2 leading-snug">{cloth.name}</h2>
            <p className="mt-2 text-sm text-foreground/55 line-clamp-2 leading-relaxed">{cloth.description}</p>
          </div>
          
          <div className="flex items-baseline gap-1">
            <p className="text-2xl font-bold text-primary">{cloth.price.toLocaleString()}</p>
            <span className="text-sm text-foreground/50">сум</span>
          </div>

          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-full rounded-2xl border border-border/60 bg-muted/50 text-sm font-medium hover:border-primary/40 transition-colors">
              <SelectValue placeholder="Размер" />
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
