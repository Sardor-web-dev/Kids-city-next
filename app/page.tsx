"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="">
        <div className="bg-[url('https://avatars.mds.yandex.net/get-altay/15223195/2a00000194ab8c65ded07e225b5837097cdf/orig')] w-full h-150 bg-cover">
          <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            <p className="text-white font-bold text-5xl text-center">
              Kids City – ваш надежный магазин качественной детской одежды!
            </p>
            <span className="text-white font-medium text-2xl text-center">
              👕 Мы предлагаем широкий ассортимент стильной и удобной одежды для
              детей всех
              <br /> возрастов, от малышей до подростков. Каждый предмет
              подобран с любовью, чтобы ваш
              <br /> ребенок чувствовал себя комфортно и выглядел на все 100!{" "}
              <br />
            </span>
          </div>
        </div>
        {/* products */}
        <div className="flex flex-col items-center justify-center gap-30 mt-12">
          <div className="text-center flex flex-col gap-3">
            <p className="text-4xl font-bold">Наши товары</p>
            <span className="text-2xl font-normal">
              Самая лучшая и высококачественная детская одежда в Самарканде!
            </span>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div className="flex flex-col w-100 h-120 items-center justify-center gap-4">
              <div className="flex flex-col gap-5 items-center justify-center">
                <img
                  className="rounded-2xl hover:scale-105 transition-all cursor-pointer"
                  src="/clothes.jpg"
                  alt=""
                />
                <p className="text-blue-600">одежда для мальчиков</p>
              </div>
              <Button
                onClick={() => router.push("/catalog")}
                className="cursor-pointer"
              >
                Посмотреть в каталоге
              </Button>
            </div>
            <div className="flex w-100 h-120  flex-col items-center justify-center gap-4">
              <div className="flex flex-col gap-5 items-center justify-center">
                <img
                  className="rounded-2xl hover:scale-105 transition-all cursor-pointer"
                  src="/paijamas.jpg"
                  alt=""
                />
                <p className="text-pink-400">одежда для девочек</p>
              </div>
              <Button
                onClick={() => router.push("/catalog")}
                className="cursor-pointer"
              >
                Посмотреть в каталоге
              </Button>
            </div>
          </div>
        </div>

        {/* about us */}

        <div className="mt-50 flex items-center justify-center gap-20">
          <div className="text-left max-w-110 h-155 flex flex-col gap-5">
            <p className="text-2xl font-bold">О нас</p>
            <span className="font-medium">
              В 2020 году во время пандемии COVID-19, основательница нашего
              магазина запустила интернет-магазин детской одежды в Самарканде.
              Сама идея возникла после нескольких неудачных покупок в
              интернет-магазинах, так как у нее были 3 детей, а магазины все
              закрыты,то не тот размер отправляют, то качество очень низкое.
              Затем она решила поискать оптовых поставщиков детской одежды
              сначала экспортные товары с Узбекистана, позже и с Турции и Китая
              , этим же она хотела помочь другим мамочкам иметь возможность
              приобрести качественные вещи по приемлемым ценам для своих детей.
              Первыми клиентами были, конечно же родственники, подруги, знакомые
              и их знакомые. В режиме онлайн работали около 3 лет, позже решили
              также открыть офф-лайн магазин, так как очень многие клиенты
              хотели не только оформлять заказы онлайн, а приезжать на примерку
              вместе со своими детьми, поближе ознакомиться с ассортиментом
              товаров . С апреля 2023 года мы начали работать в оффлайн режиме,
              предлагая своим клиентам иметь возможность приобретать
              качественную одежду для своих детей от 0 до 14 лет, работаем
              только с проверенными производителями с Китая, Турции и США.
            </span>
          </div>
          <img className="h-150" src="/shop.png" alt="" />
        </div>

        {/* why best  */}

        <div className="flex flex-col w-full items-center justify-center mt-50">
          <p className="text-4xl font-bold">Почему мы лучшие?</p>
          <span className="text-2xl font-medium">
            Три преимущества нашего магазина
          </span>
          <div className="flex w-full gap-15 items-center justify-center">
            <div className="flex hover:scale-105 cursor-pointer transition-all flex-col items-center justify-center gap-2 text-center">
              <img
                className="w-50 h-50"
                src="https://cdn-icons-png.flaticon.com/512/5499/5499068.png"
                alt=""
              />
              <p>Высококачеставенная импортная одежда</p>
              <span>
                У нас широкий ассортимент <br /> высококачественной одежды по{" "}
                <br /> хорошим ценнам, из Китая, США и Турции.
              </span>
            </div>
            <div className="flex hover:scale-105 cursor-pointer transition-all flex-col items-center justify-center gap-2 text-center">
              <img className="w-60 h-60" src="/delievery.png" alt="" />
              <p>Доставка по всей Республике</p>
              <span>
                Нашу одежду можно заказывать онлайн <br /> и можно приехать в
                магазин и <br /> примерить понравившеюся вам <br /> одежду, а
                также имеется доставка по <br /> всей республике и не только
              </span>
            </div>
            <div className="flex hover:scale-105 cursor-pointer transition-all flex-col items-center justify-center gap-2 text-center">
              <img className="w-60 h-60" src="/discount.png" alt="" />
              <p>Постоянные скидки и акции</p>
              <span>
                В нашем магазине постоянно <br /> проводятся разные акции и
                скидки в <br /> связи с какими нибудь праздниками <br /> либо
                просто при покупке более 2 <br /> вещей
              </span>
            </div>
          </div>
        </div>

        {/* photos */}

        <div className="flex flex-col items-center justify-center">
          <div className="flex mt-10 flex-col mb-8 text-center">
            <p className="text-2xl font-bold">Фотографии нашего магазина</p>
            <span className="text-xl font-medium">
              Это фотографии нашего магазина внутри и снаружи
            </span>
          </div>
          <div className="flex gap-6">
            <img
              className="w-90 h-100 hover:scale-105 transition-all cursor-pointer opacity-90 hover:opacity-100"
              src="/inside.jpg"
              alt=""
            />
            <img
              className="w-90 h-100 hover:scale-105 transition-all cursor-pointer opacity-90 hover:opacity-100"
              src="/polka.jpg"
              alt=""
            />
            <img
              className="w-90 h-100 hover:scale-105 transition-all cursor-pointer opacity-90 hover:opacity-100"
              src="/main.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
