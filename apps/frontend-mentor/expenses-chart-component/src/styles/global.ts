import { createGlobalStyle, css } from 'styled-components';

import fonts from './fonts';
import reset from './reset';

export default createGlobalStyle`
  ${reset}
  ${fonts}
  ${({ theme }) => css`
    body {
      font-size: ${theme.fontSizes.base};
      font-family: ${theme.fonts.base};
      color: ${theme.colors.brownDark};
      background: ${theme.colors.cream};
    }
  `}
`;
