import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: ${(props) => props.theme.color.default};
    font-family:  ${(props) => props.theme.fontFamily.default};
    font-size: ${(props) => props.theme.fontSize.default};
    line-height: ${(props) => props.theme.lineHeight.default};
    margin: auto;
    max-width: 1440px;
    padding: 0 20px;
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

  h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
    line-height: ${(props) => props.theme.lineHeight.h2};
  }
`;

export default GlobalStyle;
