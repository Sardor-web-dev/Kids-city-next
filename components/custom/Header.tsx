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
    <header className="mx-auto w-full bg-background py-5">
      <div className="mx-auto flex max-w-[1250px] items-center justify-between gap-6 px-4">
        <Link href="/" className="flex-shrink-0">
          <Image
            width={110}
            height={110}
            className="cursor-pointer transition-all duration-300 hover:opacity-80"
            src="/logo.png"
            alt="Kids City Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 lg:flex lg:items-center lg:gap-12 lg:px-8">
          {[
            { href: '#clothes', label: t('products') },
            { href: '#about_us', label: t('about') },
            { href: '#why_best', label: t('causes') },
            { href: '#contacts', label: t('contacts') },
            { href: '#FAQ', label: t('FAQ') },
            { href: '/catalogue', label: t('catalogue') },
          ].map((link, i) => (
            <Link
              key={i}
              className="text-sm font-medium text-foreground/65 transition-all duration-300 hover:text-primary"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          <Link className="p-2 transition-all duration-200 hover:text-primary" href={'/favorites'}>
            <span className="text-sm font-medium text-foreground/65 hidden lg:inline hover:text-primary transition-colors">
              {t('favorites')}
            </span>
          </Link>
          <Link className="p-2 transition-all duration-200 hover:text-primary" href={'/profile'}>
            <MdOutlineAccountCircle size={22} className="text-foreground/70" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 cursor-pointer transition-all duration-200 hover:text-primary">
              <MdLanguage size="22" className="text-foreground/70" />
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
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 cursor-pointer transition-all duration-200 hover:text-primary lg:hidden">
              <IoMenuSharp size="22" className="text-foreground/70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="pt-2">
              {[
                { href: '#clothes', label: t('products') },
                { href: '#about_us', label: t('about') },
                { href: '#why_best', label: t('causes') },
                { href: '#contacts', label: t('contacts') },
                { href: '#FAQ', label: t('FAQ') },
                { href: '/catalogue', label: t('catalogue') },
                { href: '/favorites', label: t('favorites') },
              ].map((link, i) => (
                <DropdownMenuItem key={i} asChild>
                  <Link className="text-sm font-medium" href={link.href}>
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link className="p-2 transition-all duration-200 hover:text-primary" href={'/cart'}>
            <FiShoppingCart size={22} className="text-foreground/70" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
