import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("FAQ");

  const FAQarr = [
    {
      title: t("item1.title"),
      content: t("item1.content"),
    },
    {
      title: t("item2.title"),
      content: t("item2.content"),
    },
    {
      title: t("item3.title"),
      content: t("item3.content"),
    },
    {
      title: t("item4.title"),
      content: t("item4.content"),
    },
    {
      title: t("item5.title"),
      content: t("item5.content"),
    },
  ];
  return (
    <>
      <div
        id="FAQ"
        className="flex max-w-[350px] mx-auto lg:gap-20 lg:max-w-[1250px] flex-col lg:flex-row lg:items-start items-center justify-center lg:justify-between mt-20 mb-10"
      >
        <p className="lg:text-4xl text-2xl font-black">{t("title")}</p>
        <div>
          {FAQarr.map((item, i) => (
            <Accordion type="single" collapsible key={i}>
              <AccordionItem value={`item-${i}`}>
                <AccordionTrigger className=" cursor-pointer">
                  <p className="lg:text-2xl text-lg font-bold">{item.title}</p>
                </AccordionTrigger>
                <AccordionContent className="lg:max-w-[400px] max-w-[200px">
                  <p className="lg:text-xl text-md">{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
