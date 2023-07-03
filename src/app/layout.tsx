import { Header } from './components/header'
import './globals.css'
import { Raleway } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Footer } from './components/footer'

config.autoAddCss = false

const raleway = Raleway({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Teste Nextjs Grupo GPAC',
  description: 'Teste do grupo GPAC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
