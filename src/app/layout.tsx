import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Press_Start_2P } from 'next/font/google';
import Link from 'next/link';
import LiveStatus from '@/components/LiveStatus'; // Asegúrate de tener esta ruta correcta

const poppins = Poppins({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
});

const press_start_2p = Press_Start_2P({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Multi Page App',
  description: 'With Nested Routes and Components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        {/* Navbar mejorado */}
        <header className='bg-gradient-to-r from-zinc-900 via-gray-800 to-zinc-900 shadow-lg sticky top-0 z-50'>
          <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
            <div className='flex gap-6 items-center text-white text-sm font-medium tracking-wide'>
              <Link
                href='/'
                className='hover:text-cyan-400 hover:underline transition'
              >
                Home
              </Link>
              <Link
                href='/about'
                className='hover:text-cyan-400 hover:underline transition'
              >
                About
              </Link>
              <Link
                href='/users'
                className='hover:text-cyan-400 hover:underline transition'
              >
                Users
              </Link>
              <Link
                href='https://ivanperezportafolio.vercel.app/'
                className='hover:text-cyan-400 hover:underline transition'
              >
                Portfolio
              </Link>
              <Link
                href='/Inspiration'
                className='hover:text-cyan-400 hover:underline transition'
              >
                Inspiration
              </Link>
            </div>
            <LiveStatus />
          </div>
        </header>

        {/* Main content */}
        <main className='min-h-screen bg-zinc-950 text-white'>{children}</main>
      </body>
    </html>
  );
}
