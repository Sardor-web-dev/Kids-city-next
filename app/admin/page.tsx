import { getTranslations } from "next-intl/server";
import Form from "../../components/custom/NewClient";

export default async function AdminPage() {
  const t = await getTranslations("AdminPage");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl text-center font-bold mb-4">{t("title")}</h1>
      <p className="mb-5 text-center">{t("description")}</p>
      <Form />
    </div>
  );
}
