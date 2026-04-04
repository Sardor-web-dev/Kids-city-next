// app/[locale]/favorites/page.tsx
'use client';

import React from 'react';
import useFavorites from '@/hooks/useFavorites';
import { useTranslations } from 'next-intl';
import ProductCard from '@/components/custom/ProductCard';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';

const FavoritesPage = () => {
  const { data: session } = useSession();
  const { favorites } = useFavorites();
  const t = useTranslations('FavoritesPage');
  console.log('FAVORITES:', favorites);

  if (!session) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex min-h-screen items-center justify-center px-4 py-16"
      >
        <div className="w-full max-w-md space-y-8 rounded-3xl border border-border bg-card p-8 text-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Вы не авторизованы</h2>
            <p className="mt-3 text-lg text-foreground/70">Войдите, чтобы просматривать избранные товары и заказы.</p>
          </div>
          <Button
            className="w-full cursor-pointer rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg"
            onClick={() => signIn()}
          >
            Войти
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto w-full max-w-[1250px] px-3 sm:px-4 py-8 sm:py-12 md:py-16 pb-28 sm:pb-12"
    >
      <h1 className="mb-8 sm:mb-12 text-pretty text-2xl sm:text-3xl lg:text-4xl font-bold">{t('title')}</h1>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 py-12 sm:py-16">
          <p className="text-sm sm:text-lg text-foreground/70">{t('empty')}</p>
          <a href="/catalogue" className="rounded-lg bg-primary px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg">
            Перейти к товарам
          </a>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {favorites.map((cloth: any, i: any) => (
            <ProductCard key={i} cloth={cloth} />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default FavoritesPage;
