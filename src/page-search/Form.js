import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './Form.style';

const Form = () => {
  const [value, setValue] = useState('');
  const { subreddit } = useParams();

  useEffect(() => {
    setValue(subreddit);
  }, [setValue, subreddit]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const url = `http://localhost:3000/search/${value}`;
    window.location.href = url;
  };

  return (
    <S.Form onSubmit={submitHandler}>
      <S.Label htmlFor="subreddit">r /</S.Label>
      <S.Input
        id="subreddit"
        type="text"
        name="subreddit"
        onChange={handleOnChange}
        value={value}
      />
      <S.Button>SEARCH</S.Button>
    </S.Form>
  );
};

export default Form;
