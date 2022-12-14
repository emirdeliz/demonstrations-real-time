import { css } from 'styled-components';

export const centerAbsolute = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const centerVerticalAbsolute = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const centerHorizontalAbsolute = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const fullVerticalAbsolute = css`
  position: absolute;
  top: 0;
  bottom: 0;
`;

export const fullHorizontalAbsolute = css`
  position: absolute;
  left: 0;
  right: 0;
`;

export const fullAbsolute = css`
  ${fullVerticalAbsolute}
  ${fullHorizontalAbsolute}
`;

export const topLeftAbsolute = css`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const topRightAbsolute = css`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const fullTopRightAbsolute = css`
  position: absolute;
  top: 0;
  right: 0;
`;

export const disableElement = css`
  pointer-events: none;
  opacity: ${({ theme }) => theme.opacity.Disable};
`;

export const processingElement = css`
  pointer-events: none;
  opacity: ${({ theme }) => theme.opacity.Overlay};
`;
