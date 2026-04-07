'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useNavbarVisible } from '../hooks/useNavbarVisible';
import { cn } from '../utils/cn';
import { NAVBAR_ITEMS } from '../utils/constants';

/**
 * Bypass the browser's "same URL → no scroll" short-circuit by intercepting
 * the click, preventing default navigation, and scrolling manually. Called
 * from both the desktop and mobile nav so every click behaves the same.
 */
const handleNavLinkClick = (
  e: { preventDefault: () => void },
  href: string,
) => {
  const id = href.split('#')[1];
  if (!id) return;
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView();
};

export const Navbar = () => {
  const isNavbarVisible = useNavbarVisible();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Menu is only shown when both the navbar is visible and the user opened it.
  const isMenuVisible = isNavbarVisible && isMenuOpen;

  return (
    <header
      className={cn(
        'flex fixed w-full h-[70px] items-center justify-between p-6 z-50 transition-all duration-1000 ease-in-out',
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <Link href="/">
        <Image
          src="/logo-white.svg"
          alt="logo"
          width={100}
          height={100}
          className="size-[100px]"
        />
      </Link>
      <nav className="text-xl font-medium hidden xs:flex">
        {NAVBAR_ITEMS.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className="ml-6"
            onClick={(e) => handleNavLinkClick(e, item.href)}
          >
            <p>{item.name}</p>
          </Link>
        ))}
      </nav>
      <nav className="block xs:hidden">
        {isMenuVisible ? (
          <>
            <XMarkIcon
              className="size-6 scale-150 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="flex flex-col bg-gray-900 absolute right-[10px] top-[70px] rounded-3xl divide-y divide-gray-700 shadow-md shadow-gray-700">
              {NAVBAR_ITEMS.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="px-6 py-4"
                  onClick={(e) => {
                    handleNavLinkClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <Bars3Icon
            className="size-6 scale-150 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </nav>
    </header>
  );
};
