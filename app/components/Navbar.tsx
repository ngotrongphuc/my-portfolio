'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import debounce from 'lodash/debounce';
import useNavbarVisible from '../hooks/useNavbarVisible';
import { navbarItems } from '../utils/constants';
import { NavbarItem } from '../utils/types';

const Navbar = () => {
  const isNavbarVisible = useNavbarVisible();

  return (
    <header
      className={`flex fixed w-full min-h-16 items-center justify-between p-6 z-50 ${!isNavbarVisible ? '-translate-y-full' : 'translate-y-0'} transition-all duration-1000 ease-in-out`}
    >
      <Link href="/">
        <Image
          src={'/logo-white.svg'}
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <nav className="flex text-xl font-medium">
        {navbarItems.map((item: NavbarItem) => (
          <Link href={item.href} key={item.name} className="ml-6">
            <p>{item.name}</p>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
