'use client';

import { useState } from 'react';
import ButtonCart from '../custom/ButtonCart';
import { motion } from 'framer-motion';

export default function AnimatedProductPage({ cloth }: { cloth: any }) {
  const [selectedSize, setSelectedSize] = useState<string>('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl px-4 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col gap-10 lg:flex-row"
      >
        <img
          src={cloth.Image}
          alt={cloth.name}
          className="h-96 w-full rounded-2xl object-cover shadow-md lg:w-1/2"
        />

        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900">{cloth.name}</h1>
          <p className="text-base leading-relaxed text-gray-700">{cloth.description}</p>

          <div>
            <h2 className="mb-1 text-lg font-semibold">Доступные размеры:</h2>
            <ul className="flex flex-wrap gap-2">
              {cloth.size.map((size: string, i: number) => (
                <li
                  onClick={() => setSelectedSize(size)}
                  key={i}
                  className={`cursor-pointer rounded-lg border px-3 py-1 text-sm transition-all ${
                    selectedSize === size
                      ? 'border-1 border-black'
                      : 'border-gray-300 bg-gray-100 text-gray-700'
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
