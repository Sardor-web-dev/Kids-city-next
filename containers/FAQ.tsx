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
        className="flex w-full flex-col items-start justify-start gap-14"
      >
        <div className="w-full">
          <h2 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">{t('title')}</h2>
        </div>
        <div className="w-full space-y-2">
          {FAQarr.map((item, i) => (
            <Accordion type="single" collapsible key={i}>
              <AccordionItem value={`item-${i}`} className="border-b border-border/40 px-6 py-1">
                <AccordionTrigger className="cursor-pointer py-5 text-left hover:no-underline transition-colors hover:text-primary">
                  <p className="text-lg font-semibold text-foreground md:text-xl">{item.title}</p>
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-5 pt-3 text-base leading-relaxed text-foreground/60 md:text-lg font-light">
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
