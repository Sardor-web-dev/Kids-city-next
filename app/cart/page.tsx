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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/contexts/CartContext";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const t = useTranslations("CartPage");
  const { items, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [payment, setPayment] = useState("");

  const data = [
    { name: t("name"), type: "text", identifier: "name" },
    { name: t("surname"), type: "text", identifier: "surname" },
    { name: t("adress"), type: "text", identifier: "adress" },
    { name: t("number"), type: "number", identifier: "number" },
    { name: t("email"), type: "email", identifier: "email" },
  ];
  const order = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fm = new FormData(e.currentTarget);
    const name = fm.get("name");
    const surname = fm.get("surname");
    const adress = fm.get("adress");
    const number = fm.get("number");
    const email = fm.get("email");

    const message = `
  🛒 Новый заказ:
  
  👤 Имя: ${name}
  👤 Фамилия: ${surname}
  🏠 Адрес: ${adress}
  📞 Телефон: ${number}
  📧 Email: ${email}
  💳 Оплата: ${payment}
  🧾 Сумма: ${totalPrice.toLocaleString()} сум
  
  📦 Товары:
  ${items.map((item) => `• ${item.name} x${item.quantity}`).join("\n")}
  `;

    const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
    const CHAT_IDS =
      process.env.NEXT_PUBLIC_TELEGRAM_CHAT_IDS?.split(",") || [];

    try {
      for (const chatId of CHAT_IDS) {
        await fetch(
          `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: "Markdown",
            }),
          }
        );
      }

      alert("Заказ отправлен!");
      clearCart();
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Ошибка отправки заказа.");
    }
  };
  useEffect(() => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [items]);

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="flex items-center mb-10 justify-between">
        <h1 className="text-2xl lg:text-4xl font-bold">{t("title")}</h1>
        <p
          className="cursor-pointer hover:scale-105 transition-all"
          onClick={clearCart}
        >
          {t("clear")}
        </p>
      </div>
      {/* {items.length === 0 ? (
        <div>
          <p>Корзина пустая</p>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
            <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
            <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
            <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
            <Skeleton className="w-full h-100 bg-gray-300 rounded-lg" />
          </div>
        </div>
      ) : ( */}
      <div className="flex flex-col gap-10">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl">
          {items.map((item) => (
            <CartItemCard key={item.id} cloth={item} />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">
            {t("price")} {totalPrice.toLocaleString()} {t("priceValue")}
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                {t("button")}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{t("dialogTitle")}</DialogTitle>
                <DialogDescription>{t("dialogDescription")}</DialogDescription>
              </DialogHeader>
              <form onSubmit={order} className="flex flex-col gap-4">
                {data.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4"
                  >
                    <Label className="text-right">{item.name}</Label>
                    <Input
                      id={item.name}
                      name={item.identifier}
                      type={item.type}
                      className="lg:w-[300px] w-[220px]"
                    />
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4">
                  <Label className="text-right">{t("payment")}</Label>
                  <Select value={payment} onValueChange={setPayment}>
                    <SelectTrigger className="w-[220px] lg:w-[300px] border rounded-lg">
                      <SelectValue placeholder="Способ оплаты" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Наличные</SelectItem>
                      <SelectItem value="cart">Карта</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* <div className="grid grid-cols-4 items-center gap-4">
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
                </div> */}
                <DialogFooter>
                  <Button type="submit">Заказать</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex gap-4">
          <Link href={"/catalogueBoy"}>Посмотреть каталог (мальчики)</Link>
          <Link href={"/catalogueGirl"}>Посмотреть каталог (девочки)</Link>
        </div>
      </div>
    </div>
  );
}
