import ProductSection from "@/containers/ProductsSection";
import AboutSection from "@/containers/AboutSection";
import WhyWeBestSection from "@/containers/WhyWeBestSection";
import PhotosSection from "@/containers/PhotosSection";
import FirstSection from "@/containers/FirstSection";
import FAQ from "@/containers/FAQ";
import FadeInSection from "@/components/animations/FadeInSection"; // новый компонент

export default function Home() {
  return (
    <div className="flex flex-col pl-2 pr-2 max-w-[1250px] mx-auto">
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
  );
}
