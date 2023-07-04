import {
  SpotifyGetPlaylists,
  SpotifyGetToken,
  SpotifyPlaylist,
  SpotifyPostToken,
} from '../interfaces/Spotify'

const RevalidationTime = 3600 // revalidate in 1 hour

const SpotifyEndpoint = {
  token: 'https://accounts.spotify.com/api/token',
  playlists: `https://api.spotify.com/v1/users/%user/playlists?limit=%limit&offset=%offset`,
}

const SpotifyCredentials = {
  grantType: 'client_credentials',
  clientId: '1b786884ac934556a027654f1a8c3533',
  clientSecret: '1341c76ce4704d42bfd0d755ec09462a',
}

export async function getAccessToken(): Promise<SpotifyGetToken> {
  const tokenData = new URLSearchParams({
    grant_type: SpotifyCredentials.grantType,
    client_id: SpotifyCredentials.clientId,
    client_secret: SpotifyCredentials.clientSecret,
  })

  const res = await fetch(SpotifyEndpoint.token, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: tokenData,
    next: {
      revalidate: RevalidationTime,
    },
  })

  return (await res.json()) as SpotifyGetToken
}

export async function getPlaylists(
  token: SpotifyGetToken,
  playlistsInfo: SpotifyGetPlaylists,
): Promise<SpotifyPlaylist[]> {
  const authToken = token.token_type + ' ' + token.access_token
  const headers = new Headers({
    Authorization: authToken,
    'Content-Type': 'application/x-www-form-urlencoded',
  })
  const endpoint = SpotifyEndpoint.playlists
    .replace('%user', playlistsInfo.user)
    .replace('%limit', playlistsInfo.limit)
    .replace('%offset', playlistsInfo.offset)

  const res = await fetch(endpoint, {
    method: 'GET',
    headers,
    next: {
      revalidate: RevalidationTime,
    },
  })

  const playlists = await res.json()

  return playlists['items'] as SpotifyPlaylist[]
}
