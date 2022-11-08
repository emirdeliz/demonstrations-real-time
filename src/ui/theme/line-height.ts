import { DefaultTheme } from "styled-components";

export enum DRIThemeLineHeight {
  lh0 = '12px',
  lh1 = '16px',
  lh2 = '20px',
  lh3 = '24px',
  lh4 = '32px',
  lh5 = '40px',
  lh6 = '48px',
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
	const key = Object.keys(props).find(p => !!props[p as keyof DRIThemeLineHeightProps]);
	return key
    ? theme.lineHeight[key as keyof DRIThemeLineHeightProps]
    : theme.lineHeight.lh0;
};
