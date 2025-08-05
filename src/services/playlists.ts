/**
 * Fetches the user`s playlists.
 * @returns The Spotfy user's playlist.
 */
export const getPlaylists = async () => {
  const response = await fetch('/api/playlists');

  const { playlists } = (await response.json()) as UserPlaylistsInterface.Root;

  return playlists;
};
