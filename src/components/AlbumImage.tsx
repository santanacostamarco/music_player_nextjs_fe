import Image from 'next/image';

type AlbumImageProps = {
  album: ArtistAlbumsInterface.Album;
};
export const AlbumImage = ({ album }: AlbumImageProps) => {
  const search = new URLSearchParams({
    initials: album.name[0],
  });
  const imageUrl =
    album.images.find((i) => i.url)?.url ||
    `/api/no-photo?${search.toString()}`;

  return (
    <Image
      src={imageUrl}
      alt={`Capa de ${album.name}`}
      width={72}
      height={72}
    />
  );
};
