import { DefaultTheme } from 'styled-components';

export enum DRIThemeFontSize {
  fs0 = '10px',
  fs1 = '12px',
  fs2 = '14px',
  fs3 = '16px',
  fs4 = '20px',
  fs5 = '28px',
  fs6 = '56px',
}

export interface DRIThemeFontSizeDefinition {
  fs0?: string;
  fs1?: string;
  fs2?: string;
  fs3?: string;
  fs4?: string;
  fs5?: string;
  fs6?: string;
}

export interface DRIThemeFontSizeProps {
  fs0?: boolean;
  fs1?: boolean;
  fs2?: boolean;
  fs3?: boolean;
  fs4?: boolean;
  fs5?: boolean;
  fs6?: boolean;
}

export const getThemeFontSize = ({
  theme,
  ...props
}: DRIThemeFontSizeProps & {
  theme: DefaultTheme;
}) => {
  const key = Object.keys(props).find(
    (p) =>
      !!props[p as keyof DRIThemeFontSizeProps] &&
      !!theme.fontSize[p as keyof DRIThemeFontSizeProps]
  );

  return key
    ? theme.fontSize[key as keyof DRIThemeFontSizeProps]
    : theme.fontSize.fs3;
};
