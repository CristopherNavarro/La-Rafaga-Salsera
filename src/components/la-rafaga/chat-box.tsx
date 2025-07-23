import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export function ChatBox() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-row items-center gap-2">
        <MessageSquare className="h-6 w-6 text-accent" />
        <CardTitle className="font-headline tracking-wide">Community Chat</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96 border-2 border-dashed border-border rounded-lg flex items-center justify-center bg-background/30">
          <p className="text-muted-foreground text-center p-4">Third-party chat widget can be embedded here.</p>
        </div>
      </CardContent>
    </Card>
  );
}
