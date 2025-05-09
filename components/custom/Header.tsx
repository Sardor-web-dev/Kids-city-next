"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { data: session } = useSession();
  const t = useTranslations("HomePage");
  const router = useRouter();

  function handleChange(lang: string): void {
    document.cookie = `locale=${lang}; path=/`;
    router.refresh();
  }

  return (
    <header className="w-full px-6 md:px-12 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-8 flex-wrap">
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
              className="text-lg text-gray-500 opacity-70 hover:underline hover:text-black hover:opacity-100 transition-all"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}

          {session && (
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
          )}
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <img
                className="w-12z` h-7"
                src="https://img.favpng.com/23/13/17/computer-icons-language-icon-png-favpng-NQSGiSmKDpKJpGXw1p4tMdi6Z.jpg"
                alt=""
              />
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
        </div>
      </div>
    </header>
  );
};

export default Header;
