"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function OrderCard({ order }: { order: any }) {
  const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);

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
      toast("Статус обновлен");
    } catch (error: any) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow bg-white">
      <div className="space-y-2 text-sm sm:text-base">
        <p>
          <strong>Имя:</strong> {order.name} {order.surname}
        </p>
        <p>
          <strong>Номер:</strong> {order.number}
        </p>
        <p>
          <strong>Адрес:</strong> {order.adress}
        </p>
        <p>
          <strong>Сумма:</strong> {order.total} сум
        </p>
        <p>
          <strong>Оплата:</strong> {order.payment}
        </p>
        <p>
          <strong>Статус:</strong> {order.status}
        </p>
        <div>
          <strong>Товары:</strong>
          <pre className="bg-gray-100 p-2 rounded text-xs mt-1 max-h-40 overflow-auto">
            {JSON.stringify(order.items, null, 2)}
          </pre>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="process">В процессе</option>
            <option value="done">Завершён</option>
            <option value="canceled">Отменён</option>
          </select>
          <button
            onClick={updateStatus}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
          >
            {loading ? "Сохраняю..." : "Обновить"}
          </button>
        </div>
      </div>
    </div>
  );
}
