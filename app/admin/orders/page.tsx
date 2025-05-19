import prisma from "@/lib/prisma";

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-[1250px] mx-auto flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold mb-4">Все заказы</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="p-4 border rounded shadow">
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
              <strong>Товары:</strong>
            </p>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              {JSON.stringify(order.items, null, 2)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
