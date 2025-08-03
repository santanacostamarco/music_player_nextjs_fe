import { cookies } from 'next/headers';

/**
 * Get the access token from the request cookies.
 * @returns The cookie "access_token".
 */
export const getAccessToken = async () => {
  const reqCookies = await cookies();
  const accessToken = reqCookies.get('access_token');
  return accessToken?.value || '';
};

/**
 * Deletes the cookie "access_token".
 */
export const deleteAccessToken = async () => {
  const reqCookies = await cookies();
  reqCookies.delete('access_token');
  reqCookies.delete('refresh_token');
};
