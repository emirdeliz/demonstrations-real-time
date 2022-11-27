import {
  DRIThemeFontSizeProps,
  DRIThemeMarginProps,
  DRIThemePaddingProps,
  DRIThemeType,
} from '@/theme';
import { memo, MouseEventHandler, ReactNode } from 'react';
import * as S from './Button.style';

export interface ButtonProps
  extends DRIThemePaddingProps,
    DRIThemeMarginProps,
    DRIThemeFontSizeProps,
    DRIThemeType {
  children?: ReactNode;
  'data-test-id'?: string;
  clickable?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  'w-full'?: boolean;
  link?: boolean;
  'max-width'?: string;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
}

const ButtonBase = memo(
  ({
    children,
    'data-test-id': dataTestId = 'button-atom',
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
