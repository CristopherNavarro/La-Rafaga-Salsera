import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Card } from '@/components/ui/card';

const tracks = [
  { title: 'La Vida Es Un Carnaval', artist: 'Celia Cruz' },
  { title: 'El Cantante', artist: 'Héctor Lavoe' },
  { title: 'Aguanile', artist: 'Willie Colón & Héctor Lavoe' },
  { title: 'Vivir Mi Vida', artist: 'Marc Anthony' },
  { title: 'Pedro Navaja', artist: 'Rubén Blades' },
];

export function TrackList() {
  return (
    <section className="w-full">
      <h2 className="text-4xl font-headline font-bold tracking-wider text-center mb-8 text-accent">Mezclas para Descargar</h2>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-headline tracking-wide text-base">Canción</TableHead>
              <TableHead className="font-headline tracking-wide text-base">Artista</TableHead>
              <TableHead className="text-right font-headline tracking-wide text-base">Descargar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tracks.map((track, index) => (
              <TableRow key={index} className="hover:bg-muted/50">
                <TableCell className="font-medium">{track.title}</TableCell>
                <TableCell className="text-muted-foreground">{track.artist}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Download className="h-5 w-5 text-accent" />
                    <span className="sr-only">Descargar</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </section>
  );
}
