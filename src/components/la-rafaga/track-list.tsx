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
  { title: 'Déjala Bailar', artist: 'Fruko y Sus Tesos', downloadPath: '/music/dejala-bailar.mp3' },
  { title: 'Cada Quien', artist: 'La Salsa Mayor', downloadPath: '/music/cada-quien.mp3' },
  { title: 'Las Maracas', artist: 'Los Tumis De Cartavio', downloadPath: '/music/las-maracas.mp3' },
  { title: 'La Canción Que Te Prometí', artist: 'Orquesta Borinquen', downloadPath: '/music/la-cancion-que-te-prometi.mp3' },
  { title: 'Agua De Clavelito.', artist: 'Johnny Pacheco', downloadPath: '/music/agua-de-clavelito.mp3' },
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
                <TableCell>{track.artist}</TableCell>
                <TableCell className="text-right w-1/6">
                  <a href={track.downloadPath} download={track.title + ".mp3"}>
                    <Button variant="ghost" size="icon">
                      <Download className="h-5 w-5 text-accent" />
                      <span className="sr-only">Descargar</span>
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </section>
  );
}
