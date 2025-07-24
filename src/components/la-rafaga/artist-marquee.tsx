import { Music } from 'lucide-react';

const artists = [
  'Celia Cruz', 'Héctor Lavoe', 'Marc Anthony', 'Willie Colón', 'Rubén Blades', 'El Gran Combo de Puerto Rico', 'Fania All-Stars',
  // Se repiten para un efecto de bucle infinito y suave
  'Celia Cruz', 'Héctor Lavoe', 'Marc Anthony', 'Willie Colón', 'Rubén Blades', 'El Gran Combo de Puerto Rico', 'Fania All-Stars'
];

export function ArtistMarquee() {
  return (
    <div className="relative flex overflow-x-hidden bg-foreground text-background py-3 border-y-2 border-accent">
      <div className="flex whitespace-nowrap animate-marquee group-hover:pause">
        {artists.map((artist, index) => (
          <div key={index} className="flex items-center">
            <span className="text-lg font-bold tracking-wider mx-6">{artist}</span>
            {index < artists.length / 2 - 1 && <Music className="h-5 w-5 text-accent" />}
          </div>
        ))
        }
      </div>
    </div>
  );
}
