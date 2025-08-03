'use client';

import { Link } from '@/common/components/navigation/Link';
import { SpotfyLogo } from '@/common/components/SpotfyLogo';
import cc from 'classcat';
import { usePathname } from 'next/navigation';

type NavType = {
  title: string;
  path: string;
  icon: string;
};

const navigationMap = new Map<string, NavType>([
  [
    'home',
    {
      title: 'Home',
      path: '/',
      icon: 'house',
    },
  ],
  [
    'artists',
    {
      title: 'Artistas',
      path: '/artists',
      icon: 'disc',
    },
  ],
  [
    'playlists',
    {
      title: 'Playlists',
      path: '/playlists',
      icon: 'play',
    },
  ],
  [
    'profile',
    {
      title: 'Perfil',
      path: '/profile',
      icon: 'person',
    },
  ],
]);

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="bg-face-dark flex flex-col lg:h-screen lg:w-3xs">
      <div className="flex-1 pt-3.5 pl-3.5">
        <div className="mb-5">
          <SpotfyLogo />
        </div>
        <ol>
          {Array.from(navigationMap).map(([key, nav]) => (
            <li key={key} className="mb-3">
              <Link
                variant="nav"
                href={nav.path}
                icon={nav.icon}
                classNames={cc({
                  'opacity-60 hover:opacity-100 transition-opacity':
                    pathname !== nav.path,
                })}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <p>Instalar PWA</p>
      </div>
    </aside>
  );
};
