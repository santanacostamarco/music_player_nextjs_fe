import { redirect } from 'next/navigation';

export const GET = async () => {
  const response = await fetch(`${process.env.BFF_BASE_URL}/auth/login`);

  const data = (await response.json()) as { url: string };

  redirect(data.url);
};
