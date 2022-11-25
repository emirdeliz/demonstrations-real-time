import { capitalizeFirstLetter } from '@/utils';
import { DefaultTheme } from 'styled-components';

export enum DRIThemeFontSize {
  Fs0 = '10px',
  Fs1 = '12px',
  Fs2 = '14px',
  Fs3 = '16px',
  Fs4 = '20px',
  Fs5 = '28px',
  Fs6 = '56px',
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
