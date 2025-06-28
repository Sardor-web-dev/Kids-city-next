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
      <div className="mt-10 mb-8 flex flex-col text-center">
        <p className="text-2xl font-bold">{t('title')}</p>
        <span className="text-xl font-medium">{t('description')}</span>
      </div>

      <div className="mt-5 hidden gap-6 lg:flex lg:flex-row">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
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
                  className="h-[400px] w-[400px] cursor-pointer rounded-2xl object-cover transition-all hover:scale-105"
                  src={img.src}
                  alt={img.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-10 flex justify-center gap-1">
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer" />
          </div>
        </Carousel>
      </div>

      <div className="flex flex-col items-center lg:hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="relative flex w-full max-w-xs flex-col items-center justify-center"
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i} className="flex justify-center">
                <img
                  className="h-[400px] w-[400px] cursor-pointer rounded-2xl object-cover transition-all hover:scale-105"
                  src={img.src}
                  alt={img.alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="relative mt-10 flex justify-center">
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PhotosSection;
