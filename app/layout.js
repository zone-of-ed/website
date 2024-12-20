import './scss/main.scss';
import { DM_Sans, MuseoModerno, Poppins, Source_Code_Pro } from 'next/font/google';

export const metadata = {
  title: 'ZoneOfEd',
  description: 'Zone of Ed',

};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-poppins',
});

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-museo',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '500', '600', '900'],
  style: ['normal', 'italic'],
  variable: '--font-dmsans',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['300', '500', '600', '900'],
  style: ['normal', 'italic'],
  variable: '--font-sourceCodePro',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}
