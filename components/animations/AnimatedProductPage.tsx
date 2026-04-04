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
      className="mx-auto w-full max-w-[1250px] px-3 sm:px-4 py-8 sm:py-12 md:py-16 pb-28 sm:pb-12"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col gap-6 sm:gap-8 lg:gap-16 lg:flex-row"
      >
        <div className="flex w-full lg:w-1/2">
          <img
            src={cloth.Image}
            alt={cloth.name}
            className="h-auto w-full rounded-2xl sm:rounded-3xl object-cover shadow-lg lg:shadow-xl"
          />
        </div>

        <div className="flex w-full flex-col gap-4 sm:gap-6 lg:w-1/2">
          <div>
            <h1 className="text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{cloth.name}</h1>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-foreground/70">{cloth.description}</p>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-border/30 bg-card p-4 sm:p-6">
            <h2 className="mb-3 sm:mb-4 text-sm sm:text-lg font-semibold text-foreground">Выберите размер:</h2>
            <ul className="flex flex-wrap gap-2 sm:gap-3">
              {cloth.size.map((size: string, i: number) => (
                <li
                  onClick={() => setSelectedSize(size)}
                  key={i}
                  className={`cursor-pointer rounded-lg sm:rounded-xl border-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                    selectedSize === size
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border/50 bg-background text-foreground/70 hover:border-primary hover:text-primary'
                  }`}
                >
                  {size} см
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              {cloth.price.toLocaleString()}
            </p>
            <span className="text-sm sm:text-lg text-foreground/60">сум</span>
          </div>

          <ButtonCart cloth={cloth} selectedSize={selectedSize} />
        </div>
      </motion.div>
    </motion.div>
  );
}
