import React from 'react';
import Title from '../../common/title/Title';
import * as S from './Heading.style';
import { defaultSubreddit } from '../../constants';

const Heading = () => (
  <S.Section>
    <Title>No reactions to your reddit posts?</Title>
    <S.SubTitle>
      Great timing, great results! Find the best time to post on your subreddit.
    </S.SubTitle>
    <S.Link to={`/search/${defaultSubreddit}`}>SHOW ME THE BEST TIME</S.Link>
  </S.Section>
);

export default Heading;
