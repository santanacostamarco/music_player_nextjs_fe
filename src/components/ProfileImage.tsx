import Image from 'next/image';

type ProfileImageProps = {
  profile: UserProfileInterface.Profile;
};
export const ProfileImage = ({ profile }: ProfileImageProps) => {
  const search = new URLSearchParams({
    initials: profile.display_name[0],
  });
  const imageUrl =
    profile.images.find((i) => i.url)?.url ||
    `/api/profile/no-photo?${search.toString()}`;

  return (
    <Image
      className="rounded-full"
      src={imageUrl}
      alt={`Foto de perfil de ${profile.display_name}`}
      width={128}
      height={128}
    />
  );
};
