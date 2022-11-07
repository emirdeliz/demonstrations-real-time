import React, { ReactNode } from 'react';
import {
  ColorsProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  MarginProps,
} from 'framework/ui/system/theme';
import { DisplayProps } from 'framework/ui/system/theme/display';
import * as S from './Title.style';

export interface TitleProps
  extends ColorsProps,
    FontSizeProps,
    FontWeightProps,
    MarginProps,
    LineHeightProps,
    DisplayProps {
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

export const Title = (props: TitleProps) => {
  return <S.Title {...props}>{props.children}</S.Title>;
};
