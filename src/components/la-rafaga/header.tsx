"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down and scrolled past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-y-0' : '-translate-y-full',
        className
      )}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {/* Reemplazar con tu logo */}
          <Image src="/logo.png" alt="La Ráfaga" width={50} height={50} />
          <span className="ml-3 text-xl font-bold text-foreground hidden md:block">La Ráfaga</span>
        </Link>

        {/* Aquí podrías añadir elementos de navegación si fueran necesarios */}
        {/* <div className="flex items-center space-x-4">
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">Sobre Nosotros</Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contacto</Link>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
