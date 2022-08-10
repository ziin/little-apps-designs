import { createGlobalStyle, css } from 'styled-components';

import fonts from './fonts';
import reset from './reset';

export default createGlobalStyle`
  ${reset}
  ${fonts}
  ${({ theme }) => css`
    :root {
      --shadow-color: 0deg 0% 0%;
      --shadow-elevation-low: 0px 0.7px 0.8px hsl(var(--shadow-color) / 0.1),
        0px 1.1px 1.2px -1.2px hsl(var(--shadow-color) / 0.1),
        0px 2.6px 2.9px -2.5px hsl(var(--shadow-color) / 0.1);
    }
    body {
      font-family: ${theme.fonts.primary};
      background: ${theme.colors.background};
      color: ${theme.colors.darkBlue};
    }
  `}
`;
