import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: any // <-- string, не number!
) {
  try {
    const clothId = parseInt(params.id); // Преобразуй в число

    await prisma.cloth.delete({ where: { id: clothId } });

    return NextResponse.json({ message: "Товар удалён" });
  } catch (error) {
    console.error("Ошибка удаления:", error); // ← это поможет отладке
    return NextResponse.json({ error: "Ошибка удаления" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: any) {
  try {
    const clothId = parseInt(params.id);
    const body = await req.json();
    const { name, description, price, imageUrl } = body;

    const updated = await prisma.cloth.update({
      where: { id: clothId },
      data: {
        name,
        description,
        price,
        Image: imageUrl,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Ошибка обновления:", error);
    return NextResponse.json({ error: "Ошибка обновления" }, { status: 500 });
  }
}
