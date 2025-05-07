import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full h-15 flex items-center justify-start pl-5 gap-10">
        <img
          className="opacity-75 hover:opacity-100 cursor-pointer hover:scale-105 transition-all"
          src="/logo.png"
          alt=""
        />
        <Link
          className="text-2xl text-gray-500 opacity-60 hover:underline hover:text-black cursor-pointer hover:opacity-100 font-medium transition-all"
          href="/"
        >
          О нас
        </Link>
        <Link
          className="text-2xl text-gray-500 opacity-60 hover:underline hover:text-black cursor-pointer hover:opacity-100 font-medium transition-all"
          href="/"
        >
          Почему мы
        </Link>
        <Link
          className="text-2xl text-gray-500 opacity-60 hover:underline hover:text-black cursor-pointer hover:opacity-100 font-medium transition-all"
          href="/"
        >
          Услуги и товары
        </Link>
        <Link
          className="text-2xl text-gray-500 opacity-60 hover:underline hover:text-black cursor-pointer hover:opacity-100 font-medium transition-all"
          href=">"
        >
          Контакты
        </Link>
      </div>
    </>
  );
};

export default Header;
