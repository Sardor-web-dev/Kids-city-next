// app/api/favorites/add/route.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return new NextResponse("Unauthorized", { status: 401 });

  const { clothId } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const exists = await prisma.favorites.findFirst({
    where: { userId: user?.id, clothId },
  });

  if (exists) {
    return new NextResponse("Already exists", { status: 400 });
  }

  const favorite = await prisma.favorites.create({
    data: {
      userId: user!.id,
      clothId,
    },
  });

  return NextResponse.json(favorite);
}
