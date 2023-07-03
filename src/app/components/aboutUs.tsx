import { Oswald } from 'next/font/google'
import '@/app/styles/about-us.css'
import Image from 'next/image'

interface IAboutUs {
  title?: string
  content?: string
  imageSrc?: string
  imageAlt?: string
  imageTitle?: string
}

const oswald = Oswald({ weight: '600', subsets: ['latin'] })

export function AboutUs({
  title,
  content,
  imageSrc,
  imageAlt,
  imageTitle,
}: IAboutUs): JSX.Element {
  return (
    <section className="about-us-wrapper">
      <div className="about-us-content">
        <p className={`about-us-title ${oswald.className}`}>{title}</p>
        <p className="about-us-text">{content}</p>
      </div>

      <div className="about-us-content">
        <div className="about-us-image">
          <Image src={imageSrc!} alt={imageAlt!} width={691} height={435} />
        </div>
        <div className={`about-us-image-title ${oswald.className}`}>
          {imageTitle}
        </div>
      </div>
    </section>
  )
}
