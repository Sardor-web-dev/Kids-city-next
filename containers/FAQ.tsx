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
        className="mx-auto mt-20 mb-10 flex max-w-[350px] flex-col items-center justify-center lg:max-w-[1250px] lg:flex-row lg:items-start lg:justify-between lg:gap-20"
      >
        <p className="text-2xl font-black lg:text-4xl">{t('title')}</p>
        <div>
          {FAQarr.map((item, i) => (
            <Accordion type="single" collapsible key={i}>
              <AccordionItem value={`item-${i}`}>
                <AccordionTrigger className="cursor-pointer">
                  <p className="text-lg font-bold lg:text-2xl">{item.title}</p>
                </AccordionTrigger>
                <AccordionContent className="max-w-[200px lg:max-w-[400px]">
                  <p className="text-md lg:text-xl">{item.content}</p>
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
