import { Music, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="py-6 px-4 md:px-8 flex items-center justify-between border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-20">
      <div className="flex items-center gap-4">
        <Music className="text-primary h-8 w-8" />
        <h1 className="text-3xl md:text-4xl font-headline tracking-wider text-foreground">
          La Rafaga Salsera
        </h1>
      </div>
      <nav className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-accent">
            <Facebook className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-accent">
            <Instagram className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="#" aria-label="Youtube" className="text-muted-foreground hover:text-accent">
            <Youtube className="h-5 w-5" />
          </a>
        </Button>
      </nav>
    </header>
  );
}
