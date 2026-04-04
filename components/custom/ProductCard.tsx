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
        className="group h-full flex flex-col overflow-hidden rounded-[2rem] border border-border/30 bg-card shadow-md transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:bg-white"
      >
        {/* Изображение и кнопка "Избранное" */}
        <div className="relative aspect-square w-full cursor-pointer overflow-hidden bg-muted">
          <img
            onClick={() => router.push(`products/${cloth.id}`)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={cloth.Image}
            alt={cloth.name}
          />
          <button
            onClick={() => toggleFavorite(cloth.id)}
            className="absolute top-4 right-4 rounded-full bg-white/95 p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-125 hover:bg-white hover:shadow-2xl"
          >
            <Heart
              className={`h-5 w-5 cursor-pointer transition-all duration-300 ${
                favorites.some(fav => fav?.id === cloth.id)
                  ? 'fill-destructive text-destructive scale-110'
                  : 'text-foreground/30 hover:text-foreground/50'
              }`}
            />
          </button>
        </div>

        {/* Контент карточки */}
        <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 flex-1">
          <div className="flex-1">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">{cloth.name}</h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-foreground/50 line-clamp-2 leading-relaxed">{cloth.description}</p>
          </div>
          
          <div className="flex items-baseline gap-1.5 sm:gap-2 pt-1">
            <p className="text-xl sm:text-2xl font-bold text-primary">{cloth.price.toLocaleString()}</p>
            <span className="text-xs text-foreground/40 font-medium uppercase tracking-wide">сум</span>
          </div>

          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-full rounded-[1rem] sm:rounded-[1.25rem] border border-border/40 bg-muted/60 text-xs sm:text-sm font-medium hover:border-primary/60 transition-all duration-300">
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
