import { QUERY_KEY } from '@/common/enum/query-key';
import { PagePlaylists } from '@/components/PagePlaylists';
import { getPlaylists } from '@/services/playlists';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function Playlists() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.PLAYLISTS],
    queryFn: getPlaylists,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PagePlaylists />
    </HydrationBoundary>
  );
}
