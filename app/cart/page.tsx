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
        className="flex min-h-screen items-center justify-center px-4"
      >
        <div className="w-full max-w-md space-y-6 text-center">
          <h2 className="text-3xl font-bold">Вы не авторизованы</h2>
          <p className="text-lg text-gray-600">Войдите, чтобы просматривать свою корзину заказы.</p>
          <Button
            className="w-50 cursor-pointer rounded-xl border border-black bg-gray-800 font-semibold text-white hover:bg-white hover:text-black"
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
      className="mx-auto max-w-[1200px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="mb-10 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold lg:text-4xl">{t('title')}</h1>
        <p className="cursor-pointer transition-all hover:scale-105" onClick={clearCart}>
          {t('clear')}
        </p>
      </motion.div>
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold">{t('empty')}</h2>
          <div className="flex items-center gap-10">
            <Link href={'/catalogue?gender=boy'} className="text-lg text-blue-500 hover:underline">
              {t('link')}
            </Link>
            <Link href={'/catalogue?gender=girl'} className="text-lg text-pink-500 hover:underline">
              {t('link')}
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <div className="grid w-full max-w-7xl gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

          <div className="flex items-center justify-between">
            <p className="text-lg font-bold lg:text-2xl">
              {t('price')} {totalPrice.toLocaleString()} {t('priceValue')}
            </p>
            <OrderModal totalPrice={totalPrice} />
          </div>
        </div>
      )}
    </motion.div>
  );
}
