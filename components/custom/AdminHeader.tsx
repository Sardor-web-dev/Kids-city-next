'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { MdLanguage } from 'react-icons/md';
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

export default function AdminHeader() {
  const t = useTranslations('AdminPage');
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
            { href: '/admin/clothes', label: t('clothes') },
            { href: '/admin/orders', label: t('orders') },
            { href: '/admin/users', label: t('users') },
            { href: '/admin', label: t('dashboard') },
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
                { href: '/admin/clothes', label: t('clothes') },
                { href: '/admin/orders', label: t('orders') },
                { href: '/admin/users', label: t('users') },
                { href: '/admin', label: t('dashboard') },
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
        </div>
      </div>
    </header>
  );
}
