import { PageProfile } from '@/components/PageProfile';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getProfile } from '@/services/profile';
import { QUERY_KEY } from '@/common/enum/query-key';

export default async function ProfilePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.USER_PROFILE],
    queryFn: getProfile,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageProfile />
    </HydrationBoundary>
  );
}
