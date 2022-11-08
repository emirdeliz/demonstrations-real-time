import { memo, MouseEventHandler, ReactNode } from 'react';
import { DRIThemeFontSizeProps } from 'theme/font-size';
import { DRIThemeSpaceProps } from 'theme/space';
import { DRIThemeType } from 'theme/theme';
import * as S from './Button.style';

export interface ButtonProps
  extends DRIThemeSpaceProps,
    DRIThemeFontSizeProps,
    DRIThemeType {
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

const ButtonBase = memo(
  ({
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
  }
);

export const Button = (props: ButtonProps) => <ButtonBase {...props} />;
Button.Outlined = (props: ButtonProps) => <Button {...props} outlined />;
Button.Rounded = (props: ButtonProps) => <Button {...props} rounded />;
