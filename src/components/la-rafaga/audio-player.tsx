'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Rewind, FastForward, Radio } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(33);

  return (
    <Card className="w-full max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-accent/20 shadow-xl">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Image
            src="https://placehold.co/150x150.png"
            data-ai-hint="salsa album"
            alt="Album art"
            width={100}
            height={100}
            className="rounded-lg shadow-md aspect-square object-cover"
          />
          <div className="flex-grow w-full text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Radio className="w-5 h-5 text-primary animate-pulse" />
                <p className="text-sm font-bold text-primary tracking-widest uppercase">LIVE NOW</p>
            </div>
            <h3 className="text-xl font-headline tracking-wide">La Mezcla Perfecta</h3>
            <p className="text-muted-foreground">Live from the studio</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" className="text-accent hover:text-accent-foreground hover:bg-accent/20 transition-colors">
              <Rewind className="w-6 h-6" />
            </Button>
            <Button variant="default" size="icon" className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg transform hover:scale-105 transition-transform" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause className="w-8 h-8 fill-primary-foreground" /> : <Play className="w-8 h-8 fill-primary-foreground" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-accent hover:text-accent-foreground hover:bg-accent/20 transition-colors">
              <FastForward className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <p className="text-xs text-muted-foreground">1:23</p>
          <Slider value={[progress]} onValueChange={(value) => setProgress(value[0])} max={100} step={1} className="w-full" />
          <p className="text-xs text-muted-foreground">4:56</p>
        </div>
      </CardContent>
    </Card>
  );
}
