'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useTranslations } from 'next-intl';
const PhotosSection = () => {
  const t = useTranslations('PhotosSection');
  const images = [
    { src: '/inside.jpg', alt: 'Интерьер магазина' },
    { src: '/polka.jpg', alt: 'Полка с товарами' },
    { src: '/main.jpg', alt: 'Фотография внутри' },
    { src: '/paijamas.jpg', alt: 'Фото продукции' },
    { src: '/clothes.jpg', alt: 'Фото одежды' },
    { src: '/shop.png', alt: 'Фото снаружи' },
    { src: '/jeans.jpg', alt: 'Фото брюков' },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16 flex flex-col gap-3 sm:gap-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">{t('title')}</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/50 font-light">{t('description')}</p>
      </div>

      <div className="hidden w-full gap-8 lg:flex lg:flex-row">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: 'start',
            slidesToScroll: 1,
          }}
          className="relative flex w-full flex-col items-center justify-center"
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i} className="flex w-full max-w-[1200px] basis-1/3 items-center">
                <img
                  className="aspect-square h-auto w-full cursor-pointer rounded-3xl object-cover shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
                  src={img.src}
                  alt={img.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-14 flex justify-center gap-3">
            <CarouselPrevious className="h-11 w-11 cursor-pointer rounded-full border-border bg-white hover:bg-muted transition-all" />
            <CarouselNext className="h-11 w-11 cursor-pointer rounded-full border-border bg-white hover:bg-muted transition-all" />
          </div>
        </Carousel>
      </div>

      <div className="flex w-full flex-col items-center lg:hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="relative flex w-full flex-col items-center justify-center"
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i} className="flex justify-center">
                <img
                  className="aspect-square h-auto w-full max-w-[280px] cursor-pointer rounded-3xl object-cover shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-[1.02]"
                  src={img.src}
                  alt={img.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="relative mt-12 flex justify-center gap-3">
            <CarouselPrevious className="h-11 w-11 cursor-pointer rounded-full border-border bg-white hover:bg-muted transition-all" />
            <CarouselNext className="h-11 w-11 cursor-pointer rounded-full border-border bg-white hover:bg-muted transition-all" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PhotosSection;
