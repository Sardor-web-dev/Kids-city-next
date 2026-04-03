import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';

const FAQ = () => {
  const t = useTranslations('FAQ');

  const FAQarr = [
    {
      title: t('item1.title'),
      content: t('item1.content'),
    },
    {
      title: t('item2.title'),
      content: t('item2.content'),
    },
    {
      title: t('item3.title'),
      content: t('item3.content'),
    },
    {
      title: t('item4.title'),
      content: t('item4.content'),
    },
    {
      title: t('item5.title'),
      content: t('item5.content'),
    },
  ];
  return (
    <>
      <div
        id="FAQ"
        className="mx-auto mt-20 mb-10 flex w-full max-w-[1250px] flex-col items-start justify-start gap-12 px-4"
      >
        <div className="w-full">
          <h2 className="text-pretty text-3xl font-bold md:text-4xl">{t('title')}</h2>
        </div>
        <div className="w-full space-y-3">
          {FAQarr.map((item, i) => (
            <Accordion type="single" collapsible key={i}>
              <AccordionItem value={`item-${i}`} className="border-b border-border px-4 py-2">
                <AccordionTrigger className="cursor-pointer py-4 text-left hover:no-underline">
                  <p className="text-lg font-semibold text-foreground md:text-xl">{item.title}</p>
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-4 pt-2 text-base leading-relaxed text-foreground/80 md:text-lg">
                  {item.content}
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
