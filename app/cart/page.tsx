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
import { useCart } from "@/contexts/CartContext";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const t = useTranslations("CartPage");
  const { items, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [payment, setPayment] = useState("");
  const [open, setOpen] = useState(false);
  const [ordered, setOrdered] = useState(false);

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
    const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
    const CHAT_IDS =
      process.env.NEXT_PUBLIC_TELEGRAM_CHAT_IDS?.split(",") || [];
    const orderNumber = `ORDER-${Date.now()}`;

    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        surname,
        adress,
        number,
        email,
        payment,
        items, // массив товаров
      }),
    });

    try {
      for (const chatId of CHAT_IDS) {
        for (const item of items) {
          const caption = `
🧾 Заказ: ${orderNumber}
👕 Товар: ${item.name}
🔢 Кол-во: ${item.quantity}
💵 Цена: ${(item.price * item.quantity).toLocaleString()} сум
👤 Владелец: ${name}  ${surname}
          `;

          await fetch(
            `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendPhoto`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                chat_id: chatId,
                photo: item.Image,
                caption: caption,
                parse_mode: "Markdown",
              }),
            }
          );
        }

        // Отправка общего сообщения о заказе после фоток
        const message = `
🧾 Заказ: ${orderNumber}
👤 Имя: ${name}
👤 Фамилия: ${surname}
🏠 Адрес: ${adress}
📞 Телефон: +998${number}
📧 Email: ${email}
💳 Оплата: ${payment}
💰 Сумма: ${totalPrice.toLocaleString()} сум

Перейдите по ссылке для управления заказом: https://www.kidscity.uz/admin/orders

Перейдите по ссылке для создания товаров: https://www.kidscity.uz/admin
        `;

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
      setOpen(false);
      alert("Заказ отправлен!");
      clearCart();
      setOrdered(false);
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
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold">{t("empty")}</h2>
          <div className="flex items-center gap-10">
            <Link
              href={"/catalogueBoy"}
              className="text-lg text-blue-500 hover:underline"
            >
              {t("link")}
            </Link>
            <Link
              href={"/catalogueGirl"}
              className="text-lg text-pink-500 hover:underline"
            >
              {t("link")}
            </Link>
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
            <p className="lg:text-2xl text-lg font-bold">
              {t("price")} {totalPrice.toLocaleString()} {t("priceValue")}
            </p>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="cursor-pointer lg:w-[200px] lg:h-[50px] w-[130px] h-[40px] border-1 lg:rounded-lg rounded-md border-black bg-gray-800 text-white font-medium lg:text-md lg:font-bold"
                >
                  {t("button")}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{t("dialogTitle")}</DialogTitle>
                  <DialogDescription>
                    {t("dialogDescription")}
                  </DialogDescription>
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
                        className="lg:w-[220px] w-[170px]"
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
                    {!ordered ? (
                      <Button onClick={() => setOrdered(true)} type="submit">
                        Заказать
                      </Button>
                    ) : (
                      <Button>Отправляем заказ...</Button>
                    )}
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </div>
  );
}
