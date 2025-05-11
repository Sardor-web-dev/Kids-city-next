import Overview from "@/components/custom/Overview";

const ProductSection = () => {
  return (
    <section
      id="clothes"
      className="flex flex-col h-full items-center justify-center gap-30 mt-12"
    >
      <div className="text-center flex flex-col gap-3">
        <h2 className="text-4xl font-bold">Наши товары</h2>
        <span className="text-2xl font-normal">
          Самая лучшая и высококачественная детская одежда в Самарканде!
        </span>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row items-center justify-center lg:gap-10">
        <Overview img="/clothes.jpg" text="одежда для мальчиков" location="/catalogueBoy" />
        <Overview img="/paijamas.jpg" text="одежда для девочек" location="/catalogueGirl" />
      </div>
    </section>
  );
};

export default ProductSection;
