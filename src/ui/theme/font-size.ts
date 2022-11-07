import { DefaultTheme } from "styled-components";

export enum DRIThemeFontSize {
	fs0 = '10px',
	fs1 = '12px',
	fs2 = '14px',
	fs3 = '16px',
	fs4 = '20px',
	fs5 = '28px',
	fs6 = '36px',
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
  const { fs0, fs1, fs2, fs3, fs4, fs5, fs6 } = props;
  switch (true) {
    case fs0:
      return theme.fontSize.fs0;
    case fs1:
      return theme.fontSize.fs1;
    case fs2:
      return theme.fontSize.fs2;
    case fs3:
      return theme.fontSize.fs3;
    case fs4:
      return theme.fontSize.fs4;
    case fs5:
      return theme.fontSize.fs5;
    case fs6:
      return theme.fontSize.fs6;
  }
  return theme.fontSize.fs3;
};