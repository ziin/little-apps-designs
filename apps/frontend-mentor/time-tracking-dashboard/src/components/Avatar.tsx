import styled, { css } from 'styled-components';

import theme from '@styles/theme';

type AvatarProps = {
  src: string;
  alt?: string;
  borderColor?: keyof typeof theme.colors;
};

export const Avatar = styled.img.attrs(({ alt = 'Avatar Picture' }) => ({
  alt,
}))<AvatarProps>`
  ${({ borderColor = 'white' }) => css`
    width: 84px;
    height: 84px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid ${theme.colors[borderColor]};
  `}
`;
