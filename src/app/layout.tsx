import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
  weight: ['300', '400', '500'],
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
        <nav className='p-4 bg-gray-800 text-white'>
          <Link href='/' className='mr-4'>Home</Link>
          <Link href='/about' className='mr-4'>About</Link>
          <Link href='/users'>Users</Link>
          <Link href='/RandomQuote'>Random Quote</Link>
          <Link href='/RandomQuote'>Time Now</Link>
        </nav>
        <main className='p-4'>{children}</main>
      </body>
    </html>
  );
}
