import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

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

test('navigates to home page when icon is clicked', () => {
  setup('/search/javascript');
  const iconLink = screen.getByRole('link', { name: /redditTimerIcon\.svg/ });
  userEvent.click(iconLink);

  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

test('navigates to terms page when "Terms & Privacy" is clicked', () => {
  setup();
  const termsLink = screen.getByRole('link', { name: /Terms & Privacy/i });
  userEvent.click(termsLink);

  expect(screen.getByText(/Terms & Privacy Page/i)).toBeInTheDocument();
});
