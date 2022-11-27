import { DefaultTheme } from 'styled-components';

export enum DRIThemeDisplay {
  Block = 'block',
  InlineBlock = 'inline-block',
  Inline = 'inline',
  Flex = 'flex',
  Initial = 'initial',
}

export interface DRIThemeDisplayDefinition {
  Block: DRIThemeDisplay.Block;
  InlineBlock: DRIThemeDisplay.InlineBlock;
  Inline: DRIThemeDisplay.Inline;
  Flex: DRIThemeDisplay.Flex;
  Initial: DRIThemeDisplay.Initial;
}

export interface DRIThemeDisplayProps {
  block?: boolean;
  'inline-block'?: boolean;
  inline?: boolean;
  flex?: boolean;
  initial?: boolean;
}

export const getThemeDisplay = ({
  block,
  'inline-block': inlineBlock,
  inline,
  flex,
  initial,
  theme,
}: DRIThemeDisplayProps & {
  theme: DefaultTheme;
}) => {
  switch (true) {
    case block:
      return theme.display.Block;
    case inlineBlock:
      return theme.display.InlineBlock;
    case inline:
      return theme.display.Inline;
    case flex:
      return theme.display.Flex;
    case initial:
      return theme.display.Initial;
    default:
      return theme.display.InlineBlock;
  }
};
