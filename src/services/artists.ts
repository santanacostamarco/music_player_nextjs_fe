/**
 * Fetches the user`s top artists.
 * @returns The Spotfy user profile.
 */
export const getArtists = async () => {
  const response = await fetch('/api/artists');

  const { artists } = (await response.json()) as UserArtistsInterface.Root;

  return artists;
};

/**
 * Fetches the artist by id.
 * @returns The Spotfy user profile.
 */
export const getArtist = async (id: string) => {
  const response = await fetch(`/api/artists/${id}`);

  const { artist } = (await response.json()) as ArtistsInterface.Root;

  return artist;
};
