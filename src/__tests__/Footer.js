import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';
import { defaultSubreddit } from '../constants';

const setup = (initialPath = '/') => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );

  const footer = screen.getByRole('contentinfo');
  return { footer };
};

test('contains link to "profy.dev/employers"', () => {
  const { footer } = setup();

  const profyLink = within(footer).getByRole('link', { name: 'profy.dev' });

  expect(profyLink.getAttribute('href')).toEqual('https://profy.dev/employers');
});

test('navigates to home page when icon is clicked', () => {
  const { footer } = setup(`/search/${defaultSubreddit}`);

  const iconLink = within(footer).getByRole('link', {
    name: /redditTimerIcon\.svg/,
  });
  userEvent.click(iconLink);

  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

test('navigates to terms page when "Terms & Privacy" is clicked', () => {
  const { footer } = setup();

  const termsLink = within(footer).getByRole('link', {
    name: /Terms & Privacy/i,
  });
  userEvent.click(termsLink);

  expect(screen.getByText(/Terms & Privacy Page/i)).toBeInTheDocument();
});
