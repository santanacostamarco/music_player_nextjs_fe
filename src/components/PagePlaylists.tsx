'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/common/enum/query-key';
import { getPlaylists, createPlaylist } from '@/services/playlists';
import { Button } from '@/common/components/navigation/Button';
import { ListPlaylists } from './ListPlaylists';
import { Dialog } from '@/common/components/display/Dialog';
import { useRef, useState } from 'react';
import { getProfile } from '@/services/profile';

export const PagePlaylists = () => {
  const { data: profile } = useQuery({
    queryKey: [QUERY_KEY.USER_PROFILE],
    queryFn: getProfile,
  });

  const { data: playlists, refetch: refetchPlaylists } = useQuery({
    queryKey: [QUERY_KEY.PLAYLISTS],
    queryFn: getPlaylists,
  });

  const handleTogglePlaylist = () => {
    setIsDialogOpen((v) => !v);
  };

  const { mutate: mutationCreatePlaylist } = useMutation({
    mutationKey: [QUERY_KEY.CREATE_PLAYLIST],
    mutationFn: createPlaylist,
    onSuccess() {
      handleTogglePlaylist();
      refetchPlaylists();
    },
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState('Minha playlist #1');
  const formRef = useRef<HTMLFormElement>(null);

  const handlePlaylistNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    e.preventDefault();
    setPlaylistName(e.target.value);
  };

  const handleConfirmClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (profile) {
      mutationCreatePlaylist({
        name: playlistName,
        public: false,
        userId: profile.id,
        description: 'Created with my custom spotfy app!',
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between p-4">
        <div>
          <h1 className="mb-1">Minhas Playlists</h1>
          <p>Sua coleção pessoal de playlists</p>
        </div>
        <Button onClick={handleTogglePlaylist}>Criar playlist</Button>
      </div>
      <div className="p-4 pt-2">
        {playlists && <ListPlaylists data={playlists} />}
      </div>
      <Dialog
        open={isDialogOpen}
        onClose={handleTogglePlaylist}
        onConfirm={handleConfirmClick}
        confirmText="Criar"
      >
        <h4 className="mb-3 text-center text-sm">Dê um nome a sua playlist</h4>
        <form
          ref={formRef}
          action="#"
          className="px-4"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            className="font-rubik w-full min-w-[504px] border-b-1 border-gray-400 text-center text-2xl font-bold tracking-wide"
            name="playlist-name"
            value={playlistName}
            onChange={handlePlaylistNameChange}
            required
          />
        </form>
      </Dialog>
    </div>
  );
};
