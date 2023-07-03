'use client'

import { Bebas_Neue } from 'next/font/google'
import { useEffect, useState } from 'react'
import '@/app/styles/video-section.css'

interface IVideoSection {
  videoSrc?: string
  videoAlt?: string
  title?: string
  content?: string
}

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export function VideoSection({
  videoSrc,
  title,
  content,
}: IVideoSection): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false)

  function handlePlayVideo() {
    console.log('chegou aqui')
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="video-section-wrapper" onClick={handlePlayVideo}>
      <div className="video-section-player">
        <video
          src={videoSrc}
          controls={isPlaying}
          muted
          autoPlay
          height={'100%'}
          width={'100%'}
        />
      </div>

      {!isPlaying && (
        <div className="video-section-content">
          <div className={`video-section-title ${bebasNeue.className}`}>
            {title}
          </div>
          <div className="video-section-text">{content}</div>
        </div>
      )}
    </section>
  )
}
