import Overview from "@/components/custom/Overview";

const ProductSection = () => {
  return (
    <>
      <div
        id="clothes"
        className="flex flex-col items-center justify-center gap-30 mt-12"
      >
        <div className="text-center flex flex-col gap-3">
          <p className="text-4xl font-bold">Наши товары</p>
          <span className="text-2xl font-normal">
            Самая лучшая и высококачественная детская одежда в Самарканде!
          </span>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Overview img="/clothes.jpg" text="одежда для мальчиков" />
          <Overview img="/paijamas.jpg" text="одежда для девочек" />
        </div>
      </div>
    </>
  );
};

export default ProductSection;
