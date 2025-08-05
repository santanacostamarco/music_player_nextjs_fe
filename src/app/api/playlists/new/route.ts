import { HEADERS } from '@/common/enum/headers';
import { bff } from '@/common/utils/bff';
import { getAccessToken } from '@/common/utils/cookies';

export const POST = async (req: Request) => {
  const accessToken = await getAccessToken();
  const { body } = req;

  const response = await fetch(bff('/user/playlists/new'), {
    headers: {
      [HEADERS.ACCESS_TOKEN]: accessToken,
    },
  });

  return response;
};
