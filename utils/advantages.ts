import { RiDiscountPercentFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { Advantage } from "@/types/advantage";

export const advantages: Advantage[] = [
  {
    icon: GiClothes,
    title: "Высококачественная импортная одежда",
    description:
      "У нас широкий ассортимент высококачественной одежды по хорошим ценам из Китая, США и Турции.",
  },
  {
    icon: TbTruckDelivery,
    title: "Доставка по всей Республике",
    description:
      "Нашу одежду можно заказывать онлайн, приехать в магазин и примерить понравившуюся вещь. Доступна доставка по всей республике и за её пределами.",
  },
  {
    icon: RiDiscountPercentFill,
    title: "Постоянные скидки и акции",
    description:
      "У нас часто проводятся акции и скидки по праздникам и при покупке от двух вещей и более.",
  },
];
