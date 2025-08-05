import { Artists } from '@/components/Artists';
import { getArtists } from '@/services/artists';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function ArtistsPage() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ['artists'],
    queryFn: getArtists,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Artists />
    </HydrationBoundary>
  );
}
