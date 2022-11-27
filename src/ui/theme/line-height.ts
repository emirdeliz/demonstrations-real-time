import { DefaultTheme } from 'styled-components';

export enum DRIThemeLineHeight {
  'Lh-0' = '12px',
  'Lh-1' = '16px',
  'Lh-2' = '20px',
  'Lh-3' = '24px',
  'Lh-4' = '32px',
  'Lh-5' = '40px',
  'Lh-6' = '48px',
}

export interface DRIThemeLineHeightDefinition {
  'lh-0'?: string;
  'lh-1'?: string;
  'lh-2'?: string;
  'lh-3'?: string;
  'lh-4'?: string;
  'lh-5'?: string;
  'lh-6'?: string;
}

export interface DRIThemeLineHeightProps {
  'lh-0'?: boolean;
  'lh-1'?: boolean;
  'lh-2'?: boolean;
  'lh-3'?: boolean;
  'lh-4'?: boolean;
  'lh-5'?: boolean;
  'lh-6'?: boolean;
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
    : theme.lineHeight['lh-0'];
};
