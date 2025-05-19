import prisma from "@/lib/prisma";

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-[1250px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Все заказы</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="p-4 border rounded-xl shadow bg-white">
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
              <div>
                <strong>Товары:</strong>
                <pre className="bg-gray-100 p-2 rounded text-xs mt-1 max-h-40 overflow-auto">
                  {JSON.stringify(order.items, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
