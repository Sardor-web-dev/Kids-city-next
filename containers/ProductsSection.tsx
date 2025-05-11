import Overview from "@/components/custom/Overview";
import { categories } from "@/utils/categories";

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
        {categories.map((item, i) => (
          <Overview key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
