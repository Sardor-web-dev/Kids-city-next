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
    <div id="clothes" className="mt-16 flex h-full flex-col items-center justify-center gap-12">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-pretty text-4xl font-bold md:text-5xl">{t('ourproducts')}</h2>
        <p className="text-lg font-medium text-foreground/70 md:text-xl">{t('desc')}</p>
      </div>

      <div className="mt-8 hidden w-full gap-8 lg:flex lg:flex-row">
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
      <Button
        onClick={() => router.push('/catalogue')}
        className="hidden h-12 w-48 cursor-pointer rounded-full bg-primary font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 lg:flex"
      >
        {t('button')}
      </Button>

      <div className="flex w-full flex-col items-center lg:hidden">
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
          <Button
            onClick={() => router.push('/catalogue')}
            className="mt-8 h-11 w-40 cursor-pointer rounded-full bg-primary font-bold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {t('button')}
          </Button>

          <div className="relative mt-10 flex justify-center gap-2">
            <CarouselPrevious className="h-10 w-10 cursor-pointer border-border hover:bg-muted" />
            <CarouselNext className="h-10 w-10 cursor-pointer border-border hover:bg-muted" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductSection;
