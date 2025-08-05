import Link from 'next/link';
import { PlaylistImage } from './PlaylistImage';

type PlaylistProp = {
  data: UserPlaylistsInterface.Playlist;
};

export const PlaylistLink = ({ data }: PlaylistProp) => {
  return (
    <Link
      href={`/playlists/${data.id}`}
      className="mb-2 flex items-center gap-2"
    >
      <PlaylistImage data={data} />
      <div className="flex flex-col">
        <span className="text-sm">{data.name}</span>
        <span className="text-xs">{data.owner.display_name}</span>
      </div>
    </Link>
  );
};
