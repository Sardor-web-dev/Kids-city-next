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
      className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center gap-12 px-4 py-16 md:px-6"
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
        <h1 className="mb-4 text-pretty text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="text-lg font-medium text-foreground/70 md:text-xl">{description}</p>

        {/* Поиск */}
        <div className="mt-8 flex w-full max-w-2xl items-center gap-2 rounded-full border border-border bg-card p-2 shadow-sm">
          <Input
            type="text"
            placeholder="Поиск по названию или описанию"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 border-0 bg-transparent px-4 outline-none"
          />
          <Button
            className="cursor-pointer rounded-full bg-primary px-4 text-primary-foreground hover:shadow-lg"
          >
            <FaSearch size={18} />
          </Button>
        </div>

        {/* Переключатели пола */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 lg:flex-row lg:gap-4">
          <Button
            onClick={() => handleChangeGender('boy')}
            className={`cursor-pointer rounded-lg px-6 py-3 font-semibold transition-all duration-200 ${
              gender === 'boy'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'border border-border bg-card text-foreground hover:border-primary'
            }`}
          >
            Для мальчиков
          </Button>
          <Button
            onClick={() => handleChangeGender('girl')}
            className={`cursor-pointer rounded-lg px-6 py-3 font-semibold transition-all duration-200 ${
              gender === 'girl'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'border border-border bg-card text-foreground hover:border-primary'
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
