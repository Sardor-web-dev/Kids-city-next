"use client";
import Link from "next/link";
// import { Button } from "../ui/button";
// import { signIn, signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { MdLanguage } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  // const { data: session } = useSession();
  const t = useTranslations("HomePage");
  const router = useRouter();

  function handleChange(lang: string): void {
    document.cookie = `locale=${lang}; path=/`;
    router.refresh();
  }

  return (
    <header className="w-full max-w-[1250px] mx-auto px-6 md:px-12 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="flex md:flex-row items-center justify-between gap-4">
        <div className=" flex items-center gap-8 flex-wrap">
          <Link href="/">
            <img
              className="h-10 opacity-80 hover:opacity-100 cursor-pointer hover:scale-105 transition-transform"
              src="/logo.png"
              alt="Logo"
            />
          </Link>
          {[
            { href: "#clothes", label: t("products") },
            { href: "#about_us", label: t("about") },
            { href: "#why_best", label: t("causes") },
            { href: "#contacts", label: t("contacts") },
          ].map((link, i) => (
            <Link
              key={i}
              className="text-lg lg:flex hidden text-gray-500 opacity-70 hover:underline hover:text-black hover:opacity-100 transition-all"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          {/* {session && (
            <Link
              className="text-lg text-gray-500 opacity-70 hover:underline hover:text-black hover:opacity-100 transition-all"
              href="/admin"
            >
              {t("admin")}
            </Link>
          )}
          {!session ? (
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-md px-4 py-2"
              onClick={() => signIn()}
            >
              Sign In
            </Button>
          ) : (
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-md px-4 py-2"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          )} */}
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <MdLanguage size="24" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="pt-2">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleChange("ru")}
              >
                {t("russianbtn")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleChange("en")}
              >
                {t("englishbtn")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleChange("uz")}
              >
                {t("uzbekbtn")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <IoMenuSharp size="24" className="flex lg:hidden" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="pt-2">
              {[
                { href: "#clothes", label: t("products") },
                { href: "#about_us", label: t("about") },
                { href: "#why_best", label: t("causes") },
                { href: "#contacts", label: t("contacts") },
              ].map((link, i) => (
                <DropdownMenuItem>
                  <Link
                    key={i}
                    className="text-lg text-gray-500 opacity-70 hover:text-black hover:opacity-100 transition-all"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
