import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

type SpotfyApiTokenResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
};

export const GET = async ({ url }: Request) => {
  const { searchParams } = new URL(url);

  const params = new URLSearchParams({
    code: searchParams.get('code') || '',
    state: searchParams.get('state') || '',
  });

  const response = await fetch(
    `${process.env.BFF_BASE_URL}/auth/callback?${params.toString()}`
  );

  const { access_token, expires_in, refresh_token } =
    (await response.json()) as SpotfyApiTokenResponse;

  if (!access_token || !refresh_token) {
    redirect('500');
  }

  const reqCookies = await cookies();

  reqCookies.set({
    name: 'access_token',
    value: access_token,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: expires_in,
  });

  reqCookies.set({
    name: 'refresh_token',
    value: refresh_token,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: expires_in,
  });

  redirect('/');
};
