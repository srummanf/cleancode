import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const svgString = useMemo(() => {
    const color = "currentColor";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="${color}"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo2.png" alt="logo" width={55} height={55} />
              <h1 className="font-minecraft-bold ml-2 text-2xl">
                Welcome to HackNight'25
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
          <a
              href="https://hacknighthub.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-minecraft hover:text-gray-600 px-3 py-2 rounded-md text-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 65" x="0px" y="0px" width="20"
                height="20" className="mr-2"><title>sword</title><g data-name="Layer 2"><g data-name="Layer 1"><rect x="4" y="48" width="4" height="4"/><rect y="48" width="4" height="4"/><rect x="24" y="44" width="4" height="4"/><rect x="20" y="44" width="4" height="4"/><rect x="16" y="44" width="4" height="4"/><rect x="8" y="44" width="4" height="4"/><rect x="4" y="44" width="4" height="4"/><rect y="44" width="4" height="4"/><rect x="20" y="40" width="4" height="4"/><rect x="16" y="40" width="4" height="4"/><rect x="12" y="40" width="4" height="4"/><rect x="8" y="40" width="4" height="4"/><rect x="4" y="40" width="4" height="4"/><rect x="20" y="36" width="4" height="4"/><rect x="16" y="36" width="4" height="4"/><rect x="12" y="36" width="4" height="4"/><rect x="8" y="36" width="4" height="4"/><rect x="24" y="32" width="4" height="4"/><rect x="16" y="32" width="4" height="4"/><rect x="12" y="32" width="4" height="4"/><rect x="8" y="32" width="4" height="4"/><rect x="4" y="32" width="4" height="4"/><rect x="28" y="28" width="4" height="4"/><rect x="12" y="28" width="4" height="4"/><rect x="8" y="28" width="4" height="4"/><rect x="4" y="28" width="4" height="4"/><rect x="32" y="24" width="4" height="4"/><rect x="16" y="24" width="4" height="4"/><rect x="4" y="24" width="4" height="4"/><rect x="36" y="20" width="4" height="4"/><rect x="20" y="20" width="4" height="4"/><rect x="40" y="16" width="4" height="4"/><rect x="24" y="16" width="4" height="4"/><rect x="44" y="12" width="4" height="4"/><rect x="28" y="12" width="4" height="4"/><rect x="48" y="8" width="4" height="4"/><rect x="32" y="8" width="4" height="4"/><rect x="48" y="4" width="4" height="4"/><rect x="36" y="4" width="4" height="4"/><rect x="48" width="4" height="4"/><rect x="44" width="4" height="4"/><rect x="40" width="4" height="4"/></g></g></svg>
              Knight's Den
            </a>
            <Link
              href="https://www.instagram.com/hackclubvitc/"
              className="font-minecraft hover:text-gray-600 px-3 py-2 rounded-md"
            >
              HackClub VITC
            </Link>
          </div>
          
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
