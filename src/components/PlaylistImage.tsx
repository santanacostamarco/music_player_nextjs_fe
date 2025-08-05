import Image from 'next/image';

type PlaylistImageProps = {
  data: UserPlaylistsInterface.Playlist;
};
export const PlaylistImage = ({ data }: PlaylistImageProps) => {
  const search = new URLSearchParams({
    initials: data.name[0],
  });
  const imageUrl =
    data.images.find((i) => i.url)?.url || `/api/no-photo?${search.toString()}`;

  return (
    <Image
      src={imageUrl}
      alt={`Capa da playlist ${data.name}`}
      width={72}
      height={72}
    />
  );
};
