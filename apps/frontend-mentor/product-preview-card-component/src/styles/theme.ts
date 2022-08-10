function pxToRem(px: number) {
  return `${px / 16}rem`;
}

export default {
  colors: {
    primary: 'hsl(158, 36%, 37%)',
    background: 'hsl(30, 38%, 92%)',

    primaryDark: 'hsl(156, 42%, 18%)',
    darkBlue: 'hsl(212, 21%, 14%)',
    grayBlue: 'hsl(228, 12%, 48%)',
    white: 'hsl(0, 0%, 100%)',
  },
  fonts: {
    primary: 'Montserrat, sans-serif',
    secondary: 'Fraunces, serif',
  },
  fontSizes: {
    xxs: pxToRem(12),
    xs: pxToRem(13),
    s: pxToRem(14),
    l: pxToRem(32),
  },
  fontWeights: {
    medium: 500,
    bold: 700,
  },
};
