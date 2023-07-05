'use client'

import Image from 'next/image'
import { getAccessToken, getPlaylists } from '../api/SpotifyAPI'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import '@/app/styles/spotify-section.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export async function SpotifySection(): Promise<JSX.Element> {
  const token = await getAccessToken()
  const playlists = await getPlaylists(token, {
    user: 'spotify',
    limit: '10',
    offset: '0',
  })

  return (
    <section className="spotify-section-wrapper">
      <div className="spotify-section-controls">
        <div>
          <button>
            <FontAwesomeIcon icon={faAngleLeft} width={33} height={33} />
          </button>
        </div>
        <div>
          <button>
            <FontAwesomeIcon icon={faAngleRight} width={33} height={33} />
          </button>
        </div>
      </div>

      <Carousel autoPlay centerMode centerSlidePercentage={25}>
        {playlists &&
          playlists.map((playlist, index) => (
            <div className={`spotify-card`} key={index}>
              <a href={playlist.external_urls.spotify} target="_blank">
                <button>
                  <Image
                    src={playlist.images[0].url}
                    alt={playlist.description}
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 100vw"
                  />
                </button>
              </a>
            </div>
          ))}
      </Carousel>
    </section>
  )
}
