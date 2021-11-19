import React from 'react';
import * as S from './Hero.style';
import Title from '../common/title/Title';
import { defaultSubreddit } from '../constants';
import table from './table.png';

const Hero = () => (
  <S.Section>
    <Title>No reactions to your reddit posts?</Title>
    <S.SubTitle>
      Great timing, great results! Find the best time to post on your subreddit.
    </S.SubTitle>
    <S.Button to={`/search/${defaultSubreddit}`}>
      SHOW ME THE BEST TIME
    </S.Button>
    <S.SubReddit>r/{defaultSubreddit}</S.SubReddit>
    <S.Link to={`/search/${defaultSubreddit}`}>
      <S.Table src={table} alt="Heat Map" />
    </S.Link>
  </S.Section>
);

export default Hero;
