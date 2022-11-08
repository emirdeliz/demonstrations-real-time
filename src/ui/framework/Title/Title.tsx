import React, { memo, ReactNode } from 'react';
import * as S from './Title.style';
import { DRIThemeColorProps } from 'theme/color';
import { DRIThemeFontSizeProps } from 'theme/font-size';
import { DRIThemeFontWeightProps } from 'theme/font-weight';
import { DRIThemeSpaceProps } from 'theme/space';
import { DRIThemeLineHeightProps } from 'theme/lineHeight';
import { DRIThemeDisplayProps } from 'theme/display';

export interface TitleProps
  extends DRIThemeColorProps,
    DRIThemeFontSizeProps,
    DRIThemeFontWeightProps,
    DRIThemeSpaceProps,
    DRIThemeLineHeightProps,
    DRIThemeDisplayProps {
  children?: string | number | ReactNode;
  capitalize?: boolean;
  semibold?: boolean;
  uppercase?: boolean;
  error?: boolean;
  cursorPointer?: boolean;
  noWrap?: boolean;
  ellipsis?: boolean;
  center?: boolean;
  justify?: boolean;
  role?: string;
}

export const Title = memo((props: TitleProps) => {
  return <S.Title {...props}>{props.children}</S.Title>;
});
