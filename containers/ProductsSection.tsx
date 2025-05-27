// import Overview from "@/components/custom/Overview";
// import { getTranslations } from "next-intl/server";

// export default async function ProductSection() {
//   const t = await getTranslations("HomePage");
//   const t2 = await getTranslations("OverviewComponent");
//   const categories = [
//     {
//       img: "/clothes.jpg",
//       text: t2("boy"),
//       location: "/catalogue?gender=boy",
//     },
//     {
//       img: "/paijamas.jpg",
//       text: t2("girl"),
//       location: "/catalogue?gender=girl",
//     },
//   ];
//   return (
//     <div
//       id="clothes"
//       className="flex flex-col h-full items-center justify-center gap-10 mt-12"
//     >
//       <div className="text-center flex flex-col gap-3">
//         <p className="text-4xl font-bold">{t("ourproducts")}</p>
//         <span className="text-2xl font-normal">{t("desc")}</span>
//       </div>
//       <div className="flex flex-col gap-10 lg:flex-row items-center justify-center lg:gap-10">
//         {categories.map((item, i) => (
//           <Overview key={i} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoscroll from "embla-carousel-auto-scroll";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
const ProductSection = () => {
  const t = useTranslations("HomePage");
  const images = [
    { src: "/boy.jpg", alt: "Одежда для мальчиков" },
    { src: "/girl.jpg", alt: "Одежда для девочек" },
    { src: "/boy&girl.jpg", alt: "Одежда для мальчиков и девочек" },
    { src: "/caps.jpg", alt: "Фото кепок" },
    { src: "/combo2jpg.jpg", alt: "Комбо для девочек" },
    { src: "/dress.jpg", alt: "Платье для девочек" },
    { src: "/whitejpg.jpg", alt: "Одежда для девочек" },
    { src: "/look.jpg", alt: "Платье для девочек" },
    { src: "/combo.jpg", alt: "Комбо для девочек" },
  ];

  const router = useRouter();
  return (
    <div
      id="clothes"
      className="flex flex-col h-full items-center justify-center gap-10 mt-12"
    >
      <div className="text-center flex flex-col gap-3">
        <p className="text-4xl font-bold">{t("ourproducts")}</p>
        <span className="text-2xl font-normal">{t("desc")}</span>
      </div>

      <div className="lg:flex mt-5 hidden lg:flex-row gap-6">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoscroll({
              speed: 2,
              direction: "forward",
              playOnInit: true,
              startDelay: 1000,
            }),
          ]}
          className="relative flex flex-col items-center justify-center w-full"
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem
                key={i}
                className="basis-1/3 w-full flex items-center max-w-[1200px]"
              >
                <img
                  className="w-[400px] h-[400px] object-cover rounded-2xl hover:scale-105 transition-all cursor-pointer"
                  src={img.src}
                  alt={img.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-1 mt-10">
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer" />
          </div>
        </Carousel>
      </div>
      <Button
        onClick={() => router.push("/catalogue")}
        variant={"outline"}
        className="cursor-pointer hidden lg:flex lg:w-[200px] lg:h-[50px] w-[130px] h-[40px] border-1 lg:rounded-lg rounded-md border-black bg-gray-800 text-white font-medium lg:text-md lg:font-bold"
      >
        {t("button")}
      </Button>

      <div className="lg:hidden flex flex-col items-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({
              speed: 2,
              direction: "forward",
              playOnInit: true,
              startDelay: 1000,
            }),
          ]}
          className="relative flex flex-col items-center justify-center w-full max-w-xs"
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i} className="flex justify-center">
                <img
                  className="w-[400px] h-[400px] object-cover rounded-2xl hover:scale-105 transition-all cursor-pointer"
                  src={img.src}
                  alt={img.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <Button
            onClick={() => router.push("/catalogue")}
            variant={"outline"}
            className="cursor-pointer mt-5 lg:hidden w-[130px] h-[40px] border-1 rounded-md border-black bg-gray-800 text-white font-medium "
          >
            {t("button")}
          </Button>

          <div className="flex relative justify-center mt-10">
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductSection;
