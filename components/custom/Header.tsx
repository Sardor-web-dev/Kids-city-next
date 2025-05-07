"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const {data: session} = useSession();
  return (
    <>
      <div className="w-full h-15 flex items-center justify-start pl-5 gap-10">
        <Link href="/">
          <img
            className="opacity-75 hover:opacity-100 cursor-pointer hover:scale-105 transition-all"
            src="/logo.png"
            alt=""
          />
        </Link>
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
        {!session ? (
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600 transition-all rounded-md px-4 py-2"
            onClick={() => signIn()}
          >
            Sign In
          </Button>
        ) : (
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600 transition-all rounded-md px-4 py-2"
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        )}
      </div>
    </>
  );
};

export default Header;
