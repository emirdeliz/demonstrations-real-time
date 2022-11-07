import 'styled-components';
import { DRIThemeColorDefinition } from 'ui/theme/color';
import { DRIThemeDisplayDefinition } from 'ui/theme/display';
import { DRIThemeFontSizeDefinition } from 'ui/theme/font-size';
import { DRIThemeLineHeightDefinition } from 'ui/theme/lineHeight';
import { DRIThemeOpacityDefinition } from 'ui/theme/opacity';
import { DRIThemeRadiusDefinition } from 'ui/theme/radius';
import { DRIThemeSpaceDefinition } from 'ui/theme/space';
import { DRIThemeZIndexDefinition } from 'ui/theme/zIndex';

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
