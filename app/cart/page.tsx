'use client';

import CartItemCard from '@/components/custom/CartItemCard';
import { Button } from '@/components/ui/button';

import { useCart } from '@/contexts/CartContext';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { signIn, useSession } from 'next-auth/react';
import OrderModal from '@/components/custom/OrderModalWindow';

export default function CartPage() {
  const t = useTranslations('CartPage');
  const { items, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  const { data: session } = useSession();

  useEffect(() => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [items]);
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
            <p className="mt-3 text-lg text-foreground/70">Войдите, чтобы просматривать свою корзину и заказы.</p>
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
      className="mx-auto w-full max-w-[1250px] px-4 py-12 md:py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="mb-12 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-pretty text-3xl font-bold md:text-4xl">{t('title')}</h1>
        <button 
          onClick={clearCart}
          className="rounded-lg px-4 py-2 font-medium text-destructive transition-all duration-200 hover:bg-destructive/10"
        >
          {t('clear')}
        </button>
      </motion.div>
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-8 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground">{t('empty')}</h2>
            <p className="mt-2 text-foreground/60">Начните добавлять товары в корзину</p>
          </div>
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
            <Link href={'/catalogue?gender=boy'} className="rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg">
              {t('link')} (Для мальчиков)
            </Link>
            <Link href={'/catalogue?gender=girl'} className="rounded-lg bg-accent px-6 py-2 font-semibold text-accent-foreground transition-all duration-200 hover:shadow-lg">
              {t('link')} (Для девочек)
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-12">
          <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * item.id, duration: 0.4 }}
              >
                <CartItemCard key={item.id} cloth={item} />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-foreground/70">Итого к оплате</p>
              <p className="text-3xl font-bold text-primary md:text-4xl">
                {totalPrice.toLocaleString()} <span className="text-lg text-foreground/60">сум</span>
              </p>
            </div>
            <OrderModal totalPrice={totalPrice} />
          </div>
        </div>
      )}
    </motion.div>
  );
}
