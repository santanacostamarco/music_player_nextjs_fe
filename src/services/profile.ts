/**
 * Fetches the user profile.
 * @returns The Spotfy user profile.
 */
export const getProfile = async () => {
  const response = await fetch('/api/profile');

  const { profile } = (await response.json()) as UserProfileInterface.Root;

  return profile;
};
