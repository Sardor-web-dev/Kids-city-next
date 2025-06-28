import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest, context: { params: Promise<{ clothId: string }> }) {
  const { clothId } = await context.params;

  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return new NextResponse('User not found', { status: 404 });
  }

  await prisma.favorites.deleteMany({
    where: {
      userId: user.id,
      clothId: Number(clothId),
    },
  });

  return NextResponse.json({ success: true });
}
