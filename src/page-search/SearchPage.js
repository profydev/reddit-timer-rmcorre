/* eslint-disable no-await-in-loop */
import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as S from './SearchPage.style';
import Form from './Form';
import LoadingSpinner from '../loadingSpinner';
import Timer from './Timer';

const SearchPage = () => {
  const { subreddit: initialSubbreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubbreddit);
  const history = useHistory();
  const [subredditPosts, setSubredditPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubredditFetch = useCallback(async (param) => {
    setIsLoading(true);
    setError(null);
    const pages = [
      '',
      '&after=t3_drl1d6',
      '&after=t3_ccg6no',
      '&after=t3_caufp8',
      '&after=t3_e8o8oz',
    ];
    let response;
    let responseJSON;
    let result = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      try {
        response = await fetch(
          `https://www.reddit.com/r/${param}/top.json?t=year&limit=100${pages[i]}`
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        responseJSON = await response.json();
        result = [...result, ...responseJSON.data.children];

        setSubredditPosts(result);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        return;
      }
    }
  }, []);

  const handleOnChange = (e) => {
    setSubreddit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${subreddit}`);
    handleSubredditFetch(subreddit);
  };

  useEffect(() => {
    setSubreddit(initialSubbreddit);
  }, [initialSubbreddit]);

  useEffect(() => {
    handleSubredditFetch(subreddit);
  }, [handleSubredditFetch, subreddit]);

  return (
    <S.Main>
      <Form
        subreddit={subreddit}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
      />

      <Timer>
        {!isLoading && !error && <p>Posts loaded</p>}
        {!isLoading && subredditPosts.length === 0 && <p>No posts found</p>}
        {error && <p>{error}</p>}
        {isLoading && <LoadingSpinner />}
      </Timer>
    </S.Main>
  );
};

export default SearchPage;
