import { Header } from '@/components/la-rafaga/header';
import { ImageCarousel } from '@/components/la-rafaga/image-carousel';
import { AudioPlayer } from '@/components/la-rafaga/audio-player';
import { ArtistMarquee } from '@/components/la-rafaga/artist-marquee'; // <-- 1. IMPORTAR EL NUEVO COMPONENTE
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
        {/* --- SECCIÓN SUPERIOR MODIFICADA --- */}
        <div className="relative w-full h-[60vh] md:h-[80vh]"> {/* <-- 2. AÑADIR ALTURA DEFINIDA PARA MEJOR CONTROL EN MÓVIL */}
          <ImageCarousel />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4 z-10">
            <AudioPlayer />
          </div>
        </div>

        {/* <-- 3. AÑADIR EL NUEVO COMPONENTE MARQUEE AQUÍ */}
        <div className="mt-20 md:mt-24"> {/* Se ajusta el margen superior para que no se solape con el marquee */}
            <ArtistMarquee />
        </div>

        {/* --- CONTENEDOR PRINCIPAL MODIFICADO --- */}
        <div className="container mx-auto px-4 py-12 md:py-16 space-y-16 md:space-y-24"> {/* <-- 4. AJUSTAR PADDING Y MARGENES */}
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
        </div>
      </main>
      <footer className="py-6 px-4 md:px-8 border-t border-border text-center text-muted-foreground text-sm">
         {/* <-- 5. TRADUCIR TEXTO DEL FOOTER */}
        <p>© {new Date().getFullYear()} La Ráfaga Salsera. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
