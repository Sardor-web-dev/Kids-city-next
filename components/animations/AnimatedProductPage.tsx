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
      className="mx-auto w-full max-w-[1250px] px-4 py-12 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col gap-8 lg:gap-16 lg:flex-row"
      >
        <div className="flex w-full lg:w-1/2">
          <img
            src={cloth.Image}
            alt={cloth.name}
            className="h-auto w-full rounded-3xl object-cover shadow-xl"
          />
        </div>

        <div className="flex w-full flex-col gap-6 lg:w-1/2">
          <div>
            <h1 className="text-pretty text-4xl font-bold text-foreground md:text-5xl">{cloth.name}</h1>
            <p className="mt-3 text-base leading-relaxed text-foreground/70 md:text-lg">{cloth.description}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Выберите размер:</h2>
            <ul className="flex flex-wrap gap-3">
              {cloth.size.map((size: string, i: number) => (
                <li
                  onClick={() => setSelectedSize(size)}
                  key={i}
                  className={`cursor-pointer rounded-xl border-2 px-4 py-2 font-medium transition-all duration-200 ${
                    selectedSize === size
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-background text-foreground/70 hover:border-primary hover:text-primary'
                  }`}
                >
                  {size} см
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold text-primary">
              {cloth.price.toLocaleString()}
            </p>
            <span className="text-lg text-foreground/60">сум</span>
          </div>

          <ButtonCart cloth={cloth} selectedSize={selectedSize} />
        </div>
      </motion.div>
    </motion.div>
  );
}
