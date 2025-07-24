import { Music } from 'lucide-react';

const artists = [
  'Celia Cruz', 'Héctor Lavoe', 'Marc Anthony', 'Willie Colón', 'Rubén Blades', 'El Gran Combo de Puerto Rico', 'Fania All-Stars',
  // Se repiten para un efecto de bucle infinito y suave
  'Celia Cruz', 'Héctor Lavoe', 'Marc Anthony', 'Willie Colón', 'Rubén Blades', 'El Gran Combo de Puerto Rico', 'Fania All-Stars'
];

export function ArtistMarquee() {
  // --- Añadir "hidden md:flex" a la siguiente línea ---
  return (
    <div className="relative hidden md:flex overflow-x-hidden bg-foreground text-background py-3 border-y-2 border-accent">
      {/* ... el resto del contenido no cambia ... */}
    </div>
  );
}
