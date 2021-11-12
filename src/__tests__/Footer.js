import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';
import { defaultSubreddit } from '../constants';

const setup = (initialPath = '/') => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );
};

test('contains link to "profy.dev/employers"', () => {
  setup();

  const profyLink = screen.getByRole('link', { name: 'profy.dev' });

  expect(profyLink.getAttribute('href')).toEqual('https://profy.dev/employers');
});

test('navigates to home page when icon is clicked', () => {
  setup(`/search/${defaultSubreddit}`);

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
