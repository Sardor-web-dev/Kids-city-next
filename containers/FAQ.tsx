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
        className="flex w-full flex-col items-start justify-start gap-10 sm:gap-12 md:gap-14 lg:gap-16"
      >
        <div className="w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">{t('title')}</h2>
        </div>
        <div className="w-full space-y-2 sm:space-y-2.5 md:space-y-3">
          {FAQarr.map((item, i) => (
            <Accordion type="single" collapsible key={i}>
              <AccordionItem value={`item-${i}`} className="border-b border-border/20 px-3 sm:px-4 md:px-6 py-0.5">
                <AccordionTrigger className="cursor-pointer py-4 sm:py-5 md:py-6 text-left hover:no-underline transition-all duration-300 hover:text-primary group">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-4 sm:pb-5 md:pb-6 pt-3 sm:pt-4 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-foreground/55 font-light">
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
