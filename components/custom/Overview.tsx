"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const Overview = ({ img, text }: {img:string, text:string}) => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col w-100 h-120 items-center justify-center gap-4">
        <div className="flex flex-col gap-5 items-center justify-center">
          <img
            className="rounded-2xl hover:scale-105 transition-all cursor-pointer"
            src={img}
            alt=""
          />
          <p className="text-gray-500 text-lg font-bold">{text}</p>
        </div>
        <Button
          onClick={() => router.push("/catalogue")}
          className="cursor-pointer"
        >
          Посмотреть в каталоге
        </Button>
      </div>
    </>
  );
};

export default Overview;
