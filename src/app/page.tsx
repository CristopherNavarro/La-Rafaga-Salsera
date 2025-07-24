import { Header } from '@/components/la-rafaga/header';
import { ImageCarousel } from '@/components/la-rafaga/image-carousel';
import { AudioPlayer } from '@/components/la-rafaga/audio-player';
import { ArtistMarquee } from '@/components/la-rafaga/artist-marquee';
import { ChatBox } from '@/components/la-rafaga/chat-box';
import { EventFlyers } from '@/components/la-rafaga/event-flyers';
import { ArtistShowcase } from '@/components/la-rafaga/artist-showcase';
import { TrackList } from '@/components/la-rafaga/track-list';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* --- INICIO DE LA SECCIÓN SUPERIOR REESTRUCTURADA --- */}
        <div className="relative">
          {/* 1. Carrusel de Imágenes */}
          <div className="w-full h-[60vh] md:h-[75vh]">
            <ImageCarousel />
          </div>

          {/* 2. Marquee de Artistas (pegado al fondo del carrusel) */}
          <div className="absolute bottom-0 w-full z-10">
            <ArtistMarquee />
          </div>
          
          {/* 3. Reproductor de Audio (Centrado y más grande) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-11/12 max-w-5xl px-2 z-20">
            <AudioPlayer />
          </div>
        </div>
        {/* --- FIN DE LA SECCIÓN SUPERIOR REESTRUCTURADA --- */}


        {/* --- Contenido Principal con Margen Superior Corregido para Móvil --- */}
        <div className="container mx-auto px-4 pt-32 md:pt-24 space-y-16 md:space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <EventFlyers />
            </div>
            <div>
              <ChatBox />
            </div>
          </div>
          
          <Separator className="bg-border/50" />

          {/* No se añade texto aquí, la sección de Artistas Destacados es solo visual */}
          <ArtistShowcase />
          
          <Separator className="bg-border/50" />

          <TrackList />
        </div>
      </main>
      <footer className="py-6 px-4 md:px-8 border-t border-border text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} La Ráfaga Salsera. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
