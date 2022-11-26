import styled, { css, DefaultTheme } from 'styled-components';
import { getThemeFontSize, getThemePaddingOnly } from '@/theme';
import { ButtonProps } from './Button';

const getButtonSize = (props: ButtonProps, theme: DefaultTheme) => {
  const fontSize = getThemeFontSize({ ...props, theme });
  const space = getThemePaddingOnly({ ...props, theme });
  return { fontSize, space };
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, rounded, clickable, maxWidth, wFull, ...props }) => {
    const { fontSize, space } = getButtonSize(props, theme);
    return css`
      width: 100%;
      text-transform: uppercase;
      box-sizing: border-box;
      max-width: ${maxWidth || '100%'};
      width: ${wFull ? '100%' : 'auto'};
      font-size: ${fontSize};
      font-weight: ${theme.fontWeight.Semibold};
      opacity: ${clickable ? 1 : theme.opacity.Disable};
      cursor: ${clickable ? 'pointer' : 'not-allowed'};
      ${space};
    `;
  }}
`;
