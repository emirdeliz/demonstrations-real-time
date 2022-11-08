import 'styled-components';
import { DRIThemeColorDefinition } from 'theme/color';
import { DRIThemeDisplayDefinition } from 'theme/display';
import { DRIThemeFontSizeDefinition } from 'theme/font-size';
import { DRIThemeLineHeightDefinition } from 'theme/lineHeight';
import { DRIThemeOpacityDefinition } from 'theme/opacity';
import { DRIThemeRadiusDefinition } from 'theme/radius';
import { DRIThemeSpaceDefinition } from 'theme/space';
import { DRIThemeZIndexDefinition } from 'theme/zIndex';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: DRIThemeColorDefinition;
    fontSize: DRIThemeFontSizeDefinition;
    space: DRIThemeSpaceDefinition;
    fontWeight: DRIThemeFontWeightDefinition;
    radius: DRIThemeRadiusDefinition;
    opacity: DRIThemeOpacityDefinition;
    display: DRIThemeDisplayDefinition;
    lineHeight: DRIThemeLineHeightDefinition;
    zIndex: DRIThemeZIndexDefinition;
  }
}
