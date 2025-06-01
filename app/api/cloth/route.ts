import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, description, Image, gender, price, size } = await request.json();

  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = await prisma.user.findUnique({
    where: {
      email: session.user?.email || "",
    },
  });

  if (!admin) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (!name || !description || !Image || !gender || !price || !size) {
    return NextResponse.json(
      {
        error: "Все поля обязательны: name, description, Image, gender, price",
      },
      { status: 400 }
    );
  }

  try {
    const cloth = await prisma.cloth.create({
      data: {
        name,
        description,
        Image,
        gender,
        price,
        size,
        author: {
          connect: {
            id: admin.id,
          },
        },
      },
    });

    return NextResponse.json(cloth, { status: 201 });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Failed to create cloth item" },
      { status: 500 }
    );
  }
}
