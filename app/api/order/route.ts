import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const { userEmail, items } = body;
  const total = items.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const order = await prisma.order.create({
    data: {
      userEmail,
      total,
      items: {
        create: items.map((item: any) => ({
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),
      },
    },
    include: { items: true },
  });

  return NextResponse.json(order);
}
