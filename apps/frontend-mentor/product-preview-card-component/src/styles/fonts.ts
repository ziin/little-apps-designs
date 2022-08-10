import { css } from 'styled-components';

export default css`
  /* montserrat-500 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local(''),
      url('../assets/fonts/montserrat-v25-latin-500.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../assets/fonts/montserrat-v25-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local(''),
      url('../assets/fonts/montserrat-v25-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../assets/fonts/montserrat-v25-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* fraunces-700 - latin */
  @font-face {
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 700;
    src: local(''),
      url('../assets/fonts/fraunces-v23-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../assets/fonts/fraunces-v23-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`;
