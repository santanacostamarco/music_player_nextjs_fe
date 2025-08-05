import { HEADERS } from '@/common/enum/headers';
import { bff } from '@/common/utils/bff';
import { getAccessToken } from '@/common/utils/cookies';

export const POST = async (req: Request) => {
  const accessToken = await getAccessToken();
  const body = await req.json();

  const response = await fetch(bff('/user/playlists/new'), {
    headers: {
      [HEADERS.ACCESS_TOKEN]: accessToken,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  });

  return response;
};
