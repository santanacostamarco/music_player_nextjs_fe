import { HEADERS } from '@/common/enum/headers';
import { bff } from '@/common/utils/bff';
import { getAccessToken } from '@/common/utils/cookies';
import { Profile } from '@/components/Profile';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    redirect('/');
  }

  const response = await fetch(bff('/user/profile'), {
    headers: {
      [HEADERS.ACCESS_TOKEN]: accessToken,
    },
  });

  const { profile } = (await response.json()) as UserProfileInterface.Root;

  return <Profile profile={profile} />;
}
