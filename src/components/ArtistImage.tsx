import Image from 'next/image';

type ArtistImageProps = {
  artist: UserArtistsInterface.Artist;
};
export const ArtistImage = ({ artist }: ArtistImageProps) => {
  const search = new URLSearchParams({
    initials: artist.name[0],
  });
  const imageUrl =
    artist.images.find((i) => i.url)?.url ||
    `/api/no-photo?${search.toString()}`;

  return (
    <Image
      className="rounded-full"
      src={imageUrl}
      alt={`Foto de ${artist.name}`}
      width={64}
      height={64}
    />
  );
};
