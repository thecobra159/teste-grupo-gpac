import { Bebas_Neue } from 'next/font/google'
import { Constants } from '../utils/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import '@/app/styles/contact-us-form.css'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export function ContactUsForm(): JSX.Element {
  return (
    <section className="contact-us-form-wrapper">
      <div className={`contact-us-form-content ${bebasNeue.className}`}>
        <div className="contact-item">
          <div className="flex gap-6">
            <FontAwesomeIcon icon={faEnvelope} size={'2x'} />
            <p>email</p>
          </div>
          <div className="contact-sub-item">{Constants.email}</div>
        </div>

        <div className="contact-item">
          <div className="flex gap-6">
            <FontAwesomeIcon icon={faPhone} size={'2x'} />
            <p>whatsapp</p>
          </div>
          <div className="contact-sub-item">{Constants.whatsapp}</div>
        </div>
      </div>

      <form className="contact-us-form-content">
        <input type="text" className="contact-input" placeholder="name" />
        <input type="email" className="contact-input" placeholder="email" />
        <input type="number" className="contact-input" placeholder="phone" />
        <input type="text" className="contact-input" placeholder="message" />

        <a className="contact-form-button">
          <button>enviar</button>
        </a>
      </form>
    </section>
  )
}
