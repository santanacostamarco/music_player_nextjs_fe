import { deleteAccessToken } from '@/common/utils/cookies';
import { redirect } from 'next/navigation';

export const GET = async () => {
  await deleteAccessToken();

  redirect('/');
};
