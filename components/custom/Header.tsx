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
    <header className="mx-auto w-full bg-background py-4 sticky top-4 z-50">
      <div className="mx-auto px-4">
        <div className="rounded-[1.75rem] border border-white/30 bg-white/45 backdrop-blur-xl shadow-2xl">
          <div className="flex max-w-[1250px] mx-auto items-center justify-between gap-6 px-6 py-4 lg:px-8">
            <Link href="/" className="flex-shrink-0 group">
              <Image
                width={95}
                height={95}
                className="cursor-pointer transition-all duration-500 group-hover:opacity-70"
                src="/logo.png"
                alt="Kids City Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden flex-1 lg:flex lg:items-center lg:gap-10 lg:px-6">
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
                  className="text-sm font-medium text-foreground/60 transition-all duration-300 hover:text-primary relative group"
                  href={link.href}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              <Link className="p-2.5 transition-all duration-300 hover:bg-primary/10 rounded-full" href={'/favorites'}>
                <span className="text-sm font-medium text-foreground/60 hidden lg:inline hover:text-primary transition-colors">
                  {t('favorites')}
                </span>
              </Link>
              <Link className="p-2.5 transition-all duration-300 hover:bg-primary/10 rounded-full" href={'/profile'}>
                <MdOutlineAccountCircle size={20} className="text-foreground/70" />
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2.5 cursor-pointer transition-all duration-300 hover:bg-primary/10 rounded-full">
                  <MdLanguage size="20" className="text-foreground/70" />
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
                <DropdownMenuTrigger className="p-2.5 cursor-pointer transition-all duration-300 hover:bg-primary/10 rounded-full lg:hidden">
                  <IoMenuSharp size="20" className="text-foreground/70" />
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

              <Link className="p-2.5 transition-all duration-300 hover:bg-primary/10 rounded-full" href={'/cart'}>
                <FiShoppingCart size={20} className="text-foreground/70" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
