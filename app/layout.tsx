import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-barlow',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Telšių Statyba, UAB | Visi statybų darbai',
  description:
    'UAB Telšių Statyba – statybų veiklos generalinis rangovas, vykdantis projektus visoje Lietuvoje. Gyvenamosios ir komercinės paskirties pastatų statyba, renovacija ir projektavimas.',
  keywords: 'statyba, statybos, Telšiai, generalinis rangovas, renovacija, projektavimas, Lietuva',
  authors: [{ name: 'Telšių Statyba, UAB' }],
  openGraph: {
    title: 'Telšių Statyba, UAB | Visi statybų darbai',
    description: 'Statybų veiklos generalinis rangovas, vykdantis projektus visoje Lietuvoje.',
    locale: 'lt_LT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lt" className={`${inter.variable} ${barlow.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
