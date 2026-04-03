'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { MdLanguage } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlineAccountCircle } from 'react-icons/md';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IoMenuSharp } from 'react-icons/io5';
import Image from 'next/image';

const Header = () => {
  const t = useTranslations('HomePage');
  const router = useRouter();

  function handleChange(lang: string): void {
    document.cookie = `locale=${lang}; path=/`;
    router.refresh();
  }

  return (
    <header className="mx-auto w-full border-b border-border bg-background py-4">
      <div className="mx-auto flex max-w-[1250px] items-center justify-between gap-4 px-2">
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          <Link href="/">
            <Image
              width={140}
              height={140}
              className="cursor-pointer transition-all duration-300 hover:scale-110 lg:scale-95 lg:hover:scale-105"
              src="/logo.png"
              alt="Kids City Logo"
            />
          </Link>
          {[
            { href: '#clothes', label: t('products') },
            { href: '#about_us', label: t('about') },
            { href: '#why_best', label: t('causes') },
            { href: '#contacts', label: t('contacts') },
            { href: '#FAQ', label: t('FAQ') },
            { href: '/catalogue', label: t('catalogue') },
            { href: '/favorites', label: t('favorites') },
          ].map((link, i) => (
            <Link
              key={i}
              className="hidden font-medium text-foreground/70 transition-all duration-200 hover:text-primary lg:flex"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 lg:gap-4">
          <Link className="transition-all duration-200 hover:text-primary" href={'/profile'}>
            <MdOutlineAccountCircle size={24} className="text-foreground" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer transition-all duration-200 hover:text-primary">
              <MdLanguage size="24" className="text-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="pt-2">
              <DropdownMenuItem className="cursor-pointer" onClick={() => handleChange('ru')}>
                {t('russianbtn')}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={() => handleChange('en')}>
                {t('englishbtn')}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={() => handleChange('uz')}>
                {t('uzbekbtn')}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer transition-all duration-200 hover:text-primary lg:hidden">
              <IoMenuSharp size="24" className="text-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="pt-2">
              {[
                { href: '#clothes', label: t('products') },
                { href: '#about_us', label: t('about') },
                { href: '#why_best', label: t('causes') },
                { href: '#contacts', label: t('contacts') },
                { href: '#FAQ', label: t('FAQ') },
                { href: '/catalogue', label: t('catalogue') },
                { href: '/favorites', label: t('favorites') },
              ].map((link, i) => (
                <DropdownMenuItem key={i}>
                  <Link
                    key={i}
                    className="font-medium text-foreground/80 transition-all duration-200 hover:text-primary"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link className="transition-all duration-200 hover:text-primary" href={'/cart'}>
            <FiShoppingCart size={24} className="text-foreground" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
