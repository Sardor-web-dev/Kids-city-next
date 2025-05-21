import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <>
      <div id="FAQ" className="flex items-start justify-between mt-20 mb-10">
        <p className="text-4xl font-black">До сих пор есть вопросы?</p>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p className="text-2xl font-bold">
                  Что мне делать после того как я заказал товар?
                </p>
              </AccordionTrigger>
              <AccordionContent className="max-w-[400px]">
                <p className="text-xl">
                  После того как вы сделали заказ, мы свяжемся с вами в течение
                  24 часов, чтобы подтвердить ваш заказ и обсудить детали
                  доставки.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <p className="text-2xl font-bold">
                    Какая форма оплаты доступна?
                </p>
              </AccordionTrigger>
              <AccordionContent className="max-w-[400px]">
                <p className="text-xl">
                    Мы принимаем наличные и безналичные платежи. Вы можете
                    выбрать наиболее удобный для вас способ оплаты при оформлении
                    заказа.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <p className="text-2xl font-bold">
                    Какой срок доставки?
                </p>
              </AccordionTrigger>
              <AccordionContent className="max-w-[400px]">
                <p className="text-xl">
                    Срок доставки зависит от вашего местоположения и наличия
                    товара на складе. Обычно доставка занимает от 1 до 5 рабочих
                    дней.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <p className="text-2xl font-bold">
                    Как я могу отменить или изменить свой заказ?
                </p>
              </AccordionTrigger>
              <AccordionContent className="max-w-[400px]">
                <p className="text-xl">
                    Вы можете отменить или изменить свой заказ, связавшись с
                    нашей службой поддержки. Пожалуйста, сделайте это как можно
                    скорее, чтобы мы могли обработать ваш запрос.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <p className="text-2xl font-bold">
                    Как я могу отследить свой заказ?
                </p>
              </AccordionTrigger>
              <AccordionContent className="max-w-[400px]">
                <p className="text-xl">
                    После отправки вашего заказа мы предоставим вам номер
                    отслеживания, который вы сможете использовать для отслеживания
                    статуса доставки на сайте курьерской службы.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FAQ;
