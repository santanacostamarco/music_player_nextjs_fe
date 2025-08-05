'use client';

import {
  getArtistAlbums,
  getArtistProfile,
  getArtistTopTracks,
} from '@/services/artists';
import { useQuery } from '@tanstack/react-query';
import { ArtistImage } from './ArtistImage';
import { Link } from '@/common/components/navigation/Link';
import { ListAlbums } from './ListAlbums';
import { ListTracks } from './ListTracks';

type PageArtistProfile = {
  id: string;
};
export const PageArtistProfile = ({ id }: PageArtistProfile) => {
  const { data: artist } = useQuery({
    queryKey: ['artistProfile', id],
    queryFn: () => getArtistProfile(id),
  });

  const { data: tracks } = useQuery({
    queryKey: ['artistTopTracks', id],
    queryFn: () => getArtistTopTracks(id),
  });

  const { data: albums } = useQuery({
    queryKey: ['artistAlbums', id],
    queryFn: () => getArtistAlbums(id),
  });

  return (
    <div>
      {artist && (
        <div className="flex items-center gap-1 p-4">
          <Link icon="arrow-left" href="/artists" />
          <h2 className="flex-1 text-base">{artist.name}</h2>
          <ArtistImage artist={artist} />
        </div>
      )}
      {albums && <ListAlbums data={albums} />}

      <div className="p-4 pb-1">
        <h1 className="mb-1">As melhores de {artist?.name}</h1>
      </div>
      {tracks && <ListTracks data={tracks} />}
    </div>
  );
};
