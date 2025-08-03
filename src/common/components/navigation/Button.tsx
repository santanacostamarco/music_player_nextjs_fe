import NextLink from 'next/link';
import cc from 'classcat';
import Image from 'next/image';

type ButtonProps = PWC<
  React.DOMAttributes<HTMLButtonElement> & {
    icon?: string;
    variant?: 'text' | 'button';
    classNames?: string;
  }
>;

export const Button = ({
  children,
  variant = 'button',
  icon,
  classNames = '',
  ...buttonProps
}: ButtonProps) => {
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

  return (
    <button
      {...buttonProps}
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
    </button>
  );
};
