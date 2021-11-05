import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family:  ${(props) => props.theme.fontFamily.default};
    font-size: ${(props) => props.theme.fontSize.default};
    line-height: ${(props) => props.theme.lineHeight.default};
    color: ${(props) => props.theme.color.text};
  }
`;

export default GlobalStyle;
