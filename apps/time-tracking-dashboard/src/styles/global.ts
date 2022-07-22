import { createGlobalStyle, css } from 'styled-components';

import fonts from './fonts';
import reset from './reset';

export default createGlobalStyle`
  ${reset}
  ${fonts}
  ${({ theme }) => css`
    body {
      font-family: 'Rubik', sans-serif;
      background: ${theme.colors.veryDarkBlue};
      color: ${theme.colors.white};
    }
  `}
`;
