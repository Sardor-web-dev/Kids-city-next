"use client";

import { useState } from "react";
import ButtonCart from "../custom/ButtonCart";
import { motion } from "framer-motion";

export default function AnimatedProductPage({ cloth }: { cloth: any }) {
  const [selectedSize, setSelectedSize] = useState<string>("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col lg:flex-row gap-10"
      >
        <img
          src={cloth.Image}
          alt={cloth.name}
          className="w-full lg:w-1/2 h-96 object-cover rounded-2xl shadow-md"
        />

        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900">{cloth.name}</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            {cloth.description}
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-1">Доступные размеры:</h2>
            <ul className="flex flex-wrap gap-2">
              {cloth.size.map((size: string, i: number) => (
                <li
                  onClick={() => setSelectedSize(size)}
                  key={i}
                  className={`px-3 py-1 rounded-lg border text-sm cursor-pointer transition-all ${
                    selectedSize === size
                      ? "border-black border-1"
                      : "bg-gray-100 text-gray-700 border-gray-300"
                  }`}
                >
                  {size} см
                </li>
              ))}
            </ul>
          </div>

          <p className="text-2xl font-semibold text-green-600">
            {cloth.price.toLocaleString()} сум
          </p>

          <ButtonCart cloth={cloth} selectedSize={selectedSize} />
        </div>
      </motion.div>
    </motion.div>
  );
}
