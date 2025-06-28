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

'use client';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import Autoscroll from 'embla-carousel-auto-scroll';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
const ProductSection = () => {
  const t = useTranslations('HomePage');
  const images = [
    { src: '/boy.jpg', alt: 'Одежда для мальчиков' },
    { src: '/girl.jpg', alt: 'Одежда для девочек' },
    { src: '/boy&girl.jpg', alt: 'Одежда для мальчиков и девочек' },
    { src: '/caps.jpg', alt: 'Фото кепок' },
    { src: '/combo2jpg.jpg', alt: 'Комбо для девочек' },
    { src: '/dress.jpg', alt: 'Платье для девочек' },
    { src: '/whitejpg.jpg', alt: 'Одежда для девочек' },
    { src: '/look.jpg', alt: 'Платье для девочек' },
    { src: '/combo.jpg', alt: 'Комбо для девочек' },
  ];

  const router = useRouter();
  return (
    <div id="clothes" className="mt-12 flex h-full flex-col items-center justify-center gap-10">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-4xl font-bold">{t('ourproducts')}</p>
        <span className="text-2xl font-normal">{t('desc')}</span>
      </div>

      <div className="mt-5 hidden gap-6 lg:flex lg:flex-row">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoscroll({
              speed: 2,
              direction: 'forward',
              playOnInit: true,
              startDelay: 1000,
            }),
          ]}
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
      <Button
        onClick={() => router.push('/catalogue')}
        variant={'outline'}
        className="lg:text-md hidden h-[40px] w-[130px] cursor-pointer rounded-md border-1 border-black bg-gray-800 font-medium text-white lg:flex lg:h-[50px] lg:w-[200px] lg:rounded-lg lg:font-bold"
      >
        {t('button')}
      </Button>

      <div className="flex flex-col items-center lg:hidden">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({
              speed: 2,
              direction: 'forward',
              playOnInit: true,
              startDelay: 1000,
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
          <Button
            onClick={() => router.push('/catalogue')}
            variant={'outline'}
            className="mt-5 h-[40px] w-[130px] cursor-pointer rounded-md border-1 border-black bg-gray-800 font-medium text-white lg:hidden"
          >
            {t('button')}
          </Button>

          <div className="relative mt-10 flex justify-center">
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductSection;
