/**
 * Fetches the user`s playlists.
 * @returns The Spotfy user's playlist.
 */
export const getPlaylists = async () => {
  const response = await fetch('/api/playlists');

  const { playlists } = (await response.json()) as UserPlaylistsInterface.Root;

  return playlists;
};

type CreatePlaylistBody = {
  userId: string;
  name: string;
  description?: string;
  public: boolean;
};
/**
 * Creates a new playlist.
 */
export const createPlaylist = async (body: CreatePlaylistBody) => {
  const response = await fetch('/api/playlists/new', {
    method: 'POST',
    body: JSON.stringify(body),
  });
};
