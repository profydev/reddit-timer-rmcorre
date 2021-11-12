import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Preview.style';
import table from './table.png';
import { defaultSubreddit } from '../../constants';

const Preview = () => (
  <S.Section>
    <S.SubReddit>r/{defaultSubreddit}</S.SubReddit>
    <Link to={`/search/${defaultSubreddit}`}>
      <S.Table src={table} alt="Heat Map" />
    </Link>
  </S.Section>
);

export default Preview;
