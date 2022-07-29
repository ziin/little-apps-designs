import styled, { css, CSSProperties } from 'styled-components';

import theme from '../styles/theme';

export type TextProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.fontSizes;
  weight?: keyof typeof theme.fontWeights;
  fontStyle?: CSSProperties['fontStyle'];
  lineHeight?: CSSProperties['lineHeight'];
};

export const Text = styled('p')<TextProps>`
  ${({ size = 'm', color, weight = 'regular', fontStyle, lineHeight }) => css`
    font-size: ${theme.fontSizes[size]};
    color: ${color ? theme.colors[color] : 'inherit'};
    font-weight: ${theme.fontWeights[weight]};
    font-style: ${fontStyle};
    line-height: ${lineHeight};
  `}
`;
