import { getTranslations } from "next-intl/server";
import Form from "./NewClient";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function AdminPage() {
  const t = await getTranslations("AdminPage");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl text-center font-bold mb-4">{t("title")}</h1>
      <p className="mb-5 text-center">{t("description")}</p>
      <div className="w-full flex justify-end gap-4 items-center">
        <Link className="text-xl max-w-[215px] font-bold" href="/admin/orders">
          Перейти к заказам
        </Link>
        <FaArrowRight size={24} className="cursor-pointer" />
      </div>
      <Form />
    </div>
  );
}
