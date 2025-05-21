import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQarr = [
  {
    title: "Что мне делать после того как я заказал товар?",
    content:
      "После того как вы сделали заказ, мы свяжемся с вами в течение 24 часов, чтобы подтвердить ваш заказ и обсудить детали доставки.",
  },
  {
    title: "Какая форма оплаты доступна?",
    content:
      "Мы принимаем наличные и безналичные платежи. Вы можете выбрать наиболее удобный для вас способ оплаты при оформлении заказа.",
  },
  {
    title: "Какой срок доставки?",
    content:
      "Срок доставки зависит от вашего местоположения и наличия товара на складе. Обычно доставка занимает от 1 до 5 рабочих дней.",
  },
  {
    title: "Как я могу отменить или изменить свой заказ?",
    content:
      "Вы можете отменить или изменить свой заказ, связавшись с нашей службой поддержки. Пожалуйста, сделайте это как можно скорее, чтобы мы могли обработать ваш запрос.",
  },
  {
    title: "Как я могу отследить свой заказ?",
    content:
      "После отправки вашего заказа мы предоставим вам номер отслеживания, который вы сможете использовать для отслеживания статуса доставки на сайте курьерской службы.",
  },
];

const FAQ = () => {
  return (
    <>
      <div
        id="FAQ"
        className="flex max-w-[350px] mx-auto lg:gap-20 lg:max-w-[1250px] flex-col lg:flex-row lg:items-start items-center justify-center lg:justify-between mt-20 mb-10"
      >
        <p className="lg:text-4xl text-2xl font-black">
          До сих пор есть вопросы?
        </p>
        <div>
          {FAQarr.map((item, i) => (
            <Accordion type="single" collapsible key={i}>
              <AccordionItem value={`item-${i}`}>
                <AccordionTrigger>
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
