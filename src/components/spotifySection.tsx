'use client'

import Image from 'next/image'
import { getAccessToken, getPlaylists } from '../api/SpotifyAPI'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import '@/styles/spotify-section.css'

export async function SpotifySection(): Promise<JSX.Element> {
  const token = await getAccessToken()
  const playlists = await getPlaylists(token, {
    user: 'spotify',
    limit: '10',
    offset: '0',
  })

  return (
    <section className="spotify-section-wrapper">
      <Carousel autoPlay centerMode centerSlidePercentage={25}>
        {playlists &&
          playlists.map((playlist, index) => (
            <a
              href={playlist.external_urls.spotify}
              target="_blank"
              key={index}
            >
              <button className={`spotify-card`}>
                <Image
                  src={playlist.images[0].url}
                  alt={playlist.description}
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 100vw"
                />
              </button>
            </a>
          ))}
      </Carousel>
    </section>
  )
}
