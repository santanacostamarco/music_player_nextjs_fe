/**
 * Fetches the user`s top artists.
 * @returns The Spotfy user's top artists.
 */
export const getArtists = async () => {
  const response = await fetch('/api/artists');

  const { artists } = (await response.json()) as UserArtistsInterface.Root;

  return artists;
};

/**
 * Fetches the artist by id.
 * @returns The Spotfy artist.
 */
export const getArtistProfile = async (id: string) => {
  const response = await fetch(`/api/artists/${id}`);

  const { artist } = (await response.json()) as ArtistInterface.Root;

  return artist;
};

/**
 * Fetches the artist's top tracks by artist's id.
 * @returns The artist's top tracks.
 */
export const getArtistTopTracks = async (id: string) => {
  const response = await fetch(`/api/artists/${id}/top-tracks`);

  const { tracks } = (await response.json()) as ArtistTopTracksInterface.Root;

  return tracks;
};

/**
 * Fetches the artist's albums by artist's id.
 * @returns The artist's albums.
 */
export const getArtistAlbums = async (id: string) => {
  const response = await fetch(`/api/artists/${id}/albums`);

  const { albums } = (await response.json()) as ArtistAlbumsInterface.Root;

  return albums;
};
