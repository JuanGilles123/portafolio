// src/components/Navbar.tsx

import Link from 'next/link';

const Logo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 22V2L18 12L8 22Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full py-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
            About
          </Link>
          <Link href="/lab" className="text-gray-300 hover:text-white transition-colors duration-300">
            Lab
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;