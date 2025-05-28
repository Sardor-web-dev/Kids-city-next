import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { NextRequest } from "next/server";

export async function PATCH(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").slice(-2, -1)[0]; // Получаем ID из URL

    const { status } = await request.json();

    if (!["process", "done", "canceled"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const updated = await prisma.order.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ success: true, order: updated });
  } catch (error) {
    console.error("Ошибка при обновлении статуса:", error);
    return NextResponse.json(
      { success: false, error: "Ошибка при обновлении" },
      { status: 500 }
    );
  }
}
