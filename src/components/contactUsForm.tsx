import { Bebas_Neue } from 'next/font/google'
import { Constants } from '@/utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import '@/styles/contact-us-form.css'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export function ContactUsForm(): JSX.Element {
  const wppText = encodeURI('Olá')

  return (
    <section className="contact-us-form-wrapper">
      <div className={`contact-us-form-content ${bebasNeue.className}`}>
        <div className="contact-item">
          <div className="contact-item-content">
            <FontAwesomeIcon icon={faEnvelope} size={'2x'} />
            <p>email</p>
          </div>
          <a href={`mailto:${Constants.email}`}>
            <button className="contact-sub-item">{Constants.email}</button>
          </a>
        </div>

        <div className="contact-item">
          <div className="contact-item-content">
            <FontAwesomeIcon icon={faPhone} size={'2x'} />
            <p>whatsapp</p>
          </div>
          <a
            href={`https://api.whatsapp.com/send?phone=${Constants.whatsapp}&text=${wppText}`}
            target="_blank"
          >
            <button className="contact-sub-item">{Constants.whatsapp}</button>
          </a>
        </div>
      </div>

      <form className="contact-us-form-content">
        <input type="text" className="contact-input" placeholder="name" />
        <input type="email" className="contact-input" placeholder="email" />
        <input type="tel" className="contact-input" placeholder="phone" />
        <textarea className="contact-input message" placeholder="message" />

        <button className={`contact-form-button ${bebasNeue.className}`}>
          enviar
        </button>
      </form>
    </section>
  )
}
