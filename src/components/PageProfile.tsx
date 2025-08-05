'use client';

import { Button } from '@/common/components/navigation/Button';
import { getProfile } from '@/services/profile';
import { useQuery } from '@tanstack/react-query';
import { ProfileImage } from './ProfileImage';

export const PageProfile = () => {
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });

  const handleExit = () => {
    window.location.href = '/logout';
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      {profile && (
        <>
          <ProfileImage profile={profile} />
          <h1 className="text-2xl">{profile?.display_name}</h1>
        </>
      )}
      <Button onClick={handleExit}>Sair</Button>
    </div>
  );
};
