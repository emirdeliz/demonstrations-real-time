import 'styled-components';
import { DRIThemeColorDefinition } from 'ui/theme/color';
import { DRIThemeFontSizeDefinition } from 'ui/theme/font-size';
import { DRIThemeOpacityDefinition } from 'ui/theme/opacity';
import { DRIThemeRadiusDefinition } from 'ui/theme/radius';
import { DRIThemeSpaceDefinition } from 'ui/theme/space';

declare module 'styled-components' {
	export interface DefaultTheme {
    dark: DRIThemeColorDefinition;
    light: DRIThemeColorDefinition;
    fontSize: DRIThemeFontSizeDefinition;
    space: DRIThemeSpaceDefinition;
    fontWeight: DRIThemeFontWeightDefinition;
    radius: DRIThemeRadiusDefinition;
    opacity: DRIThemeOpacityDefinition;
  }
}
