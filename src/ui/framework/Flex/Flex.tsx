import React, { ReactNode } from 'react';
import { DRIThemeSpaceProps } from 'ui/theme/space';
import * as S from './Flex.style';

export interface FlexProps extends DRIThemeSpaceProps {
  children: ReactNode;
  justifyStart?: boolean;
  justifyEnd?: boolean;
  justifyCenter?: boolean;
  justifySpaceBetween?: boolean;
  justifySpaceAround?: boolean;
  justifyInitial?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  alignCenter?: boolean;
  alignSpaceBetween?: boolean;
  alignSpaceAround?: boolean;
  alignBaseline?: boolean;
  alignInitial?: boolean;
  col?: boolean;
  row?: boolean;
  wrap?: boolean;
  wFull?: boolean;
  hFull?: boolean;
  role?: string;
}

export const Flex = ({ wrap, ...props }: FlexProps) => {
  return (
    <S.Container {...props} flexWrap={wrap ? 1 : 0}>
      {props.children}
    </S.Container>
  );
};

Flex.Row = (props: FlexProps) => {
  return <Flex {...props} row />;
};

Flex.Col = (props: FlexProps) => {
  return <Flex {...props} col />;
};

Flex.Center = (props: FlexProps) => {
  return <Flex {...props} justifyCenter alignCenter />;
};
