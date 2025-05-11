import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, description, Image, Price, Size, gender} =
    await request.json();

  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin: any = await prisma.admin.findUnique({
    where: {
      email: session.user?.email || "",
    },
  });
  if (!admin) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (!name || !description) {
    return NextResponse.json(
      { error: "Title and content are required" },
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
        authorId: admin.id
      },
    });

    return NextResponse.json(cloth, { status: 201 });
  } catch (error) {
    console.error("Server error:", error); 
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
