import { DefaultTheme } from 'styled-components';

export enum DRIThemeLineHeight {
  Lh0 = '12px',
  Lh1 = '16px',
  Lh2 = '20px',
  Lh3 = '24px',
  Lh4 = '32px',
  Lh5 = '40px',
  Lh6 = '48px',
}

export interface DRIThemeLineHeightDefinition {
  lh0?: string;
  lh1?: string;
  lh2?: string;
  lh3?: string;
  lh4?: string;
  lh5?: string;
  lh6?: string;
}

export interface DRIThemeLineHeightProps {
  lh0?: boolean;
  lh1?: boolean;
  lh2?: boolean;
  lh3?: boolean;
  lh4?: boolean;
  lh5?: boolean;
  lh6?: boolean;
}

export const getThemeLineHeight = ({
  theme,
  ...props
}: DRIThemeLineHeightProps & {
  theme: DefaultTheme;
}) => {
  const key = Object.keys(props).find(
    (p) =>
      !!props[p as keyof DRIThemeLineHeightProps] &&
      !!theme.lineHeight[p as keyof DRIThemeLineHeightProps]
  );
  return key
    ? theme.lineHeight[key as keyof DRIThemeLineHeightProps]
    : theme.lineHeight.lh0;
};
