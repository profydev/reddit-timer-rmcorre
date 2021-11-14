import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.color.default};
    font-family:  ${(props) => props.theme.fontFamily.default};
    font-size: ${(props) => props.theme.fontSize.default};
    line-height: ${(props) => props.theme.lineHeight.default};
    max-width: 1440px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.color.black};
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-weight: normal;
    margin: 0;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize.h1};
    line-height: ${(props) => props.theme.lineHeight.h1};
  }
`;

export default GlobalStyle;
