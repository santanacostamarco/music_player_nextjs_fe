import { cookies } from 'next/headers';
import { Link } from '@/common/components/navigation/Link';
import { PageConstruction } from '@/components/PageConstruction';

export default async function Home() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access_token');

  if (!accessToken) {
    return (
      <div>
        <main className="flex h-screen flex-col items-center justify-center gap-2">
          <h1 className="text-sm">
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

  return <PageConstruction />;
}
