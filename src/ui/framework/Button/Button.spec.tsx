import { fireEvent, render } from '@testing-library/react';
import { DRIThemeColorDark } from 'ui/theme/color';
import { DRIThemeOpacity } from 'ui/theme/opacity';
import { DRIThemeSpace } from 'ui/theme/space';
import { Button } from './Button';

describe('Button component test', () => {
  it('Have button', async () => {
    const { container: buttonNode } = render(<Button />);
    expect(typeof buttonNode.firstChild).toEqual(typeof (<button />));
  });

  it('Have button info', async () => {
    const { container: buttonNode } = render(<Button info />);
    expect(buttonNode.firstChild).toHaveStyleRule(
      'background-color',
      DRIThemeColorDark.P1
    );
  });

  it('Have button not clickable', async () => {
    const { container: buttonNode } = render(<Button clickable={false} />);
    expect(buttonNode.firstChild).toHaveStyleRule(
      'opacity',
      String(DRIThemeOpacity.Disable)
    );
    expect(buttonNode.firstChild).toHaveStyleRule('cursor', 'not-allowed');
  });

  it('Have button outlined', async () => {
    const { container: buttonNode } = render(<Button outlined />);
    expect(buttonNode.firstChild).toHaveStyleRule(
      'background-color',
      DRIThemeColorDark.P1
    );
    expect(buttonNode.firstChild).toHaveStyleRule(
      'border',
      `solid 1px ${DRIThemeColorDark.P1}`
    );
    expect(buttonNode.firstChild).toHaveStyleRule(
      'color',
      DRIThemeColorDark.P1
    );
  });

  it('Have button sm', async () => {
    const { container: buttonNode } = render(<Button fs1 sp1 />);
    expect(buttonNode.firstChild).toHaveStyleRule(
      'padding',
      `${DRIThemeSpace.Sp1} ${DRIThemeSpace.Sp1}`
    );
  });

  it('Have button click', async () => {
    const click = jest.fn();
    const { container: buttonNode } = render(<Button onClick={click} />);
    fireEvent.click(buttonNode.firstChild as Element);
    fireEvent.click(buttonNode.firstChild as Element);
    fireEvent.click(buttonNode.firstChild as Element);
    expect(click.mock.calls.length).toEqual(3);
  });
});
