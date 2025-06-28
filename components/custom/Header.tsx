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
    <header className="mx-auto w-full max-w-[1250px] bg-white py-4">
      <div className="flex items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-wrap items-center gap-8">
          <Link href="/">
            <Image
              width={150}
              height={150}
              className="cursor-pointer transition-transform hover:scale-105 hover:opacity-100 lg:opacity-80"
              src="/logo.png"
              alt="Logo"
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
              className="hidden text-lg text-gray-500 opacity-70 transition-all hover:text-black hover:underline hover:opacity-100 lg:flex"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link className="mr-2" href={'/profile'}>
            <MdOutlineAccountCircle size={24} />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <MdLanguage size="24" />
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
            <DropdownMenuTrigger className="cursor-pointer">
              <IoMenuSharp size="24" className="flex lg:hidden" />
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
                    className="text-lg text-gray-500 opacity-70 transition-all hover:text-black hover:opacity-100"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={'/cart'}>
            <FiShoppingCart size={23} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
