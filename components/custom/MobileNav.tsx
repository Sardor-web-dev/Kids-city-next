'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlineAccountCircle, MdShoppingBag } from 'react-icons/md';
import { BiSolidHeart } from 'react-icons/bi';

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  const navItems = [
    { href: '/catalogue', label: 'Каталог', icon: MdShoppingBag, id: 'catalogue' },
    { href: '/favorites', label: 'Избранное', icon: BiSolidHeart, id: 'favorites' },
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
