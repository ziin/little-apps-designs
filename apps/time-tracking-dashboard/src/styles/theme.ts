import { DefaultTheme } from 'styled-components';

function pxToRem(px: number) {
  return `${px / 16}rem`;
}

// Styled components theme
export const theme: DefaultTheme = {
  colors: {
    primary: 'hsl(246, 80%, 60%)',

    /* Colorful */
    salmon: 'hsl(15, 100%, 70%)', // Work
    ocean: 'hsl(195, 74%, 62%)', // Play
    watermelon: 'hsl(348, 100%, 68%)', // Study
    lime: 'hsl(145, 58%, 55%)', // Exercise
    purple: 'hsl(264, 64%, 52%)', // Social
    cream: 'hsl(43, 84%, 65%)', // Self care

    /* Neutral */
    veryDarkBlue: 'hsl(226, 43%, 10%)', // Page Background
    darkBlue: 'hsl(235, 46%, 20%)',
    desaturatedBlue: 'hsl(235, 45%, 61%)',
    paleBlue: 'hsl(236, 100%, 87%)',
  },
  fonts: {
    primary: '"Rubik", sans-serif',
  },
  fontSizes: {
    s: pxToRem(15),
    m: pxToRem(18),
    l: pxToRem(40),
    xl: pxToRem(56),
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
  },
};
