export interface SpotifyPostToken {
  grant_type: string
  client_id: string
  client_secret: string
}

export interface SpotifyGetToken {
  access_token: string
  token_type: string
  expires_in: string
}

export interface SpotifyGetPlaylists {
  user: string
  limit: string
  offset: string
}

export interface SpotifyPlaylist {
  description: string
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: {
    url: string
  }[],
  name: string,
}
