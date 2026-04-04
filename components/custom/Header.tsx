'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { MdLanguage, MdOutlineAccountCircle } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

const Header = () => {
  const t = useTranslations('HomePage');
  const router = useRouter();

  function handleChange(lang: string): void {
    document.cookie = `locale=${lang}; path=/`;
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-[1250px] py-2 sm:py-3 lg:py-4">
      <div className="mx-auto px-2 sm:px-3 lg:px-4">
        <div className="rounded-2xl border border-white/20 shadow-md backdrop-blur-lg sm:rounded-[1.75rem] lg:shadow-lg">
          <div className="mx-auto flex max-w-[1250px] items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-5 sm:py-3 lg:gap-4 lg:px-8 lg:py-4">
            <Link href="/">
              <Image
                width={150}
                height={150}
                className="cursor-pointer transition-transform hover:scale-105 hover:opacity-100 lg:opacity-80"
                src="/logo.png"
                alt="Logo"
              />
            </Link>

            <nav className="hidden flex-1 lg:flex lg:items-center lg:gap-8 lg:px-4">
              {[
                { href: '#clothes', label: t('products') },
                { href: '#about_us', label: t('about') },
                { href: '#why_best', label: t('causes') },
                { href: '#contacts', label: t('contacts') },
                { href: '#FAQ', label: t('FAQ') },
                { href: '/favorites', label: t('favorites') },
              ].map((link, i) => (
                <Link
                  key={i}
                  className="text-foreground/60 hover:text-primary group relative text-sm font-medium transition-all duration-300"
                  href={link.href}
                >
                  {link.label}
                  <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 lg:gap-4">
              <div className="hidden items-center gap-4 lg:flex">
                <Link
                  className="hover:bg-primary/10 rounded-full p-2.5 transition-all duration-300"
                  href={'/profile'}
                >
                  <MdOutlineAccountCircle size={20} className="text-foreground/70" />
                </Link>
                <Link
                  className="hover:bg-primary/10 rounded-full p-2.5 transition-all duration-300"
                  href={'/cart'}
                >
                  <FiShoppingCart size={20} className="text-foreground/70" />
                </Link>
              </div>

              {/* Mobile: Language Selector Only */}
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:bg-primary/10 cursor-pointer rounded-full p-1.5 transition-all duration-300 sm:p-2 lg:p-2.5">
                  <MdLanguage
                    size="16"
                    className="text-foreground/70 sm:h-5 sm:w-5 lg:h-5 lg:w-5"
                  />
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
