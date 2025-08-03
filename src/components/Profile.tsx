'use client';

import { Button } from '@/common/components/navigation/Button';

type ProfileProps = {
  profile: UserProfileInterface.Profile;
};
export const Profile = ({ profile }: ProfileProps) => {
  const handleExit = () => {
    window.location.href = '/logout';
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-2xl">{profile.display_name}</h1>
      <Button onClick={handleExit}>Sair</Button>
    </div>
  );
};
