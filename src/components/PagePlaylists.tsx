'use client';

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/common/enum/query-key';
import { getPlaylists } from '@/services/playlists';
import { Button } from '@/common/components/navigation/Button';
import { ListPlaylists } from './ListPlaylists';

export const PagePlaylists = () => {
  const { data: playlists } = useQuery({
    queryKey: [QUERY_KEY.PLAYLISTS],
    queryFn: getPlaylists,
  });

  return (
    <div>
      <div className="flex justify-between p-4">
        <div>
          <h1 className="mb-1">Minhas Playlists</h1>
          <p>Sua coleção pessoal de playlists</p>
        </div>
        <Button>Criar playlist</Button>
      </div>
      <div className="p-4 pt-2">
        {playlists && <ListPlaylists data={playlists} />}
      </div>
    </div>
  );
};
