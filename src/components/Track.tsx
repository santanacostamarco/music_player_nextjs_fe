type TrackProps = {
  data: ArtistTopTracksInterface.Track;
};

export const Track = ({ data }: TrackProps) => {
  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
};
