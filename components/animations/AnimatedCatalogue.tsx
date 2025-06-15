"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Cloth } from "@/app/generated/prisma";
import ProductCard from "@/components/custom/ProductCard";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
  title: string;
  description: string;
  clothes: Cloth[];
  gender: string | undefined;
};

export default function AnimatedCatalogue({
  title,
  description,
  clothes,
  gender,
}: Props) {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
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
    const filtered = clothes.filter((cloth) => {
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
      className="flex flex-col items-center justify-center gap-12 py-16 px-4 md:px-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-center flex flex-col items-center justify-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
        <p className="text-lg md:text-2xl text-gray-600">{description}</p>

        {/* Поиск */}
        <Label className="flex mt-5 items-center gap-2">
          <Input
            type="text"
            placeholder="Поиск по названию или описанию"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="lg:w-[400px] w-[300px] border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <Button
            variant={"outline"}
            className="text-center border-black bg-gray-800 text-white font-bold cursor-pointer"
          >
            <FaSearch size={24} />
          </Button>
        </Label>

        {/* Переключатели пола */}
        <div className="flex flex-col lg:flex-row items-center mt-5 lg:gap-7 gap-3 justify-center">
          <Button
            onClick={() => handleChangeGender("boy")}
            variant={gender === "boy" ? "default" : "outline"}
            className="cursor-pointer w-[300px] h-[50px] border-black bg-gray-800 text-white font-bold"
          >
            Показать одежду только для мальчиков
          </Button>
          <Button
            onClick={() => handleChangeGender("girl")}
            variant={gender === "girl" ? "default" : "outline"}
            className="cursor-pointer w-[300px] h-[50px] border-black bg-gray-800 text-white font-bold"
          >
            Показать одежду только для девочек
          </Button>
        </div>
      </motion.div>

      {/* Фильтры: Цена от - до */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <Label>Цена от:</Label>
          <Input
            type="number"
            placeholder="0"
            value={minPrice ?? ""}
            onChange={(e) =>
              setMinPrice(e.target.value ? parseInt(e.target.value) : null)
            }
            className="w-[120px]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label>до:</Label>
          <Input
            type="number"
            placeholder="1000000"
            value={maxPrice ?? ""}
            onChange={(e) =>
              setMaxPrice(e.target.value ? parseInt(e.target.value) : null)
            }
            className="w-[150px]"
          />
        </div>
      </div>

      {/* Вывод результатов */}
      {filteredClothes.length === 0 ? (
        <p className="text-gray-500 text-xl text-center">
          Ничего не найдено по вашему запросу
        </p>
      ) : (
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
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
