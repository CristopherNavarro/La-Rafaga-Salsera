import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const flyers = [
  { src: '/imageflyer1.jpeg', alt: 'Salsa Night event flyer', hint: 'event flyer' },
  { src: '/imageflyer2.jpeg', alt: 'Latin Fiesta event flyer', hint: 'concert poster' },
  { src: '/imageflyer3.jpeg', alt: 'Weekend Salsa Social flyer', hint: 'event flyer' },
];

export function EventFlyers() {
  return (
    <section className="w-full">
      <h2 className="text-4xl font-headline font-bold tracking-wider text-left mb-8 text-accent">Eventos de la Semana</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flyers.map((flyer, index) => (
          <Card key={index} className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
            <CardContent className="p-0">
              <Image
                src={flyer.src}
                alt={flyer.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover aspect-[3/4]"
                data-ai-hint={flyer.hint}
              />
            </CardContent>
          </Card>
        ))
        }
      </div>
    </section>
  );
}
