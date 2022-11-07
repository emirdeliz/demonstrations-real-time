import { MouseEventHandler, ReactNode } from 'react';
import { DRIThemeFontSizeProps } from 'ui/theme/font-size';
import { DRIThemeSpaceProps } from 'ui/theme/space';
import * as S from './Button.style';

export interface ButtonProps extends DRIThemeSpaceProps, DRIThemeFontSizeProps {
  children?: ReactNode;
  dataTestId?: string;
  clickable?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  wFull?: boolean;
  link?: boolean;
  maxWidth?: string;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
}

export const Button = ({
  children,
  dataTestId = 'button-atom',
  clickable = true,
  onClick,
  title,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      {...props}
      title={title}
      disabled={!clickable}
      clickable={clickable}
      data-testid={dataTestId}
      type={type}
      onClick={(e) => {
        if (clickable && onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </S.Button>
  );
};

Button.Outlined = (props: ButtonProps) => <Button {...props} outlined />;
Button.Rounded = (props: ButtonProps) => <Button {...props} rounded />;
