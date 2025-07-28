'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50); // State para el control de volumen
  const audioRef = useRef<HTMLAudioElement | null>(null); // Referencia al elemento de audio

  // Crear el elemento de audio al montar el componente
  useEffect(() => {
    audioRef.current = new Audio('https://stream.zeno.fm/yu4n0x7hq7zuv');
    // Opcional: manejar errores de carga o reproducción del stream
    if (audioRef.current) {
      audioRef.current.onerror = (e) => {
        console.error('Error loading audio stream:', e);
        // Aquí podrías mostrar un mensaje al usuario
      };
    }
    return () => {
      // Limpiar el elemento de audio al desmontar el componente
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100; // Actualizar el volumen del audio
    }
  }, [volume]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error('Error playing stream:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Card className="w-full bg-card/50 backdrop-blur-sm border-accent/20 shadow-xl">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Image
            src="/logo.png"
            alt="La Ráfaga Salsera Logo"
            width={150}
            height={150}
            className="aspect-square object-cover rounded-md"
          />
          <div className="flex-grow w-full text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                {/* Icono de radio que puede animarse si está en vivo */}
                <Volume2 className="w-5 h-5 text-primary" /> {/* Cambiado a icono de volumen */}
                <p className="text-sm font-bold text-primary tracking-widest uppercase">En Vivo</p> {/* Texto En Vivo */}
            </div>
            <h3 className="text-xl font-headline tracking-wide">La Ráfaga Salsera</h3> {/* Nombre de la radio */}
            <p className="text-muted-foreground">Disfruta de la mejor salsa!</p> {/* Descripción opcional */}
          </div>
          {/* Botón de Play/Pause */}
          <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-0">
            <Button
              variant="default"
              size="icon"
              className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause className="w-8 h-8 fill-primary-foreground" /> : <Play className="w-8 h-8 fill-primary-foreground" />}
            </Button>
          </div>
        </div>
        {/* Control de Volumen */}
        <div className="flex items-center gap-4 mt-4">
          <VolumeX className="w-5 h-5 text-muted-foreground" /> {/* Icono de silencio al inicio de la barra */}
          <Slider
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
            className="w-full"
          />
           <Volume2 className="w-5 h-5 text-muted-foreground" /> {/* Icono de volumen al final de la barra */}
        </div>
      </CardContent>
    </Card>
  );
}