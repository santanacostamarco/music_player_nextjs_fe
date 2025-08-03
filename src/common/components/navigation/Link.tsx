import NextLink from 'next/link';
import cc from 'classcat';

type LinkProps = PWC<{
  variant?: 'text' | 'button';
  href: string;
}>;

export const Link = ({ children, variant = 'text', href }: LinkProps) => {
  const classNames = ['font-rubik'];
  if (variant === 'button') {
    classNames.push(
      'bg-button-bg',
      'inline-block',
      'px-5',
      'py-2',
      'rounded-full',
      'text-base',
      'text-button-fg'
    );
  }
  return (
    <NextLink href={href} className={cc(classNames)}>
      {children}
    </NextLink>
  );
};
