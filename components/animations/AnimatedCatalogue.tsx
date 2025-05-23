"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/custom/ProductCard";
import { Cloth } from "@/app/generated/prisma";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  description: string;
  clothes: Cloth[];
  gender: string | undefined;
};

export default function AnimatedCatalogue({ title, description, clothes, gender}: Props) {
  const router = useRouter();
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
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
        <p className="text-lg md:text-2xl text-gray-600">{description}</p>
        <div className="flex flex-col lg:flex-row items-center mt-3 lg:gap-7 gap-3 justify-center">
          <Button
            onClick={() => handleChangeGender("boy")}
            variant={"outline"}
            className="cursor-pointer lg:w-[300px] lg:h-[50px] w-[300px] h-[50px] border-1 lg:rounded-lg rounded-md border-black bg-gray-800 text-white font-medium lg:text-md lg:font-bold"
          >
            Показать одежду только для мальчиков
          </Button>
          <Button
            onClick={() => handleChangeGender("girl")}
            variant={"outline"}
            className="cursor-pointer lg:w-[300px] lg:h-[50px] w-[300px] h-[50px] border-1 lg:rounded-lg rounded-md border-black bg-gray-800 text-white font-medium lg:text-md lg:font-bold"
          >
            Показать одежду только для девочек
          </Button>
        </div>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
        {clothes.map((cloth, index) => (
          <motion.div
            key={cloth.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
          >
            <ProductCard cloth={cloth} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
