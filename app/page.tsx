import { useTranslations } from "next-intl";
import ProductSection from "@/containers/ProductsSection";
import AboutSection from "@/containers/AboutSection";
import WhyWeBestSection from "@/containers/WhyWeBestSection";
import PhotosSection from "@/containers/PhotosSection";
import FirstSection from "@/containers/FirstSection";

export default function Home() {

  return (
    <>
      <div className="flex flex-col max-w-[1250px] mx-auto">
        <FirstSection />
        <ProductSection />
        <AboutSection />
        <WhyWeBestSection />
        <PhotosSection />
      </div>
    </>
  );
}
