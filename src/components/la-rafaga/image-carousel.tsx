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
  { src: 'https://placehold.co/1600x800.png', alt: 'Salsa dancers in motion' },
  { src: 'https://placehold.co/1600x800.png', alt: 'DJ mixing on a turntable' },
  { src: 'https://placehold.co/1600x800.png', alt: 'A lively party with a crowd dancing' },
];

export function ImageCarousel() {
  return (
    <Carousel 
      className="w-full h-full" 
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000 })]}
    >
      <CarouselContent className="h-full">
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex text-white hover:bg-white/20 hover:text-white" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex text-white hover:bg-white/20 hover:text-white" />
    </Carousel>
  );
}