import styled, { css, DefaultTheme } from 'styled-components';
import { getThemeFontSize } from 'ui/theme/font-size';
import { getThemeSpaceOnlyAsPadding } from 'ui/theme/space';
import { ButtonProps } from './Button';

const getButtonSize = (
	props: ButtonProps,
  theme: DefaultTheme
) => {
  const fontSizeResult = getThemeFontSize({ ...props, theme });
  const spaceResult = getThemeSpaceOnlyAsPadding({ ...props, theme });
  return { fontSize: fontSizeResult, space: spaceResult };
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, rounded, clickable, maxWidth, wFull, ...props }) => {
		const { fontSize, space } = getButtonSize(props, theme);
		return css`
      width: 100%;
      max-width: ${maxWidth || '100%'};
      text-transform: uppercase;
      box-sizing: border-box;
      width: ${wFull ? '100%' : 'auto'};
      font-size: ${fontSize};
      font-weight: ${theme.fontWeight.Semibold};
      padding: ${space.join(' ')};
      opacity: ${clickable ? 1 : theme.opacity.Disable};
      cursor: ${clickable ? 'pointer' : 'not-allowed'};
    `;
	}}
`;
