"use client";

import CartItemCard from "@/components/custom/CartItemCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/contexts/CartContext";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const t = useTranslations("CartPage");
  const { items, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [items]);

  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className="text-4xl mb-10 font-bold">{t("title")}</h1>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="cursor-pointer">
                  Оформить заказ
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Оформление доставки</DialogTitle>
                  <DialogDescription>
                    Пожалуйста, заполните форму ниже, чтобы оформить заказ.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Имя
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Фамилия
                    </Label>
                    <Input id="username" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Адрес проживания
                    </Label>
                    <Input type="adress" id="username" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Номер телефона
                    </Label>
                    <Input type="number" id="username" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Электроная почта
                    </Label>
                    <Input type="email" id="username" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Заказать</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
