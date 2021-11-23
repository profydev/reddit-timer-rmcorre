import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app/App';
import { defaultSubreddit } from '../constants';

const setup = (initialPath = '/') => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );
};

test('title is in the document', () => {
  setup();

  const title = screen.getByText(/No reactions to your reddit posts/i);

  expect(title).toBeInTheDocument();
});

test('sub title is in in the document', () => {
  setup();

  const subTitle = screen.getByText(
    /Great timing, great results! Find the best time to post on your subreddit./i
  );

  expect(subTitle).toBeInTheDocument();
});

test('button link is in the document', () => {
  setup();

  const buttonLink = screen.getByRole('link', {
    name: /SHOW ME THE BEST TIME/i,
  });

  expect(buttonLink).toBeInTheDocument();
});

test('subReddit is in the document', () => {
  setup();

  const re = RegExp(`r/${defaultSubreddit}`, 'i');
  const subReddit = screen.getByText(re);

  expect(subReddit).toBeInTheDocument();
});

test(`button link has href to "/search/${defaultSubreddit}"`, () => {
  setup();

  const buttonLink = screen.getByRole('link', {
    name: /SHOW ME THE BEST TIME/i,
  });

  expect(buttonLink.getAttribute('href')).toEqual(
    `/search/${defaultSubreddit}`
  );
});

test(`image link has href to "/search/${defaultSubreddit}"`, () => {
  setup();

  const image = screen.getByRole('link', { name: /Heat Map/i });

  expect(image.getAttribute('href')).toEqual(`/search/${defaultSubreddit}`);
});

test('navigates to search page when button link is clicked', () => {
  setup();

  const buttonLink = screen.getByRole('link', {
    name: /SHOW ME THE BEST TIME/i,
  });
  userEvent.click(buttonLink);

  expect(screen.getByText(/Search Page/i)).toBeInTheDocument();
});

test('navigates to search page when table link is clicked', () => {
  setup();

  const image = screen.getByRole('link', { name: /Heat Map/i });
  userEvent.click(image);

  expect(screen.getByText(/Search Page/i)).toBeInTheDocument();
});
