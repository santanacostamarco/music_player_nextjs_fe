import Link from 'next/link';
import { AlbumImage } from './AlbumImage';
import dayjs from 'dayjs';

type AlbumProp = {
  data: ArtistAlbumsInterface.Album;
};

export const AlbumLink = ({ data }: AlbumProp) => {
  return (
    <Link href={`/album/${data.id}`} className="mb-2 flex items-center gap-2">
      <AlbumImage album={data} />
      <div className="flex flex-col">
        <span className="text-sm">{data.name}</span>
        <span className="text-xs">
          {dayjs(data.release_date).format('DD/MM/YYYY')}
        </span>
      </div>
    </Link>
  );
};
