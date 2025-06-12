"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function OrderCard({ order }: { order: any }) {
  const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);

  const clothes =
    typeof order.items === "string" ? JSON.parse(order.items) : order.items;

  const updateStatus = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/orders/${order.id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Ошибка при обновлении");
      toast.success("Статус обновлён");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-2xl shadow-md bg-white dark:bg-zinc-900 p-6 space-y-6 transition hover:shadow-lg">
      <div className="grid gap-1 text-sm text-zinc-800 dark:text-zinc-200">
        <p>
          <span className="font-semibold">👤 Клиент:</span> {order.name}{" "}
          {order.surname}
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
          <span className="font-semibold">💰 Сумма:</span>{" "}
          <span className="text-green-600 font-bold">
            {order.total.toLocaleString()} сум
          </span>
        </p>
        <p>
          <span className="font-semibold">📦 Статус:</span>{" "}
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
              ${
                status === "done"
                  ? "bg-green-100 text-green-700"
                  : status === "canceled"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-800"
              }`}
          >
            {status === "done"
              ? "Завершён"
              : status === "canceled"
              ? "Отменён"
              : "В процессе"}
          </span>
        </p>
      </div>

      <div>
        <p className="font-semibold text-sm mb-2">🛒 Товары:</p>
        <ul className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg max-h-56 overflow-y-auto space-y-3 text-sm">
          {clothes.map((item: any, index: number) => (
            <li
              key={index}
              className="flex items-center gap-3 border-b pb-2 last:border-b-0"
            >
              <img
                src={item.Image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-md border"
              />
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-zinc-500">
                  Кол-во: x{item.quantity}
                </p>
              </div>
              <span className="text-xs font-semibold">
                {item.price?.toLocaleString()} сум
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="process">В процессе</option>
          <option value="done">Завершён</option>
          <option value="canceled">Отменён</option>
        </select>

        <button
          onClick={updateStatus}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md disabled:opacity-50 transition"
        >
          {loading ? "Сохраняю..." : "Обновить"}
        </button>
      </div>
    </div>
  );
}
