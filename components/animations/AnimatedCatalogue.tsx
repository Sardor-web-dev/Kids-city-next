'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Cloth } from '@/app/generated/prisma';
import ProductCard from '@/components/custom/ProductCard';
import { Button } from '../ui/button';
import { FaSearch } from 'react-icons/fa';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type Props = {
  title: string;
  description: string;
  clothes: Cloth[];
  gender: string | undefined;
};

export default function AnimatedCatalogue({ title, description, clothes, gender }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [filteredClothes, setFilteredClothes] = useState<Cloth[]>(clothes);

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Filtering
  useEffect(() => {
    const filtered = clothes.filter(cloth => {
      const matchesSearch =
        cloth.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        cloth.description.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchesMin = minPrice === null || cloth.price >= minPrice;

      const matchesMax = maxPrice === null || cloth.price <= maxPrice;

      return matchesSearch && matchesMin && matchesMax;
    });

    setFilteredClothes(filtered);
  }, [debouncedSearch, minPrice, maxPrice, clothes]);

  const handleChangeGender = (newGender: string) => {
    router.push(`/catalogue?gender=${newGender}`);
  };

  return (
    <motion.div
      className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 pb-28 sm:pb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex w-full flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="mb-3 sm:mb-4 text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-medium text-foreground/70">{description}</p>

        {/* Поиск */}
        <div className="mt-6 sm:mt-8 flex w-full max-w-2xl items-center gap-1.5 sm:gap-2 rounded-full border border-border/40 bg-card p-1.5 sm:p-2 shadow-sm">
          <Input
            type="text"
            placeholder="Поиск"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 border-0 bg-transparent px-3 sm:px-4 text-xs sm:text-sm outline-none"
          />
          <Button
            className="cursor-pointer rounded-full bg-primary px-3 sm:px-4 py-1.5 sm:py-2 text-primary-foreground hover:shadow-lg transition-all"
          >
            <FaSearch size={16} className="sm:w-4.5 sm:h-4.5" />
          </Button>
        </div>

        {/* Переключатели пола */}
        <div className="mt-6 sm:mt-8 flex w-full flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-4">
          <Button
            onClick={() => handleChangeGender('boy')}
            className={`w-full sm:w-auto cursor-pointer rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-200 ${
              gender === 'boy'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'border border-border/40 bg-card text-foreground hover:border-primary/60'
            }`}
          >
            Для мальчиков
          </Button>
          <Button
            onClick={() => handleChangeGender('girl')}
            className={`w-full sm:w-auto cursor-pointer rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-200 ${
              gender === 'girl'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'border border-border/40 bg-card text-foreground hover:border-primary/60'
            }`}
          >
            Для девочек
          </Button>
          <Button
            onClick={() => router.push('/catalogue')}
            className={`cursor-pointer rounded-lg px-6 py-3 font-semibold transition-all duration-200 ${
              !gender
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'border border-border bg-card text-foreground hover:border-primary'
            }`}
          >
            Все товары
          </Button>
        </div>
      </motion.div>

      {/* Фильтры: Цена от - до */}
      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-6 md:flex-row">
        <div className="flex w-full items-center gap-3 md:w-auto">
          <Label className="font-semibold">Цена от:</Label>
          <Input
            type="number"
            placeholder="0"
            value={minPrice ?? ''}
            onChange={e => setMinPrice(e.target.value ? parseInt(e.target.value) : null)}
            className="w-full md:w-32"
          />
        </div>
        <div className="flex w-full items-center gap-3 md:w-auto">
          <Label className="font-semibold">до:</Label>
          <Input
            type="number"
            placeholder="1000000"
            value={maxPrice ?? ''}
            onChange={e => setMaxPrice(e.target.value ? parseInt(e.target.value) : null)}
            className="w-full md:w-32"
          />
        </div>
      </div>

      {/* Вывод результатов */}
      {filteredClothes.length === 0 ? (
        <p className="text-center text-xl text-foreground/60">Ничего не найдено по вашему запросу</p>
      ) : (
        <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredClothes.map((cloth, index) => (
            <motion.div
              key={cloth.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.4 }}
            >
              <ProductCard cloth={cloth} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
