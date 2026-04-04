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
        className="flex min-h-screen items-center justify-center px-4 py-16"
      >
        <div className="w-full max-w-md space-y-8 rounded-3xl border border-border bg-card p-8 text-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Вы не авторизованы</h2>
            <p className="mt-3 text-lg text-foreground/70">Войдите, чтобы просматривать профиль и ваши заказы.</p>
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
    <div className="mx-auto w-full max-w-[1250px] px-3 sm:px-4 py-8 sm:py-12 md:py-16 pb-28 sm:pb-12">
      {session.user?.isBlocked && (
        <div className="mb-6 sm:mb-8 flex items-center gap-3 rounded-xl sm:rounded-2xl border border-destructive/20 bg-destructive/10 p-3 sm:p-4 text-destructive text-sm sm:text-base">
          <span className="text-xl sm:text-2xl">🚫</span>
          <p className="font-medium">Ваш аккаунт заблокирован</p>
        </div>
      )}

      <div className="mb-8 sm:mb-12 rounded-xl sm:rounded-2xl border border-border/30 bg-card p-4 sm:p-8">
        <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">{t('title')}</h1>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4">
            <p className="text-xs sm:text-sm font-medium text-foreground/60">{t('name')}</p>
            <p className="mt-1.5 text-sm sm:text-lg font-semibold text-foreground truncate">{session.user.name}</p>
          </div>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4">
            <p className="text-xs sm:text-sm font-medium text-foreground/60">{t('email')}</p>
            <p className="mt-1.5 text-sm sm:text-lg font-semibold text-foreground truncate">{session.user.email}</p>
          </div>
          <div className="rounded-lg bg-muted/50 p-3 sm:p-4">
            <p className="text-xs sm:text-sm font-medium text-foreground/60">{t('role')}</p>
            <p className="mt-1.5 text-sm sm:text-lg font-semibold text-primary capitalize">{session.user.role}</p>
          </div>
        </div>
      </div>

      <div className="mb-8 sm:mb-12">
        <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">{t('orders')}</h2>
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 rounded-xl sm:rounded-2xl border border-border/30 bg-card p-6 sm:p-12">
            <p className="text-sm sm:text-lg text-foreground/70">{t('error')}</p>
            <a href="/catalogue" className="rounded-lg bg-primary px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg">
              Посмотреть товары
            </a>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {orders.map(order => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary"
              >
                <p className="mb-3 text-xs font-medium text-foreground/60 uppercase">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
                <p className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {(order.status === 'canceled' && t('canceled')) ||
                    (order.status === 'process' && t('process')) ||
                    (order.status === 'done' && t('done'))}
                </p>
                <div className="space-y-3">
                  {order.items.map((item: any) => (
                    <div key={item.id} className="flex items-center gap-3 rounded-lg bg-muted p-2">
                      <img
                        src={item.Image}
                        alt={item.name}
                        className="h-12 w-12 rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-xs text-foreground/60">×{item.quantity}</p>
                      </div>
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
        className="cursor-pointer rounded-lg bg-destructive px-6 py-2 font-semibold text-destructive-foreground transition-all duration-200 hover:shadow-lg"
      >
        {t('leave')}
      </Button>
    </div>
  );
}
