"use client";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Profile() {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (session?.user) {
      fetch("/api/orders/user")
        .then((res) => res.json())
        .then((data) => setOrders(data.orders)); // объекмт
    }
  }, [session]);

  if (status === "loading") return <p>Загрузка...</p>;

  if (!session) {
    return (
      <Button onClick={() => signIn()} variant="outline">
        Sign In
      </Button>
    );
  }

  if (session.user.isBlocked) {
    return <p className="text-red-500">🚫 Ваш аккаунт заблокирован.</p>;
  }
  console.log(orders);

  return (
    <div className="p-4 max-w-[1250px] mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Профиль</h1>
        <p>Имя: {session.user.name}</p>
        <p>Email: {session.user.email}</p>
        <p>Роль: {session.user.role}</p>
      </div>
      <h2 className="text-lg font-semibold mt-6">История заказов:</h2>

      <div className="space-y-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border-1 border-black p-3 w-[400px] h-full rounded-md shadow-lg bg-white"
          >
            <p>🧾 Заказ был в : {new Date(order.createdAt).toLocaleString()}</p>
            <p>
              📦 Статус: <strong>{order.status}</strong>
            </p>
            <div className="flex flex-col gap-2">
              <p>Товары:</p>
              {order.items.map((item: any) => (
                <div
                  className="flex max-w-[300px] items-center justify-between"
                  key={item.id}
                >
                  <p>
                    {item.name} × {item.quantity}
                  </p>
                  <img className="w-25 h-25" src={item.Image} alt="" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
