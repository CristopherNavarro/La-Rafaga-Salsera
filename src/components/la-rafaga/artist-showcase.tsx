import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const artists = [
  { name: 'Celia Cruz', src: 'https://placehold.co/400x400.png', hint: 'female singer' },
  { name: 'Héctor Lavoe', src: 'https://placehold.co/400x400.png', hint: 'male singer' },
  { name: 'Marc Anthony', src: 'https://placehold.co/400x400.png', hint: 'male musician' },
  { name: 'Willie Colón', src: 'https://placehold.co/400x400.png', hint: 'trombone player' },
];

export function ArtistShowcase() {
  return (
    <section className="w-full">
      <h2 className="text-4xl font-headline tracking-wider text-center mb-8 text-accent">Featured Artists</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {artists.map((artist, index) => (
          <Card key={index} className="group overflow-hidden border-border/50 transition-all hover:shadow-lg hover:border-accent/50">
            <CardContent className="p-0 relative aspect-square">
              <Image
                src={artist.src}
                alt={`Photo of ${artist.name}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={artist.hint}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </CardContent>
            <CardFooter className="p-3 absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-sm font-bold text-center w-full truncate text-white">{artist.name}</h3>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
