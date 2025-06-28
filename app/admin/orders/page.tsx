import OrderCard from '@/components/custom/OrderCard';
import { prisma } from '@/lib/prisma';

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="mx-auto max-w-[1250px] px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Все заказы</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
