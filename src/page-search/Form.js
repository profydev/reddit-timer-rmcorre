import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as S from './Form.style';

const Form = () => {
  const { subreddit: initialSubbreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubbreddit);
  const history = useHistory();

  const handleOnChange = (e) => {
    setSubreddit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${subreddit}`);
  };

  useEffect(() => {
    setSubreddit(initialSubbreddit);
  }, [initialSubbreddit]);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label htmlFor="subreddit">r /</S.Label>
      <S.Input
        id="subreddit"
        type="text"
        name="subreddit"
        onChange={handleOnChange}
        value={subreddit}
      />
      <S.Button>SEARCH</S.Button>
    </S.Form>
  );
};

export default Form;
