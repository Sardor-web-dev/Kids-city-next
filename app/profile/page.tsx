"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Profile() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<any[]>([]);
  const t = useTranslations("ProfilePage");

  useEffect(() => {
    if (session?.user) {
      fetch("/api/orders/user")
        .then((res) => res.json())
        .then((data) => setOrders(data.orders));
    }
  }, [session]);

  if (!session) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-md w-full space-y-6 text-center">
          <h2 className="text-3xl font-bold">Вы не авторизованы</h2>
          <p className="text-lg text-gray-600">
            Войдите, чтобы просматривать профиль и заказы.
          </p>
          <Button
            className="bg-gray-800 w-50 text-white hover:bg-white hover:text-black border border-black rounded-xl font-semibold cursor-pointer "
            onClick={() => signIn()}
          >
            Войти
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="p-6 max-w-[1250px] mx-auto">
      {session.user?.isBlocked && (
        <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg mb-6">
          🚫 Ваш аккаунт заблокирован.
        </div>
      )}

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          <p>
            <strong>{t("name")}</strong> {session.user.name}
          </p>
          <p>
            <strong>{t("email")}</strong> {session.user.email}
          </p>
          <p>
            <strong>{t("role")}</strong> {session.user.role}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t("orders")}</h2>
        {orders.length === 0 ? (
          <p className="text-gray-600">{t("error")}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {orders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-4 shadow-md border"
              >
                <p className="text-sm text-gray-500 mb-2">
                  {t("orderTime")} {new Date(order.createdAt).toLocaleString()}
                </p>
                <p className="font-medium mb-2">
                  {t("status")}
                  <span className="font-semibold">
                    {(order.status === "canceled" && t("canceled")) ||
                      (order.status === "process" && t("process")) ||
                      (order.status === "done" && t("done"))}
                  </span>
                </p>
                <div className="space-y-2">
                  {order.items.map((item: any) => (
                    <div key={item.id} className="flex items-center gap-2">
                      <img
                        src={item.Image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md border"
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
        className="bg-black w-50 cursor-pointer text-white hover:bg-white hover:text-black border border-black font-semibold rounded-xl"
      >
        {t("leave")}
      </Button>
    </div>
  );
}
