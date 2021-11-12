import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';
import { defaultSubreddit } from '../constants';

const setup = (initialPath = '/') => {
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>
  );
  return { history };
};

test('navigates to home page when logo is clicked', () => {
  setup(`/search/${defaultSubreddit}`);

  const logoLink = screen.getByRole('link', { name: /logo\.svg/i });
  userEvent.click(logoLink);

  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

test('navigates to search page when search link is clicked', () => {
  const { history } = setup();

  const searchLink = screen.getByRole('link', { name: /search/i });
  userEvent.click(searchLink);

  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual(`/search/${defaultSubreddit}`);
});

test.each`
  link              | hash
  ${'About'}        | ${'#about'}
  ${'How it works'} | ${'#how-it-works'}
`(
  'navigates to "$link" section when "$link" link is clicked',
  ({ link, hash }) => {
    const { history } = setup(`/search/${defaultSubreddit}`);

    const hashLink = screen.getByRole('link', { name: link });
    userEvent.click(hashLink);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(history.location.hash).toEqual(hash);
  }
);
