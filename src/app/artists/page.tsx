import { QUERY_KEY } from '@/common/enum/query-key';
import { PageArtists } from '@/components/PageArtists';
import { getArtists } from '@/services/artists';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function Artists() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.ARTISTS],
    queryFn: getArtists,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageArtists />
    </HydrationBoundary>
  );
}
