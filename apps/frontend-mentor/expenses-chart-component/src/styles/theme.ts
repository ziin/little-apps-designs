export const baseFontSize = 16;

export default {
  colors: {
    // Theme
    primary: 'hsl(10, 79%, 65%)',
    secondary: 'hsl(186, 34%, 60%)',

    // Neutral
    brownDark: 'hsl(25, 47%, 15%)',
    brownMedium: 'hsl(28, 10%, 53%)',
    cream: 'hsl(27, 66%, 92%)',
    creamLight: 'hsl(33, 100%, 98%)',
    white: 'hsl(0, 0%, 100%)',
  },
  fonts: {
    base: '"DM Sans", sans-serif',
  },
  fontSizes: {
    xs: pxToRem(12),
    s: pxToRem(15),
    base: pxToRem(baseFontSize),
    m: pxToRem(18),
    xm: pxToRem(24),
    l: pxToRem(30),
    xl: pxToRem(32),
    xxl: pxToRem(48),
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  radii: {
    sm: pxToRem(4),
    md: pxToRem(8),
    lg: pxToRem(20),
  },
};

function pxToRem(px: number) {
  return `${px / baseFontSize}rem`;
}
