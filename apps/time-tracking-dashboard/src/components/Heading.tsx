import { css, CSSProperties } from 'styled-components';
import styled from 'styled-components';

import theme from '../styles/theme';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.fontSizes;
  weight?: keyof typeof theme.fontWeights;
  fontStyle?: CSSProperties['fontStyle'];
  lineHeight?: CSSProperties['lineHeight'];
};

export const Heading = styled('h1').attrs<HeadingProps>(({ level = '1' }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({ size = 'l', color, weight = 'medium', fontStyle, lineHeight }) => css`
    font-size: ${theme.fontSizes[size]};
    color: ${color ? theme.colors[color] : 'inherit'};
    font-weight: ${theme.fontWeights[weight]};
    font-style: ${fontStyle};
    line-height: ${lineHeight};
  `}
`;
