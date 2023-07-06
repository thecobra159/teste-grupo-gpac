'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Oswald } from 'next/font/google'
import '@/styles/banner.css'

interface IBanner {
  carouselItems: {
    imageSrc: string
    imageAlt: string
    firstTitle?: string
    secondTitle?: string
    thirdTitle?: string
  }[]
}

const oswald = Oswald({ weight: ['200', '400', '700'], subsets: ['latin'] })

export function Banner({ carouselItems }: IBanner): JSX.Element {
  const [selectedItem, setSelectedItem] = useState(0)

  function itemStepForword() {
    setSelectedItem(
      selectedItem === carouselItems.length - 1 ? 0 : selectedItem + 1,
    )
  }

  useEffect(() => {
    if (carouselItems.length > 1) {
      const interval = setInterval(itemStepForword, 3000)
      return () => clearInterval(interval)
    }
  }, [selectedItem])

  return (
    <section className={`${oswald.className} banner-wrapper`}>
      <div className="banner-image">
        <Image
          src={carouselItems[selectedItem].imageSrc}
          alt={carouselItems[selectedItem].imageAlt}
          fill
        />
      </div>

      <div className="banner-carousel">
        <aside
          className={`carousel-navigation ${
            carouselItems.length > 1 ? '' : 'invisible'
          }`}
        >
          {carouselItems?.map((_, index) => (
            <div key={`carousel_index_${index}`} className="carousel-index">
              <div
                className={`separator ${
                  selectedItem !== index ? 'invisible' : ''
                }`}
              />
              <p onClick={() => setSelectedItem(index)}>{index + 1}</p>
              <div
                className={`separator-double ${
                  selectedItem !== index ? 'invisible' : ''
                }`}
              />
            </div>
          ))}
        </aside>

        <div className="banner-corousel-content">
          <p className="first-title">
            {carouselItems[selectedItem].firstTitle}
          </p>
          <p className="second-title">
            {carouselItems[selectedItem].secondTitle}
          </p>
          <p className="third-title">
            {carouselItems[selectedItem].thirdTitle}
          </p>
        </div>
      </div>
    </section>
  )
}
