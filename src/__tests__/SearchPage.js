import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app/App';
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

test('title is in the document', () => {
  setup('/search/javascript');
  const title = screen.getByRole('heading', {
    name: /Find the best time for a subreddit/i,
  });

  expect(title).toBeInTheDocument();
});

test('search input is in the document', () => {
  setup('/search/javascript');
  const searchInput = screen.getByRole('textbox', { name: /r /i });

  expect(searchInput).toBeInTheDocument();
});

test('submit button is in the document', () => {
  setup('/search/javascript');
  const button = screen.getByRole('button', { name: /search/i });

  expect(button).toBeInTheDocument();
});

test('search input value matches URL param', () => {
  setup('/search/javascript');
  const searchInput = screen.getByRole('textbox', { name: /r /i });

  expect(searchInput.value).toBe('javascript');
});

test('URL param contains search input value', () => {
  const { history } = setup('/search/javascript');
  const searchInput = screen.getByRole('textbox', { name: /r /i });
  const submitButton = screen.getByRole('button', /search/i);

  userEvent.clear(searchInput);
  userEvent.type(searchInput, 'react');
  userEvent.click(submitButton);

  expect(history.location.pathname).toEqual('/search/react');
});

test('input value changes to default subreddit when search link in header is clicked', () => {
  setup('/search/react');
  const searchInput = screen.getByRole('textbox', { name: /r /i });
  const header = screen.getByRole('banner');
  const searchLink = within(header).getByRole('link', { name: /Search/i });

  userEvent.click(searchLink);

  expect(searchInput.value).toBe(defaultSubreddit);
});
