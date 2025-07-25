"use client";

// --- SOLUCIÓN: IMPORTAMOS LOS HOOKS QUE FALTABAN ---
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Instagram, Youtube, Facebook } from 'lucide-react';

export const Header = () => {
  // El hook para ocultar el header al hacer scroll se puede eliminar
  // si prefieres que siempre esté visible. Por ahora lo dejamos.
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsVisible(window.scrollY < lastScrollY || window.scrollY < 100);
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out',
        'bg-black/60 backdrop-blur-md border-b border-white/10',
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
        {/* Sección Izquierda: Logo y Nombre */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="La Ráfaga Salsera Logo"
              fill
              style={{ objectFit: 'contain' }}
              className="group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>
          
          <span
            className="font-bold text-white uppercase tracking-widest text-xl sm:text-2xl md:text-3xl font-headline"
          >
            LA RÁFAGA SALSERA
          </span>
        </Link>

        {/* Sección Derecha: Iconos Sociales */}
        <div className="flex items-center space-x-4 sm:space-x-5 flex-shrink-0">
          <Link href="https://www.instagram.com/larafagasalsera" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
            <Instagram size={22} />
          </Link>
          <Link href="https://www.youtube.com/@larafagasalsera4655" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
            <Youtube size={22} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100016959364788" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
            <Facebook size={22} />
          </Link>
        </div>
      </nav>
    </header>
  );
};
