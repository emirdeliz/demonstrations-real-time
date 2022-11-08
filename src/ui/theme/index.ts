import { DefaultTheme } from 'styled-components';
import { DRIThemeColorDark } from './color';
import { DRIThemeDisplay } from './display';
import { DRIThemeFontSize } from './font-size';
import { DRIThemeFontWeight } from './font-weight';
import { DRIThemeLineHeight } from './line-height';
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

export * from './color';
export * from './display';
export * from './font-size';
export * from './font-weight';
export * from './line-height';
export * from './mixins';
export * from './opacity';
export * from './radius';
export * from './space';
export * from './theme';
export * from './zIndex';
