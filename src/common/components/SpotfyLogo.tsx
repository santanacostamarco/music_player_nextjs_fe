import Image from 'next/image';

export const SpotfyLogo = () => (
  <Image
    className="not-dark:invert"
    src="/assets/spotfy.png"
    alt="Spotfy logo"
    width={164}
    height={49.06}
    priority
  />
);
