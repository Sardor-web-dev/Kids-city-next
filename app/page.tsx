import ProductSection from '@/containers/ProductsSection';
import AboutSection from '@/containers/AboutSection';
import WhyWeBestSection from '@/containers/WhyWeBestSection';
import PhotosSection from '@/containers/PhotosSection';
import FirstSection from '@/containers/FirstSection';
import FAQ from '@/containers/FAQ';
import FadeInSection from '@/components/animations/FadeInSection'; // новый компонент

export default function Home() {
  return (
    <div className="w-full bg-background pb-24 lg:pb-0">
      <div className="mx-auto flex max-w-[1250px] flex-col gap-20 px-3 py-6 sm:gap-28 sm:px-4 sm:py-8 md:gap-32 md:py-10 lg:gap-40 lg:py-12">
        <FadeInSection delay={0.1}>
          <FirstSection />
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <ProductSection />
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <AboutSection />
        </FadeInSection>
        <FadeInSection delay={0.4}>
          <WhyWeBestSection />
        </FadeInSection>
        <FadeInSection delay={0.5}>
          <FAQ />
        </FadeInSection>
        <FadeInSection delay={0.6}>
          <PhotosSection />
        </FadeInSection>
      </div>
    </div>
  );
}
