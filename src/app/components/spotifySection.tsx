import '@/app/styles/spotify-section.css'

export async function SpotifySection(): Promise<JSX.Element> {
  const response = await fetch(
    `'https://api.spotify.com/v1/spotify/playlists?limit=10&offset=10'`,
    {
      next: { revalidate: 10000 },
    },
  )

  const playlists = await response.json()

  console.log('response', playlists)

  return <section className="spotify-section-wrapper">spotify</section>
}
