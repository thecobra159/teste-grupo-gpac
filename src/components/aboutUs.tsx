import { Oswald } from 'next/font/google'
import Image from 'next/image'
import '@/styles/about-us.css'

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
        <Image
          src={imageSrc!}
          alt={imageAlt!}
          width={691}
          height={435}
          className="about-us-image"
        />
        <div className={`about-us-image-title ${oswald.className}`}>
          {imageTitle}
        </div>
      </div>
    </section>
  )
}
