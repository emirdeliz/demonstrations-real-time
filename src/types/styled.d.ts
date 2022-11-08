import 'styled-components';
import { DRIThemeColorDefinition } from 'theme/color';
import { DRIThemeDisplayDefinition } from 'theme/display';
import { DRIThemeFontSizeDefinition } from 'theme/font-size';
import { DRIThemeLineHeightDefinition } from 'theme/lineHeight';
import { DRIThemeOpacityDefinition } from 'theme/opacity';
import { DRIThemeRadiusDefinition } from 'theme/radius';
import { DRIThemeZIndexDefinition } from 'theme/zIndex';
import { DRIThemeMarginDefinition } from 'ui/theme/margin';
import { DRIThemePaddingDefinition } from 'ui/theme/padding';
import { DRIThemeSpaceDefinition } from 'ui/theme/space';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: DRIThemeColorDefinition;
    fontSize: DRIThemeFontSizeDefinition;
    fontWeight: DRIThemeFontWeightDefinition;
    radius: DRIThemeRadiusDefinition;
    opacity: DRIThemeOpacityDefinition;
    display: DRIThemeDisplayDefinition;
    lineHeight: DRIThemeLineHeightDefinition;
    zIndex: DRIThemeZIndexDefinition;
    margin: DRIThemeMarginDefinition;
    padding: DRIThemePaddingDefinition;
    space: DRIThemeSpaceDefinition;
  }
}
