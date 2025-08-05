import { HEADERS } from '@/common/enum/headers';
import { bff } from '@/common/utils/bff';
import { getAccessToken } from '@/common/utils/cookies';

type ParamsProps = { params: { id: string } };

export const GET = async (req: Request, { params }: ParamsProps) => {
  const accessToken = await getAccessToken();

  const response = await fetch(bff(`/artist/${params.id}/top-tracks`), {
    headers: {
      [HEADERS.ACCESS_TOKEN]: accessToken,
    },
  });

  return response;
};
