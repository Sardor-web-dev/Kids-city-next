import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, surname, adress, number, email, payment, items, status, userId } = data;

    const user = await prisma.user.findUnique({
      where: { email: userId || email },
    });
    const total = items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

    const newOrder = await prisma.order.create({
      data: {
        name,
        surname,
        status,
        adress,
        number,
        email,
        payment,
        total,
        items,
        userId: user?.id,
      },
    });

    return NextResponse.json({ success: true, order: newOrder });
  } catch (error) {
    console.error('Ошибка при создании заказа:', error);
    return NextResponse.json(
      { success: false, error: 'Ошибка при создании заказа.' },
      { status: 500 },
    );
  }
}
