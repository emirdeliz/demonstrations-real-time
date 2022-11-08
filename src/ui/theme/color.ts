import { DefaultTheme } from 'styled-components';
import { capitalizeFirstLetter } from 'utils';

export interface DRIThemeColorDefinition {
  Black: string;
  White: string;
  Red: string;
  LightRed: string;
  Yellow: string;
  YellowDark: string;
  Orange: string;
  LightOrange: string;
  Green: string;
  DarkGreen: string;
  LightBlue: string;
  LightGrey: string;
  P1: string;
  P2: string;
  P3: string;
  P4: string;
  S1: string;
  S2: string;
  S3: string;
  S4: string;
  N1: string;
  N2: string;
  N3: string;
  N4: string;
  N5: string;
  N6: string;
}

export interface DRIThemeColorProps {
  black?: boolean;
  white?: boolean;
  red?: boolean;
  lightRed?: boolean;
  yellow?: boolean;
  yellowDark?: boolean;
  orange?: boolean;
  lightOrange?: boolean;
  green?: boolean;
  darkGreen?: boolean;
  p1?: boolean;
  p2?: boolean;
  p3?: boolean;
  s1?: boolean;
  s2?: boolean;
  s3?: boolean;
  s4?: boolean;
  n1?: boolean;
  n2?: boolean;
  n3?: boolean;
  n4?: boolean;
  n5?: boolean;
  n6?: boolean;
}

export const DRIThemeColorBase = {
  Black: '#2c2c2c',
  White: '#ffffff',
  Red: '#c25343',
  LightRed: '#ff9791',
  Yellow: '#f5d87d',
  YellowDark: '#856404',
  Orange: '#FF6B00',
  LightOrange: '#fff0e4',
  Green: '#a0da8c',
  DarkGreen: '#5a7e68',
  LightBlue: '#4a79d4',
  LightGrey: '#B8BECD',
  P1: '#3e4651',
  P2: '#386d82',
  P3: '#ccc1b4',
  P4: '#e5e5e5',
  S1: '#54402d',
  S2: '#9fbbc4',
  S3: '#4d555f',
  S4: '#71777f',
  N1: '#58595b',
  N2: '#696a6b',
  N3: '#bcbdbd',
  N4: '#eeeeef',
  N5: '#f9f9f9',
  N6: '#ebf0f2',
};

export const DRIThemeColorDark = {
  ...DRIThemeColorBase,
} as DRIThemeColorDefinition;

export const DRIThemeColorLight = {
  ...DRIThemeColorBase,
} as DRIThemeColorDefinition;

export const getThemeColor = ({
  theme,
  ...props
}: DRIThemeColorProps & {
  theme: DefaultTheme;
}) => {
  const key = capitalizeFirstLetter(
    Object.keys(props).find(
      (p) =>
        !!props[p as keyof DRIThemeColorProps] &&
        !!theme.color[p as keyof DRIThemeColorDefinition]
    )
  ) as keyof DRIThemeColorDefinition;
  return key ? theme.color[key] : theme.color.P1;
};
