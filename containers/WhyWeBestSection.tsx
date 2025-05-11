import { advantages } from "@/utils/advantages";

const WhyWeBestSection = () => {
  return (
    <div
      id="why_best"
      className="flex flex-col w-full items-center justify-center mt-20 px-4"
    >
      <div className="flex flex-col gap-2 text-center mb-10">
        <p className="text-4xl font-bold">Почему мы лучшие?</p>
        <span className="text-2xl font-medium">
          Три преимущества нашего магазина
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full max-w-7xl">
        {advantages.map((adv, idx) => {
          const Icon = adv.icon;
          return (
            <div
              key={idx}
              className="flex hover:scale-105 transition-all cursor-pointer flex-col items-center justify-center gap-4 text-center max-w-sm"
            >
              <Icon size={120} />
              <h3 className="text-xl font-semibold">{adv.title}</h3>
              <span className="text-lg text-muted-foreground">
                {adv.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyWeBestSection;
