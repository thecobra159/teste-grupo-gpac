'use client'

import { Parallax } from 'react-parallax'
import { Bebas_Neue } from 'next/font/google'
import '@/app/styles/contact-us-section.css'

interface IContactUsSection {
  title: string
  content: string
  imageSrc: string
  imageAlt: string
  btnText: string
  btnLink: string
}

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export function ContactUsSection({
  title,
  content,
  imageSrc,
  imageAlt,
  btnText,
  btnLink,
}: IContactUsSection): JSX.Element {
  return (
    <Parallax
      blur={{ min: -25, max: 25 }}
      bgImage={imageSrc}
      bgImageAlt={imageAlt}
      strength={350}
      style={{ opacity: 0.8 }}
    >
      <section className="contact-us-wrapper">
        <div className="contact-us-content">
          <div className={`contact-us-title ${bebasNeue.className}`}>
            {title}
          </div>
          <div className="contact-us-text">{content}</div>
          <a
            className={`contact-us-button ${bebasNeue.className}`}
            href={btnLink}
          >
            <button>{btnText}</button>
          </a>
        </div>
      </section>
    </Parallax>
  )
}
