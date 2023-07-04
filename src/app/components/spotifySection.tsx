import Image from 'next/image'
import { getAccessToken, getPlaylists } from '../api/SpotifyAPI'
import '@/app/styles/spotify-section.css'

export async function SpotifySection(): Promise<JSX.Element> {
  const token = await getAccessToken()
  const playlists = await getPlaylists(token, {
    user: 'spotify',
    limit: '10',
    offset: '0',
  })

  return (
    <section className="spotify-section-wrapper">
      {playlists &&
        playlists.map((playlist, index) => (
          <div
            className={`spotify-card ${index > 3 ? 'hidden' : ''}`}
            key={index}
          >
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
    </section>
  )
}
