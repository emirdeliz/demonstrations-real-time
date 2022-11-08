import styled from 'styled-components';
import {
  getThemeColor,
  getThemeDisplay,
  getThemeFontSize,
  getThemeLineHeight,
  getThemeMarginOnly,
} from '@/theme';
import { TitleProps } from './Title';

export const Title = styled.span<TitleProps>`
  ${({
    capitalize,
    uppercase,
    semibold,
    ellipsis,
    cursorPointer,
    noWrap,
    theme,
    error,
    ...props
  }) => {
    const margin = getThemeMarginOnly({ ...props, theme });
    return `
			vertical-align: middle;
			font-size: ${getThemeFontSize({ theme, ...props })};
			text-transform: ${capitalize ? 'capitalize' : uppercase ? 'uppercase' : 'none'};
			font-weight: ${semibold ? theme.fontWeight.Semibold : 'normal'};
			cursor: ${cursorPointer ? 'pointer' : 'auto'};
			white-space: ${noWrap ? 'nowrap' : 'initial'};
			color: ${error ? theme.color.Red : getThemeColor({ theme, ...props })};
			margin: ${margin.join(' ')};
		`;
  }}
  ${({ center, justify }) =>
    center || justify
      ? `
    width: 100%;
    text-align: ${center ? 'center' : 'justify'};
  `
      : ''}
  ${({ ellipsis }) =>
    ellipsis
      ? `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100%);
  `
      : ''};
  line-height: ${(props) => getThemeLineHeight(props)};
  display: ${(props) => getThemeDisplay(props)};
`;
