'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function OrderCard({ order }: { order: any }) {
  const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);

  const clothes = typeof order.items === 'string' ? JSON.parse(order.items) : order.items;

  const updateStatus = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/orders/${order.id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Ошибка при обновлении');
      toast.success('Статус обновлён');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 rounded-2xl border bg-white p-6 shadow-md transition hover:shadow-lg dark:bg-zinc-900">
      <div className="grid gap-1 text-sm text-zinc-800 dark:text-zinc-200">
        <p>
          <span className="font-semibold">👤 Клиент:</span> {order.name} {order.surname}
        </p>
        <p>
          <span className="font-semibold">📞 Телефон:</span> {order.number}
        </p>
        <p>
          <span className="font-semibold">🏠 Адрес:</span> {order.adress}
        </p>
        <p>
          <span className="font-semibold">💳 Оплата:</span> {order.payment}
        </p>
        <p>
          <span className="font-semibold">💰 Сумма:</span>{' '}
          <span className="font-bold text-green-600">{order.total.toLocaleString()} сум</span>
        </p>
        <p>
          <span className="font-semibold">📦 Статус:</span>{' '}
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
              status === 'done'
                ? 'bg-green-100 text-green-700'
                : status === 'canceled'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {status === 'done' ? 'Завершён' : status === 'canceled' ? 'Отменён' : 'В процессе'}
          </span>
        </p>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold">🛒 Товары:</p>
        <ul className="max-h-56 space-y-3 overflow-y-auto rounded-lg bg-zinc-100 p-3 text-sm dark:bg-zinc-800">
          {clothes.map((item: any, index: number) => (
            <li key={index} className="flex items-center gap-3 border-b pb-2 last:border-b-0">
              <img
                src={item.Image}
                alt={item.name}
                className="h-12 w-12 rounded-md border object-cover"
              />
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-zinc-500">Кол-во: x{item.quantity}</p>
              </div>
              <span className="text-xs font-semibold">{item.price?.toLocaleString()} сум</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950"
        >
          <option value="process">В процессе</option>
          <option value="done">Завершён</option>
          <option value="canceled">Отменён</option>
        </select>

        <button
          onClick={updateStatus}
          disabled={loading}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Сохраняю...' : 'Обновить'}
        </button>
      </div>
    </div>
  );
}
