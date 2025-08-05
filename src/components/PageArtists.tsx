'use client';

import { getArtists } from '@/services/artists';
import { useQuery } from '@tanstack/react-query';
import { ArtistLink } from '@/components/ArtistLink';
import { QUERY_KEY } from '@/common/enum/query-key';

export const PageArtists = () => {
  const { data: artists } = useQuery({
    queryKey: [QUERY_KEY.ARTISTS],
    queryFn: getArtists,
  });
  return (
    <div>
      <div className="p-4">
        <h1 className="mb-1">Top Artistas</h1>
        <p>Aqui você encontra seus artistas preferidos</p>
      </div>
      <div className="p-4 pt-2">
        <ul>
          {artists &&
            artists.map((artist) => (
              <li key={artist.id}>
                <ArtistLink data={artist} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
