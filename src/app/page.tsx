import { Header } from '@/components/la-rafaga/header';
import { ImageCarousel } from '@/components/la-rafaga/image-carousel';
import { AudioPlayer } from '@/components/la-rafaga/audio-player';
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
        <div className="relative">
          <ImageCarousel />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4 z-10">
            <AudioPlayer />
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 space-y-16 md:space-y-24 mt-12 md:mt-24">
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
        <p>&copy; {new Date().getFullYear()} La Rafaga Salsera. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
