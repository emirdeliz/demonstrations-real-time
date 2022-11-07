import { DefaultTheme } from 'styled-components';
import { DRIThemeColorDark } from './color';
import { DRIThemeDisplay } from './display';
import { DRIThemeFontSize } from './font-size';
import { DRIThemeFontWeight } from './font-weight';
import { DRIThemeLineHeight } from './lineHeight';
import { DRIThemeOpacity } from './opacity';
import { DRIThemeRadius } from './radius';
import { DRIThemeSpace } from './space';
import { DRIThemeZIndex } from './zIndex';

export const DRITheme = {
  color: DRIThemeColorDark,
  space: DRIThemeSpace,
  fontSize: DRIThemeFontSize,
  fontWeight: DRIThemeFontWeight,
  radius: DRIThemeRadius,
  opacity: DRIThemeOpacity,
  lineHeight: DRIThemeLineHeight,
  display: DRIThemeDisplay,
  zIndex: DRIThemeZIndex,
} as DefaultTheme;

export {
  DRIThemeSpace,
  DRIThemeFontSize,
  DRIThemeFontWeight,
  DRIThemeRadius,
  DRIThemeOpacity,
  DRIThemeLineHeight,
  DRIThemeDisplay,
  DRIThemeZIndex,
};

export { DRIThemeColorDark, DRIThemeColorLight } from './color';
