import { DRIThemeMarginProps, DRIThemePaddingProps } from '@/theme';
import React, { memo, ReactNode } from 'react';
import { Flex } from '../Flex/Flex';
import * as S from './Row.style';

export interface RowProps extends DRIThemeMarginProps, DRIThemePaddingProps {
  children: ReactNode;
}

export const Row = memo(({ children, ...props }: RowProps) => {
  return (
    <S.Row {...props}>
      <Flex.Row alignInitial wFull wrap>
        {children}
      </Flex.Row>
    </S.Row>
  );
});
