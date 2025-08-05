import { AlbumLink } from './AlbumLink';
import { PlaylistLink } from './PlaylistLink';

type ListAlbumsProps = {
  data: UserPlaylistsInterface.Playlist[];
};
export const ListPlaylists = ({ data }: ListAlbumsProps) => {
  return (
    <ul className="p-4 pt-2">
      {data.map((playlist) => (
        <li key={playlist.id}>
          <PlaylistLink data={playlist} />
        </li>
      ))}
    </ul>
  );
};
