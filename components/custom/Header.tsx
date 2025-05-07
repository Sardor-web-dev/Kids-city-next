"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session } = useSession();
  const t = useTranslations("HomePage");
  const router = useRouter();

  function handleChange(lang: string): void {
    document.cookie = `locale=${lang}; path=/`;
    router.refresh();
  }

  return (
    <div className="flex justify-between items-center pr-10">
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
          {t("about")}
        </Link>
        <Link
          className="text-2xl text-gray-500 opacity-60 hover:underline hover:text-black cursor-pointer hover:opacity-100 font-medium transition-all"
          href="/"
        >
          {t("causes")}
        </Link>
        <Link
          className="text-2xl text-gray-500 opacity-60 hover:underline hover:text-black cursor-pointer hover:opacity-100 font-medium transition-all"
          href="/"
        >
          {t("products")}
        </Link>
        <Link
          className="text-2xl text-gray-500 opacity-60 hover:underline hover:text-black cursor-pointer hover:opacity-100 font-medium transition-all"
          href=">"
        >
          {t("contacts")}
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
      <div className="flex gap-2">
        <Button
          className="bg-blue-500 cursor-pointer text-white hover:bg-blue-600 transition-all rounded-md px-4 py-2"
          onClick={() => handleChange("ru")}
        >
          {t("russianbtn")}
        </Button>
        <Button
          className="bg-blue-500 cursor-pointer text-white hover:bg-blue-600 transition-all rounded-md px-4 py-2"
          onClick={() => handleChange("en")}
        >
          {t("englishbtn")}
        </Button>
        <Button
          className="bg-blue-500 cursor-pointer text-white hover:bg-blue-600 transition-all rounded-md px-4 py-2"
          onClick={() => handleChange("uz")}
        >
          {t("uzbekbtn")}
        </Button>
      </div>
    </div>
  );
};

export default Header;
