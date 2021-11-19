import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import { defaultSubreddit } from '../../constants';

const Header = () => (
  <S.Wrapper>
    <Link to="/">
      <S.Logo />
    </Link>

    <S.Nav>
      <S.Link to={`/search/${defaultSubreddit}`}>Search</S.Link>
      <S.HashLink to="/#how-it-works">How it works</S.HashLink>
      <S.HashLink to="/#about">About</S.HashLink>
    </S.Nav>
  </S.Wrapper>
);

export default Header;
