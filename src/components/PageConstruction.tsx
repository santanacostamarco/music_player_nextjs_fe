'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const PageConstruction = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <p>🎧🎵 subiu a construção como se fosse máquina</p>
      <h1>Em breve...</h1>
      <Link href="#" onClick={() => router.back()}>
        Voltar
      </Link>
    </div>
  );
};
