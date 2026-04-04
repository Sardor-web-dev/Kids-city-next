'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { FiShoppingCart, FiHome } from 'react-icons/fi';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const navItems = [
    { href: '/', label: 'Главная', icon: FiHome, id: 'home' },
    { href: '/catalogue', label: 'Каталог', icon: IoMenuSharp, id: 'catalogue' },
    { href: '/cart', label: 'Корзина', icon: FiShoppingCart, id: 'cart' },
    { href: '/profile', label: 'Профиль', icon: MdOutlineAccountCircle, id: 'profile' },
  ];

  return (
    <>
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-border/30 lg:hidden z-40 shadow-2xl">
        <div className="flex items-center justify-around safe-area-inset-bottom">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center justify-center py-2.5 px-3 w-1/4 transition-all duration-300 ${
                  active
                    ? 'text-primary bg-primary/5 border-t-2 border-primary'
                    : 'text-foreground/50 border-t-2 border-transparent hover:text-foreground/70 hover:bg-foreground/3'
                }`}
              >
                <Icon size={22} />
                <span className="text-xs mt-1 font-medium text-center leading-tight">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Add padding to body to account for fixed navbar */}
      <div className="lg:hidden h-20" />
    </>
  );
}
