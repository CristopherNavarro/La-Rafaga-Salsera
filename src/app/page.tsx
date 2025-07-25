import { AudioPlayer } from '@/components/la-rafaga/audio-player';
import { ImageCarousel } from '@/components/la-rafaga/image-carousel';
import { ArtistMarquee } from '@/components/la-rafaga/artist-marquee';
import { ChatBox } from '@/components/la-rafaga/chat-box';
import { EventFlyers } from '@/components/la-rafaga/event-flyers';
import { ArtistShowcase } from '@/components/la-rafaga/artist-showcase';
import { TrackList } from '@/components/la-rafaga/track-list';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      {/* SECCIÓN 1: CARRUSEL DE IMÁGENES (OCUPA LA PARTE SUPERIOR) */}
      <section className="relative w-full h-[85vh]">
        <ImageCarousel />
      </section>

      {/* SECCIÓN 2: LA PARTE CLAVE (COMO EN TU DIBUJO) */}
      {/* Este contenedor usa un margen superior negativo para subirse y pisar al carrusel de imágenes */}
      <section className="relative z-10 -mt-24 md:-mt-20">
        
        {/* El carrusel de texto (la línea roja) */}
        <ArtistMarquee />

        {/* El reproductor (el cuadro azul) */}
        {/* Este div lo centra y lo sube aún más con otro margen negativo para que quede sobre el carrusel de texto */}
        <div className="w-11/12 max-w-4xl mx-auto -mt-16 md:-mt-14 relative z-20">
          <AudioPlayer />
        </div>
      </section>
      
      {/* SECCIÓN 3: EL RESTO DEL CONTENIDO DE LA PÁGINA */}
      <section className="container mx-auto px-4 mt-12 md:mt-16 space-y-16 md:space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <EventFlyers />
          </div>
          <div>
            <ChatBox />
          </div>
        </div>
        
        <Separator className="bg-border/50" />
        <ArtistShowcase />
        <Separator className="bg-border/50" />
        <TrackList />
      </section>
    </>
  );
}