export interface DRIThemeColors {
  primary: string;
  secondary: string;
}

export interface DRIThemeColorDefinition {
  colors: DRIThemeColors;
}

export const DRIColorDark = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
} as DRIThemeColorDefinition;

export const DRIColorLight = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
} as DRIThemeColorDefinition;
