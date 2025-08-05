import { AlbumLink } from './AlbumLink';

type ListAlbumsProps = {
  data: ArtistAlbumsInterface.Album[];
};
export const ListAlbums = ({ data }: ListAlbumsProps) => {
  return (
    <div className="p-4 pt-2">
      {data.map((album) => (
        <AlbumLink key={album.id} data={album} />
      ))}
    </div>
  );
};
