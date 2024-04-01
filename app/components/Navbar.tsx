'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import debounce from 'lodash/debounce';
import useNavbarVisible from '../hooks/useNavbarVisible';
import { navbarItems } from '../utils/constants';
import { NavbarItem } from '../utils/types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const isNavbarVisible = useNavbarVisible();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    if (!isNavbarVisible) {
      setIsMenuVisible(false);
    }
  }, [isNavbarVisible]);

  return (
    <header
      className={`flex fixed w-full h-[70px] items-center justify-between p-6 z-50 ${!isNavbarVisible ? '-translate-y-full' : 'translate-y-0'} transition-all duration-1000 ease-in-out`}
    >
      <Link href="/">
        <Image src={'/logo-white.svg'} alt="logo" width={100} height={100} />
      </Link>
      <nav className="text-xl font-medium hidden xs:flex">
        {navbarItems.map((item: NavbarItem) => (
          <Link href={item.href} key={item.name} className="ml-6">
            <p>{item.name}</p>
          </Link>
        ))}
      </nav>
      <nav className="block xs:hidden">
        {isMenuVisible ? (
          <>
            <XMarkIcon
              className="size-6 scale-150 cursor-pointer"
              onClick={toggleMenu}
            />
            <div className="flex flex-col bg-gray-900 absolute right-[10px] top-[70px] rounded-3xl divide-y divide-gray-700 shadow-md shadow-gray-700">
              {navbarItems.map((item: NavbarItem) => (
                <Link href={item.href} key={item.name} className="px-6 py-4 b">
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <Bars3Icon
            className="size-6 scale-150 cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
