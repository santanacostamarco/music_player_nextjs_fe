import NextLink from 'next/link';
import cc from 'classcat';
import Image from 'next/image';

type LinkProps = PWC<{
  href: string;
  icon?: string;
  variant?: 'text' | 'button' | 'nav';
  classNames?: string;
}>;

export const Link = ({
  children,
  variant = 'text',
  href,
  icon,
  classNames = '',
}: LinkProps) => {
  const innerClassNames = classNames.split(' ');

  if (variant === 'button') {
    innerClassNames.push(
      'font-rubik',
      'bg-button-bg',
      'inline-block',
      'px-5',
      'py-2',
      'rounded-full',
      'text-base',
      'text-button-fg'
    );
  }

  if (variant === 'nav') {
    innerClassNames.push('font-bold', 'text-lg');
  }

  return (
    <NextLink
      href={href}
      className={cc([...innerClassNames, 'flex', 'items-center', 'gap-3'])}
    >
      {icon && (
        <Image
          src={`/assets/icons/${icon}.svg`}
          className="not-dark:invert"
          alt={`Ícone "${icon}"`}
          width={24}
          height={24}
          priority
        />
      )}
      {children}
    </NextLink>
  );
};
