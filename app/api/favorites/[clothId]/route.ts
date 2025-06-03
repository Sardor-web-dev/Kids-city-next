// app/api/favorites/[clothId]/route.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { clothId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return new NextResponse("Unauthorized", { status: 401 });

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  await prisma.favorites.deleteMany({
    where: {
      userId: user!.id,
      clothId: Number(params.clothId),
    },
  });

  return NextResponse.json({ success: true });
}
