"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const Overview = ({
  img,
  text,
  location,
}: {
  location: string;
  img: string;
  text: string;
}) => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col lg:w-[400px] h-full max-w-xs items-center justify-center gap-4">
        <div className="flex flex-col gap-5 items-center justify-center">
          <img
            onClick={() => router.push(location)}
            className="rounded-2xl lg:hover:scale-105 transition-all cursor-pointer"
            src={img}
            alt=""
          />
          <p className="text-gray-500 text-lg font-bold">{text}</p>
        </div>
        <Button
          onClick={() => router.push(location)}
          className="cursor-pointer"
        >
          Посмотреть в каталоге
        </Button>
      </div>
    </>
  );
};

export default Overview;
