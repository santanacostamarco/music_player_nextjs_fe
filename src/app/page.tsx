import Image from 'next/image';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Link } from '@/common/components/navigation/Link';

export default async function Home() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access_token');

  if (accessToken) {
    redirect('/start');
  }

  return (
    <div>
      <main className="flex h-screen flex-col items-center justify-center gap-2">
        <Image
          className="not-dark:invert"
          src="/assets/spotfy.png"
          alt="Next.js logo"
          width={164}
          height={49.06}
          priority
        />
        <h1 className="font-rubik text-sm">
          Entra com sua conta Spotify clicando no botão abaixo
        </h1>
        <div>
          <Link href="/login" variant="button">
            Entrar
          </Link>
        </div>
      </main>
    </div>
  );
}
