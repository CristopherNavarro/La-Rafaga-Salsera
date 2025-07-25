'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const images = [
  { src: '/image1.png', alt: 'Evento de salsa con La Ráfaga' },
  { src: '/image2.png', alt: 'Público disfrutando en un concierto de salsa' },
  { src: '/image3.png', alt: 'DJ La Ráfaga mezclando en vivo' },
  { src: '/image4.png', alt: 'Detalle de vinilos de salsa' },
];

export function ImageCarousel() {
  return (
    <Carousel 
      className="w-full h-full" 
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
    >
      <CarouselContent className="h-full">
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                // MEJORA: Prioriza la carga de la primera imagen para un mejor rendimiento
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              {/* Este degradado ayuda a que el texto (si lo hubiera) sea más legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-white/20 border-none hover:text-white" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-white/20 border-none hover:text-white" />
    </Carousel>
  );
}