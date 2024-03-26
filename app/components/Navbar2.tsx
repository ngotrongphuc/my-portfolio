import Image from 'next/image';
import Link from 'next/link';

const Navbar2 = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="flex fixed w-full min-h-16 items-center justify-between p-6 z-50">
      <Link href="/">
        <Image
          src={'/logo-white.svg'}
          alt="hero background"
          width={100}
          height={100}
        />
      </Link>
      <nav className="flex text-xl font-medium">
        {navItems.map((item) => (
          <Link href={item.href} key={item.name} className="ml-6">
            <p>{item.name}</p>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar2;
