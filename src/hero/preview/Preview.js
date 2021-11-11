import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Preview.style';
import table from './table.png';

const Preview = () => (
  <S.Section>
    <S.SubReddit>r/javascript</S.SubReddit>
    <Link to="/search/javascript">
      <S.Table src={table} alt="Heat Map" />
    </Link>
  </S.Section>
);

export default Preview;
