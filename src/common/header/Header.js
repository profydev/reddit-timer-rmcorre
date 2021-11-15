import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import { defaultSubreddit } from '../../constants';

const Header = () => (
  <S.Container>
    <Link to="/">
      <S.Logo />
    </Link>

    <nav>
      <S.Link to={`/search/${defaultSubreddit}`}>Search</S.Link>
      <S.HashLink to="/#how-it-works">How it works</S.HashLink>
      <S.HashLink to="/#about">About</S.HashLink>
    </nav>
  </S.Container>
);

export default Header;
