import { Track } from './Track';

type ListTracksPRops = {
  data: ArtistTopTracksInterface.Track[];
};
export const ListTracks = ({ data }: ListTracksPRops) => {
  return (
    <ul className="p-4 pt-2">
      {data.map((track) => (
        <li key={track.id}>
          <Track data={track} />
        </li>
      ))}
    </ul>
  );
};
