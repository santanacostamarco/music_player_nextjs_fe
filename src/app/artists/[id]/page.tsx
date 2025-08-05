import { QUERY_KEY } from '@/common/enum/query-key';
import { PageArtistProfile } from '@/components/PageArtistProfile';
import {
  getArtistAlbums,
  getArtistProfile,
  getArtistTopTracks,
} from '@/services/artists';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

type ParamsProps = {
  params: Promise<{ id: string }>;
};
export default async function Artist({ params }: ParamsProps) {
  const queryClient = new QueryClient();
  const { id } = await params;

  queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.ARTIST_PROFILE, id],
    queryFn: () => getArtistProfile(id),
  });

  queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.ARTIST_TOP_TRACKS, id],
    queryFn: () => getArtistTopTracks(id),
  });

  queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.ARTIST_ALBUMS, id],
    queryFn: () => getArtistAlbums(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageArtistProfile id={id} />
    </HydrationBoundary>
  );
}
