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

        <section className="relative w-full h-[70vh] md:h-[85vh]">
          <ImageCarousel />
        </section>

        <section className="relative z-20 -mt-24 md:-mt-20">
          <ArtistMarquee />
          <div className="w-11/12 max-w-4xl mx-auto -mt-16 md:-mt-14">
            <AudioPlayer />
          </div>
        </section>
        
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

      </main>
      <footer className="mt-auto py-6 px-4 md:px-8 border-t border-border text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} La Ráfaga Salsera. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}