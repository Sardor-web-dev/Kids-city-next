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
      <div className="mt-12 mb-10 flex flex-col gap-3 text-center">
        <h2 className="text-pretty text-3xl font-bold md:text-4xl">{t('title')}</h2>
        <p className="text-lg font-medium text-foreground/70 md:text-xl">{t('description')}</p>
      </div>

      <div className="mt-8 hidden w-full gap-8 lg:flex lg:flex-row">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
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
                  className="aspect-square h-auto w-full cursor-pointer rounded-2xl object-cover shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  src={img.src}
                  alt={img.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-12 flex justify-center gap-2">
            <CarouselPrevious className="h-10 w-10 cursor-pointer border-border hover:bg-muted" />
            <CarouselNext className="h-10 w-10 cursor-pointer border-border hover:bg-muted" />
          </div>
        </Carousel>
      </div>

      <div className="flex w-full flex-col items-center lg:hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="relative flex w-full flex-col items-center justify-center"
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i} className="flex justify-center">
                <img
                  className="aspect-square h-auto w-full max-w-[300px] cursor-pointer rounded-2xl object-cover shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  src={img.src}
                  alt={img.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="relative mt-10 flex justify-center gap-2">
            <CarouselPrevious className="h-10 w-10 cursor-pointer border-border hover:bg-muted" />
            <CarouselNext className="h-10 w-10 cursor-pointer border-border hover:bg-muted" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PhotosSection;
