'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';
import { useSession } from 'next-auth/react';

const OrderModal = ({ totalPrice }: { totalPrice: number }) => {
  const t = useTranslations('CartPage');
  const [open, setOpen] = useState(false);
  const [ordered, setOrdered] = useState(false);
  const [payment, setPayment] = useState('');
  const { data: session } = useSession();
  const userId = session?.user?.email; // или email, если id нет
  const { items, clearCart } = useCart();

  const data = [
    { name: t('name'), type: 'text', identifier: 'name' },
    { name: t('surname'), type: 'text', identifier: 'surname' },
    { name: t('adress'), type: 'text', identifier: 'adress' },
    { name: t('number'), type: 'number', identifier: 'number' },
    { name: t('email'), type: 'email', identifier: 'email' },
  ];
  const order = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fm = new FormData(e.currentTarget);
    const name = fm.get('name');
    const surname = fm.get('surname');
    const adress = fm.get('adress');
    const number = fm.get('number');
    const email = fm.get('email');

    const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
    const CHAT_IDS = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_IDS?.split(',') || [];
    const orderNumber = `ORDER-${Date.now()}`;

    if (!name || !surname || !adress || !number || !email || !payment) {
      toast('Пожалуйста, заполните все поля.');
      setOrdered(false);
      return;
    }

    await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        surname,
        adress,
        number,
        email,
        payment,
        items,
        userId,
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
📏 Размер: ${item.selectedSize} см
👤 Владелец: ${name}  ${surname}
          `;

          await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendPhoto`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: chatId,
              photo: item.Image,
              caption: caption,
              parse_mode: 'Markdown',
            }),
          });
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

        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        });
      }
      setOpen(false);
      toast('Заказ отправлен!');
      clearCart();
      setOrdered(false);
    } catch (error) {
      console.error('Ошибка отправки заказа:', error);
      toast('Ошибка отправки заказа.');
      setOrdered(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="lg:text-md h-[40px] w-[130px] cursor-pointer rounded-md border-1 border-black bg-gray-800 font-medium text-white lg:h-[50px] lg:w-[200px] lg:rounded-lg lg:font-bold"
          >
            {t('button')}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t('dialogTitle')}</DialogTitle>
            <DialogDescription>{t('dialogDescription')}</DialogDescription>
          </DialogHeader>
          <form onSubmit={order} className="flex flex-col gap-4">
            {data.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-4">
                <Label className="text-right">{item.name}</Label>
                <Input
                  id={item.name}
                  name={item.identifier}
                  type={item.type}
                  className="w-[170px] lg:w-[220px]"
                />
              </div>
            ))}
            <div className="flex items-center justify-between gap-4">
              <Label className="text-right">{t('payment')}</Label>
              <Select value={payment} onValueChange={setPayment}>
                <SelectTrigger className="w-[220px] rounded-lg border lg:w-[300px]">
                  <SelectValue placeholder="Способ оплаты" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Наличные</SelectItem>
                  <SelectItem value="cart">Карта</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              {!ordered ? (
                <Button className="cursor-pointer" onClick={() => setOrdered(true)} type="submit">
                  Заказать
                </Button>
              ) : (
                <Button className="cursor-no-drop">Отправляем заказ...</Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderModal;
