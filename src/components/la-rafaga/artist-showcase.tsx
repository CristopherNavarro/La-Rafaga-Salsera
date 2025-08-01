import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

// Leyendas de la salsa para los ejemplos
const artists = [
  { name: "Oscar D'León", src: '/Oscar De Leon.jpg', hint: 'La Guarachera de Cuba' },
  { name: 'Pete "El Conde" Rodríguez', src: '/Pete El Conde Rodriguez.jpg', hint: 'El Cantante de los Cantantes' },
  { name: 'Ismael Rivera', src: '/Ismael Rivera.jpg', hint: 'El Malo del Trombón' },
  { name: 'Joe Arroyo', src: '/Joe Arroyo.jpg', hint: 'Fundador de Fania' },
];

export function ArtistShowcase() {
  return (
    <section className="w-full">
      <h2 className="text-4xl font-headline font-bold tracking-wider text-center mb-8 text-accent">Artistas Destacados</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {artists.map((artist, index) => (
          <Card key={index} className="group overflow-hidden border-border/50 transition-all hover:shadow-lg hover:border-accent/50 bg-card">
            <CardContent className="p-0 relative aspect-square">
              <Image
                src={artist.src}
                alt={`Foto de ${artist.name}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </CardContent>
            {/* Pie de foto con el nombre del artista */}
            <CardFooter className="p-3 bg-black/20">
              <h3 className="text-base font-bold text-center w-full truncate text-foreground">{artist.name}</h3>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}