import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

const setup = (initialPath = '/search/javascript') => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );
};

test('title is in the document', () => {
  setup();

  const title = screen.getByText(/Find the best time for a subreddit/i);

  expect(title).toBeInTheDocument();
});
