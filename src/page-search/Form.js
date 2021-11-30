/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import { useParams, useHistory } from 'react-router-dom';
import * as S from './Form.style';

const Form = (props) => (
  // const { subreddit: initialSubbreddit } = useParams();
  // const [subreddit, setSubreddit] = useState(initialSubbreddit);
  // const history = useHistory();

  // const handleOnChange = (e) => {
  //   setSubreddit(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   history.push(`/search/${subreddit}`);
  // };

  // useEffect(() => {
  //   setSubreddit(initialSubbreddit);
  // }, [initialSubbreddit]);

  <S.Section>
    <S.Heading>Find the best time for a subreddit</S.Heading>
    <S.Form onSubmit={props.handleSubmit}>
      <S.Label htmlFor="subreddit">r /</S.Label>
      <S.Input
        id="subreddit"
        type="text"
        name="subreddit"
        onChange={props.handleOnChange}
        value={props.subreddit}
      />
      <S.Button>SEARCH</S.Button>
    </S.Form>
  </S.Section>
);

export default Form;
