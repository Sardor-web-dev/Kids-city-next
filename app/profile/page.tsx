'use client';
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Profile() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<any[]>([]);
  const t = useTranslations('ProfilePage');

  useEffect(() => {
    if (session?.user) {
      fetch('/api/orders/user')
        .then(res => res.json())
        .then(data => setOrders(data.orders));
    }
  }, [session]);

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
          <p className="text-lg text-gray-600">Войдите, чтобы просматривать профиль и заказы.</p>
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
    <div className="mx-auto max-w-[1250px] p-6">
      {session.user?.isBlocked && (
        <div className="mb-6 rounded-lg border border-red-300 bg-red-100 p-4 text-red-700">
          🚫 Ваш аккаунт заблокирован.
        </div>
      )}

      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">{t('title')}</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          <p>
            <strong>{t('name')}</strong> {session.user.name}
          </p>
          <p>
            <strong>{t('email')}</strong> {session.user.email}
          </p>
          <p>
            <strong>{t('role')}</strong> {session.user.role}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">{t('orders')}</h2>
        {orders.length === 0 ? (
          <p className="text-gray-600">{t('error')}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {orders.map(order => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border bg-white p-4 shadow-md"
              >
                <p className="mb-2 text-sm text-gray-500">
                  {t('orderTime')} {new Date(order.createdAt).toLocaleString()}
                </p>
                <p className="mb-2 font-medium">
                  {t('status')}
                  <span className="font-semibold">
                    {(order.status === 'canceled' && t('canceled')) ||
                      (order.status === 'process' && t('process')) ||
                      (order.status === 'done' && t('done'))}
                  </span>
                </p>
                <div className="space-y-2">
                  {order.items.map((item: any) => (
                    <div key={item.id} className="flex items-center gap-2">
                      <img
                        src={item.Image}
                        alt={item.name}
                        className="h-16 w-16 rounded-md border object-cover"
                      />
                      <p className="text-sm">
                        {item.name} × {item.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Button
        onClick={() => signOut()}
        className="w-50 cursor-pointer rounded-xl border border-black bg-black font-semibold text-white hover:bg-white hover:text-black"
      >
        {t('leave')}
      </Button>
    </div>
  );
}
