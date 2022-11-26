import { DefaultTheme } from 'styled-components';
import {
  buildSpaceProps,
  DRIThemeSpaceDefinition,
  getThemeSpaceOnly,
} from './space';

export interface DRIThemeMarginDefinition extends DRIThemeSpaceDefinition {}

export interface DRIThemeMarginProps {
  mt0?: boolean;
  mt1?: boolean;
  mt2?: boolean;
  mt3?: boolean;
  mt4?: boolean;
  mt5?: boolean;
  mt6?: boolean;

  mb0?: boolean;
  mb1?: boolean;
  mb2?: boolean;
  mb3?: boolean;
  mb4?: boolean;
  mb5?: boolean;
  mb6?: boolean;

  ml0?: boolean;
  ml1?: boolean;
  ml2?: boolean;
  ml3?: boolean;
  ml4?: boolean;
  ml5?: boolean;
  ml6?: boolean;

  mr0?: boolean;
  mr1?: boolean;
  mr2?: boolean;
  mr3?: boolean;
  mr4?: boolean;
  mr5?: boolean;
  mr6?: boolean;
}

export const getThemeMarginOnly = (
  props: DRIThemeMarginProps & {
    theme: DefaultTheme;
  }
) => {
  const spaceProps = buildSpaceProps(props);
  const { left, right, top, bottom } = getThemeSpaceOnly({
    theme: props.theme,
    ...spaceProps,
  });
  return `
		${top ? `margin-top: ${top};` : ''}
		${bottom ? `margin-bottom: ${bottom};` : ''}
		${left ? `margin-left: ${left};` : ''}
		${right ? `margin-right: ${right};` : ''}
	`;
};
