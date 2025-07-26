import { Music } from 'lucide-react';

const artists = [
  'Celia Cruz',
  'Héctor Lavoe',
  'Willie Colón',
  'Rubén Blades',
  'El Gran Combo de Puerto Rico',
  "Oscar D'León",
  'Johnny Pacheco',
  'Ismael Rivera',
  'Joe Arroyo',
  'Pete "El Conde" Rodríguez',
  'Johnny Pacheco',
];

// Duplicamos la lista para crear el efecto de loop sin cortes
const marqueeContent = [...artists, ...artists];

export function ArtistMarquee() {
  return (
    // Se oculta en móvil (hidden) y se muestra en pantallas medianas o más grandes (md:flex)
    <div className="relative hidden md:flex w-full overflow-x-hidden bg-black/70 backdrop-blur-sm border-y-2 border-accent text-white py-4">
      <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {marqueeContent.map((artist, index) => (
          <div key={`marquee-item-${index}`} className="flex items-center mx-8">
            <span className="text-xl font-bold tracking-wider">{artist}</span>
            <Music className="h-5 w-5 text-accent ml-8" />
          </div>
        ))}
      </div>
    </div>
  );
}