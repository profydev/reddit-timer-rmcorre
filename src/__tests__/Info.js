import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

const setup = (initialPath = '/') => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );
};

test('heading "How it works" is in the document', () => {
  setup();

  const heading = screen.getByRole('heading', { name: 'How it works' });

  expect(heading).toBeInTheDocument();
});
