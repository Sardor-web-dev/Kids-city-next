"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
const PhotosSection = () => {
  const t = useTranslations("PhotosSection");
  const images = [
    { src: "/inside.jpg", alt: "Интерьер магазина" },
    { src: "/polka.jpg", alt: "Полка с товарами" },
    { src: "/main.jpg", alt: "Фотография внутри" },
    { src: "/paijamas.jpg", alt: "Фото продукции" },
    { src: "/clothes.jpg", alt: "Фото одежды" },
    { src: "/shop.png", alt: "Фото снаружи" },
    { src: "/jeans.jpg", alt: "Фото брюков" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex mt-10 flex-col mb-8 text-center">
        <p className="text-2xl font-bold">{t("title")}</p>
        <span className="text-xl font-medium">{t("description")}</span>
      </div>

      <div className="lg:flex mt-5 hidden lg:flex-row gap-6">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
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

      <div className="lg:hidden flex flex-col items-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
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

          <div className="flex relative justify-center mt-10">
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PhotosSection;
