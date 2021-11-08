import React from 'react';
import * as S from './Footer.style';

const Footer = () => (
  <S.Container>
    <S.Anchor href="https://ooloo.io/employers">profy.dev</S.Anchor>
    <S.Link to="/">
      <S.Icon />
    </S.Link>
    <S.Link to="/terms">Terms & Privacy</S.Link>
  </S.Container>
);

export default Footer;
