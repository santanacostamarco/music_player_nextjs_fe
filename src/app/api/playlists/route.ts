import { HEADERS } from '@/common/enum/headers';
import { bff } from '@/common/utils/bff';
import { getAccessToken } from '@/common/utils/cookies';

export const GET = async () => {
  const accessToken = await getAccessToken();

  const response = await fetch(bff('/user/playlists'), {
    headers: {
      [HEADERS.ACCESS_TOKEN]: accessToken,
    },
  });

  return response;
};
