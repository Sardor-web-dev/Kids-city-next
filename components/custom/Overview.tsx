'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const Overview = ({ img, text, location }: { location: string; img: string; text: string }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex h-full max-w-xs flex-col items-center justify-center gap-4 lg:w-[400px]">
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            onClick={() => router.push(location)}
            className="cursor-pointer rounded-2xl transition-all lg:hover:scale-105"
            src={img}
            alt=""
          />
          <p className="text-lg font-bold text-gray-500">{text}</p>
        </div>
        <Button onClick={() => router.push(location)} className="cursor-pointer">
          Посмотреть в каталоге
        </Button>
      </div>
    </>
  );
};

export default Overview;
