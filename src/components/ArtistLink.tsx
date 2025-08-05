import { ArtistImage } from '@/components/ArtistImage';
import Link from 'next/link';

type ArtistProp = {
  data: UserArtistsInterface.Artist;
};

export const ArtistLink = ({ data }: ArtistProp) => {
  return (
    <Link href={`/artists/${data.id}`} className="mb-2 flex items-center gap-2">
      <ArtistImage artist={data} />
      <span>{data.name}</span>
    </Link>
  );
};
