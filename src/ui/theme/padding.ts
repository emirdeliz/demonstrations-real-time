import { DefaultTheme } from 'styled-components';
import {
  buildSpaceProps,
  DRIThemeSpaceDefinition,
  getThemeSpaceOnly,
} from './space';

export interface DRIThemePaddingDefinition extends DRIThemeSpaceDefinition {}

export interface DRIThemePaddingProps {
  pt0?: boolean;
  pt1?: boolean;
  pt2?: boolean;
  pt3?: boolean;
  pt4?: boolean;
  pt5?: boolean;
  pt6?: boolean;

  pb0?: boolean;
  pb1?: boolean;
  pb2?: boolean;
  pb3?: boolean;
  pb4?: boolean;
  pb5?: boolean;
  pb6?: boolean;

  pl0?: boolean;
  pl1?: boolean;
  pl2?: boolean;
  pl3?: boolean;
  pl4?: boolean;
  pl5?: boolean;
  pl6?: boolean;

  pr0?: boolean;
  pr1?: boolean;
  pr2?: boolean;
  pr3?: boolean;
  pr4?: boolean;
  pr5?: boolean;
  pr6?: boolean;
}

export const getThemePaddingOnly = (
  props: DRIThemePaddingProps & {
    theme: DefaultTheme;
  }
) => {
  const spaceProps = buildSpaceProps(props);
  const { left, right, top, bottom } = getThemeSpaceOnly({
    theme: props.theme,
    ...spaceProps,
  });
  return [left, right, top, bottom];
};
