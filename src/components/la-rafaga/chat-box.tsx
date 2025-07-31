import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export function ChatBox() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-row items-center gap-2">
        <MessageSquare className="h-6 w-6 text-accent" />
        <CardTitle className="font-headline tracking-wide">Chat de la Comunidad</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96 w-full">
          <iframe
            src="https://deadsimplechat.com/zT4gnaIvs"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
