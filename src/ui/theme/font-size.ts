import { capitalizeFirstLetter } from '@/utils';
import { DefaultTheme } from 'styled-components';

export enum DRIThemeFontSize {
  'Fs-0' = '10px',
  'Fs-1' = '12px',
  'Fs-2' = '14px',
  'Fs-3' = '16px',
  'Fs-4' = '20px',
  'Fs-5' = '28px',
  'Fs-6' = '56px',
}

export interface DRIThemeFontSizeDefinition {
  'fs-0'?: string;
  'fs-1'?: string;
  'fs-2'?: string;
  'fs-3'?: string;
  'fs-4'?: string;
  'fs-5'?: string;
  'fs-6'?: string;
}

export interface DRIThemeFontSizeProps {
  'fs-0'?: boolean;
  'fs-1'?: boolean;
  'fs-2'?: boolean;
  'fs-3'?: boolean;
  'fs-4'?: boolean;
  'fs-5'?: boolean;
  'fs-6'?: boolean;
}

export const getThemeFontSize = ({
  theme,
  ...props
}: DRIThemeFontSizeProps & {
  theme: DefaultTheme;
}) => {
  const key = Object.keys(props).find((p) => {
    const pCapitalize = capitalizeFirstLetter(p);
    return (
      !!props[p as keyof DRIThemeFontSizeProps] &&
      !!theme.fontSize[pCapitalize as keyof DRIThemeFontSizeProps]
    );
  });

  const keyCapitalize = capitalizeFirstLetter(key);
  return key
    ? theme.fontSize[keyCapitalize as keyof DRIThemeFontSizeProps]
    : theme.fontSize.Fs3;
};
