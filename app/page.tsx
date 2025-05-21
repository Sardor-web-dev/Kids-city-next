import ProductSection from "@/containers/ProductsSection";
import AboutSection from "@/containers/AboutSection";
import WhyWeBestSection from "@/containers/WhyWeBestSection";
import PhotosSection from "@/containers/PhotosSection";
import FirstSection from "@/containers/FirstSection";
import FAQ from "@/containers/FAQ";

export default function Home() {
  return (
    <>
      <div className="flex flex-col pl-2 pr-2 max-w-[1250px] mx-auto">
        <FirstSection />
        <ProductSection />
        <AboutSection />
        <WhyWeBestSection />
        <FAQ />
        <PhotosSection />
      </div>
    </>
  );
}
