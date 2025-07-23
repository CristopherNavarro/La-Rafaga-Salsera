'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const images = [
  { src: 'https://placehold.co/1600x800.png', alt: 'Salsa dancers in motion', hint: 'salsa dancing' },
  { src: 'https://placehold.co/1600x800.png', alt: 'DJ mixing on a turntable', hint: 'dj console' },
  { src: 'https://placehold.co/1600x800.png', alt: 'A lively party with a crowd dancing', hint: 'party crowd' },
  { src: 'https://placehold.co/1600x800.png', alt: 'Colorful lights at a music event', hint: 'concert lights' },
];

export function ImageCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[400px] md:h-[600px] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
                data-ai-hint={image.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex" />
    </Carousel>
  );
}
