// app/api/favorites/[clothId]/route.ts

import { auth } from "@/lib/authopt";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { clothId: string } }
) {
  const session = await auth();

  if (!session?.user?.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }

  await prisma.favorites.deleteMany({
    where: {
      userId: user.id,
      clothId: Number(params.clothId),
    },
  });

  return NextResponse.json({ success: true });
}
