import { Music } from 'lucide-react';

const artists = [
  'Marc Anthony',
  'Jerry Rivera',
  'Frankie Ruiz',
  'El Gran Combo de Puerto Rico',
  'Willie Colón',
  'Héctor Lavoe',
  'Fania All-Stars',
  'Celia Cruz',
  'Rubén Blades',
  'Tito Puente',
  'Eddie Palmieri',
  'Ray Barretto',
  'Cheo Feliciano',
  'Ismael Rivera',
  'Andy Montañez',
  'La Sonora Ponceña',
  'Victor Manuelle',
  'Gilberto Santa Rosa',
  'Rey Ruiz',
  'DLG (Dark Latin Groove)',
];

export function ArtistMarquee() {
  return (
    <div className="relative hidden md:flex overflow-x-hidden bg-black bg-opacity-50 py-3 border-y-2 border-yellow-500">
      <div className="animate-marquee flex whitespace-nowrap">
        {artists.map((artist, index) => (
          <span key={index} className="text-xl md:text-2xl lg:text-3xl font-bold mx-8 flex items-center text-white">
            <Music className="h-6 w-6 mr-2 text-yellow-500" /> {artist}
          </span>
        ))}
      </div>
      {/* Duplicar el contenido para un efecto de loop continuo */}
      <div className="animate-marquee-2 flex whitespace-nowrap absolute top-0 left-full">
         {artists.map((artist, index) => (
          <span key={index} className="text-xl md:text-2xl lg:text-3xl font-bold mx-8 flex items-center text-white">
            <Music className="h-6 w-6 mr-2 text-yellow-500" /> {artist}
          </span>
        ))}
      </div>
    </div>
  );
}