import { Bebas_Neue } from 'next/font/google'
import '@/app/styles/footer.css'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export function Footer(): JSX.Element {
  return (
    <footer className="footer-wrapper">
      <p className={`footer-title ${bebasNeue.className}`}>faun</p>
      <p className="footer-content">
        Faun template edited by e-tools comunicação digital
      </p>
    </footer>
  )
}
