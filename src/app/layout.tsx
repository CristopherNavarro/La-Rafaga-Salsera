import type { Metadata } from 'next';
// 1. IMPORTAMOS "ANTON"
import { Anton, Open_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/la-rafaga/header';
import { Toaster } from '@/components/ui/toaster';

// 2. CONFIGURAMOS "ANTON"
const anton = Anton({
  subsets: ['latin'],
  weight: ['400'], // Anton solo tiene el grosor "regular" (400)
  variable: '--font-anton', // La variable que usamos en el header y títulos
  display: 'swap',
});

// Mantenemos Open Sans para el cuerpo del texto
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'La Ráfaga Salsera',
  description: "Página web oficial del DJ de salsa La Ráfaga Salsera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. AÑADIMOS LA VARIABLE DE LA NUEVA FUENTE AL HTML
    <html lang="es" className={`${anton.variable} ${openSans.variable} dark`}>
      <head />
      <body>
        <Header />
        
        <main className="pt-20 pb-12">
          {children}
        </main>

        <Toaster />

        <footer className="py-6 px-4 md:px-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} La Ráfaga Salsera. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}