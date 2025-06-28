import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: any) {
  try {
    const cloth = await prisma.cloth.findMany();

    if (!cloth) {
      return NextResponse.json({ error: 'Товар не найден' }, { status: 404 });
    }

    return NextResponse.json(cloth);
  } catch (error) {
    console.error('Ошибка получения товара:', error);
    return NextResponse.json({ error: 'Ошибка получения товара' }, { status: 500 });
  }
}
