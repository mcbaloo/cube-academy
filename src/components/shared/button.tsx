import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';

type CustomButtonProps = {
  styleType?: ButtonStyle;
  disabled?: boolean;
} & LinkProps &
  Omit<React.HTMLProps<HTMLAnchorElement>, 'ref'>;

export enum ButtonStyle {
  solid = 'solid',
  outline = 'outline',
}

const resolveButtonStyles = ({
  type,
  isDisabled,
}: {
  type: ButtonStyle;
  isDisabled: boolean;
}) => {
  const baseClasses = 'inline-flex items-center justify-center text-sm leading-6';

  const styleMapping = {
    [ButtonStyle.solid]: `shadow-lg text-white bg-black hover:bg-white hover:border hover:border-black hover:text-black`,
    [ButtonStyle.outline]: `border border-black text-black hover:border-pink hover:bg-gray-50 shadow-md`,
  };

  const disabledMapping = {
    [ButtonStyle.solid]: 'shadow-none text-white bg-gray-400 cursor-not-allowed',
    [ButtonStyle.outline]: 'border-gray-400 text-gray-400 cursor-not-allowed',
  };

  const appliedStyles = isDisabled ? disabledMapping[type] : styleMapping[type];

  return clsx(baseClasses, appliedStyles);
};

const Button = ({
  styleType = ButtonStyle.solid,
  disabled = false,
  className,
  children,
  ...props
}: CustomButtonProps) => {
  return (
    <Link
      className={clsx(
        resolveButtonStyles({ type: styleType, isDisabled: disabled }),
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
