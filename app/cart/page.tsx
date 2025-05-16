"use client";

import CartItemCard from "@/components/custom/CartItemCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { items, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  // Пересчет суммы при изменении корзины
  useEffect(() => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [items]);

  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className="text-4xl mb-10 font-bold">Корзина</h1>
      {items.length === 0 ? (
        <div>
          <p>Корзина пустая</p>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
            <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
            <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
            <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
            <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
            {items.map((item) => (
              <CartItemCard key={item.id} cloth={item} />
            ))}
          </div>

          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">
              Общая сумма: {totalPrice.toLocaleString()} сум
            </p>
            <button
              onClick={clearCart}
              className="bg-red-500 w-[220px] h-[60px] cursor-pointer hover:opacity-100 opacity-80 text-white rounded"
            >
              Очистить корзину
            </button>
          </div>

          <div className="flex gap-4">
            <Link href={"/catalogueBoy"}>Посмотреть каталог (мальчики)</Link>
            <Link href={"/catalogueGirl"}>Посмотреть каталог (девочки)</Link>
          </div>
        </div>
      )}
    </div>
  );
}
