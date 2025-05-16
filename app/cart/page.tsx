"use client";

import CartItemCard from "@/components/custom/CartItemCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, clearCart } = useCart();

  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className="text-xl font-bold mb-4">Корзина</h1>
      {items.length === 0 ? (
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
          <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
          <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
          <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
          <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
            {items.map((item) => (
              <CartItemCard key={item.id} cloth={item} />
            ))}
          </div>

          <button
            onClick={clearCart}
            className="bg-red-500 w-[220px] h-[60px] cursor-pointer hover:opacity-100 opacity-80 text-white rounded"
          >
            Очистить корзину
          </button>
          <div className="flex gap-4">
            <Link href={"/catalogueBoy"}>Посмотреть каталог(мальчики)</Link>
            <Link href={"/catalogueGirl"}>Посмотреть каталог(девочки)</Link>
          </div>
        </div>
      )}
    </div>
  );
}
