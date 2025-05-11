import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PhotosSection = () => {
  const images = [
    { src: "/inside.jpg", alt: "Интерьер магазина" },
    { src: "/polka.jpg", alt: "Полка с товарами" },
    { src: "/main.jpg", alt: "Фасад магазина" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex mt-10 flex-col mb-8 text-center">
        <p className="text-2xl font-bold">Фотографии нашего магазина</p>
        <span className="text-xl font-medium">
          Это фотографии нашего магазина внутри и снаружи
        </span>
      </div>

      {/* Десктоп */}
      <div className="lg:flex hidden lg:flex-row gap-6">
        {images.map((img, i) => (
          <img
            key={i}
            className="w-90 rounded-2xl h-100 hover:scale-105 transition-all cursor-pointer lg:opacity-90 hover:opacity-100"
            src={img.src}
            alt={img.alt}
          />
        ))}
      </div>

      {/* Мобильный слайдер */}
      <div className="lg:hidden flex flex-col items-center">
        <Carousel className="relative flex flex-col items-center justify-center w-full max-w-xs">
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

          {/* Стрелки снизу */}
          <div className="flex justify-center gap-1 mt-10">
            <CarouselPrevious className="relative static cursor-pointer" />
            <CarouselNext className="relative static cursor-pointer" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PhotosSection;
