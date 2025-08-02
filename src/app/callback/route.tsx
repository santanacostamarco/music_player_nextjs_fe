import { redirect } from "next/navigation";
import { cookies } from "next/headers";

type SpotfyApiTokenResponse = {
  access_token: string;
  expires_in: number;
}

export const GET = async ({url}: Request) => {
  const {searchParams} = new URL(url)

  const params = new URLSearchParams({
    code: searchParams.get('code') || '',
    state: searchParams.get('state') || '',
  });

  const response = await fetch(`http://localhost:3001/callback?${params.toString()}`)

  const {
    access_token,
    expires_in,
  } = await response.json() as SpotfyApiTokenResponse

  if (access_token) {
    (await cookies()).set({
      name: 'access_token',
      value: access_token,
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: expires_in, 
    })
  
    redirect('/')
  }

  redirect('500')
}
