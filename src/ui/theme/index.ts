import { DefaultTheme } from 'styled-components';
import { DRIColorDark, DRIColorLight } from './color';
import { DRIThemeFontSize } from './font-size';
import { DRIThemeFontWeight } from './fontWeight';
import { DRIThemeOpacity } from './opacity';
import { DRIThemeRadius } from './radius';
import { DRIThemeSpace } from './space';

export const DRITheme = {
  dark: DRIColorDark,
  light: DRIColorLight,
  space: DRIThemeSpace,
  fontSize: DRIThemeFontSize,
  fontWeight: DRIThemeFontWeight,
  radius: DRIThemeRadius,
  opacity: DRIThemeOpacity,
} as DefaultTheme;
