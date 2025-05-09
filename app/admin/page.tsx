import { getTranslations } from "next-intl/server";
import Form from "./NewClient";
// import Home from "./uploadExample";

export default async function AdminPage() {
  const t = await getTranslations("AdminPage");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-2">{t("description")}</p>
      <Form />
      {/* <Home/> */}
    </div>
  );
}
