import { DefaultTheme } from 'styled-components';

export enum DRIThemeSpace {
  Sp0 = '0px',
  Sp1 = '4px',
  Sp2 = '8px',
  Sp3 = '16px',
  Sp4 = '24px',
  Sp5 = '32px',
  Sp6 = '44px',
}

export interface DRIThemeSpaceDefinition {
  sp0?: string;
  sp1?: string;
  sp2?: string;
  sp3?: string;
  sp4?: string;
  sp5?: string;
  sp6?: string;
}

export interface DRIThemeSpaceProps {
  sp0?: boolean;
  sp1?: boolean;
  sp2?: boolean;
  sp3?: boolean;
  sp4?: boolean;
  sp5?: boolean;
  sp6?: boolean;
}

export interface DRIThemeSpaceGetProps {
  spT0?: boolean;
  spT1?: boolean;
  spT2?: boolean;
  spT3?: boolean;
  spT4?: boolean;
  spT5?: boolean;
  spT6?: boolean;

  spB0?: boolean;
  spB1?: boolean;
  spB2?: boolean;
  spB3?: boolean;
  spB4?: boolean;
  spB5?: boolean;
  spB6?: boolean;

  spL0?: boolean;
  spL1?: boolean;
  spL2?: boolean;
  spL3?: boolean;
  spL4?: boolean;
  spL5?: boolean;
  spL6?: boolean;

  spR0?: boolean;
  spR1?: boolean;
  spR2?: boolean;
  spR3?: boolean;
  spR4?: boolean;
  spR5?: boolean;
  spR6?: boolean;
}

export const getThemeSpace = ({
  theme,
	...props
}: DRIThemeSpaceProps & {
  theme: DefaultTheme;
}) => {
	const key = Object.keys(props).find(
    (p) => !!props[p as keyof DRIThemeSpaceProps]
  );
  return key ? theme.space[key as keyof DRIThemeSpaceProps] : theme.space.sp0;
};

export const getThemeSpaceOnly = ({
  spT0,
  spT1,
  spT2,
  spT3,
  spT4,
  spT5,
  spT6,

  spB0,
  spB1,
  spB2,
  spB3,
  spB4,
  spB5,
  spB6,

  spL0,
  spL1,
  spL2,
  spL3,
  spL4,
  spL5,
  spL6,

  spR0,
  spR1,
  spR2,
  spR3,
  spR4,
  spR5,
  spR6,
  theme,
}: DRIThemeSpaceGetProps & {
  theme: DefaultTheme;
}) => {
  const spaceLeft = getThemeSpace({
    sp0: spL0,
    sp1: spL1,
    sp2: spL2,
    sp3: spL3,
    sp4: spL4,
    sp5: spL5,
    sp6: spL6,
    theme,
  });
  const spaceRight = getThemeSpace({
    sp0: spR0,
    sp1: spR1,
    sp2: spR2,
    sp3: spR3,
    sp4: spR4,
    sp5: spR5,
    sp6: spR6,
    theme,
  });
  const spaceTop = getThemeSpace({
    sp0: spT0,
    sp1: spT1,
    sp2: spT2,
    sp3: spT3,
    sp4: spT4,
    sp5: spT5,
    sp6: spT6,
    theme,
  });
  const spaceBottom = getThemeSpace({
    sp0: spB0,
    sp1: spB1,
    sp2: spB2,
    sp3: spB3,
    sp4: spB4,
    sp5: spB5,
    sp6: spB6,
    theme,
  });
  return { spaceLeft, spaceRight, spaceTop, spaceBottom };
};

export const getThemeSpaceOnlyAsPadding = (
  props: DRIThemeSpaceGetProps & {
    theme: DefaultTheme;
  }
) => {
  const { spaceLeft, spaceRight, spaceTop, spaceBottom } =
    getThemeSpaceOnly(props);
  return [
    { paddingLeft: spaceLeft },
    { paddingRight: spaceRight },
    { paddingTop: spaceTop },
    { paddingBottom: spaceBottom },
  ];
};

export const getThemeSpaceOnlyAsMargin = (
  props: DRIThemeSpaceGetProps & {
    theme: DefaultTheme;
  }
) => {
  const { spaceLeft, spaceRight, spaceTop, spaceBottom } =
    getThemeSpaceOnly(props);
  return [
    { marginLeft: spaceLeft },
    { marginRight: spaceRight },
    { marginTop: spaceTop },
    { marginBottom: spaceBottom },
  ];
};
