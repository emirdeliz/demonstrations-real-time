import React, { memo, ReactNode } from 'react';
import * as S from './Title.style';
import { DRIThemeColorProps } from 'ui/theme/color';
import { DRIThemeFontSizeProps } from 'ui/theme/font-size';
import { DRIThemeFontWeightProps } from 'ui/theme/font-weight';
import { DRIThemeSpaceProps } from 'ui/theme/space';
import { DRIThemeLineHeightProps } from 'ui/theme/lineHeight';
import { DRIThemeDisplayProps } from 'ui/theme/display';

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
