import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import useEvent from '@testing-library/user-event';

import { fetchShow as mockFetchShows } from './api/fetchShow';

// jest.mock('./api/fetchShow.js')

test('renders without errors', () => {
  render(<App />);
});

test('shows message when fetching data', () => {
  // Arrange: Render Component
  render(<App  show={null} />);

  // Act: Get h2 showing fetching
  const loadingText = screen.getByText(/fetching data.../i);
  // console.log(loadingText)
  // Assert: Expect message to exist
  expect(loadingText).toBeInTheDocument();
});

test('loads and shows initial content', async () => {
  // Arrange
  render(<App />);

  await waitFor(() => {
    // Act: Check Stranger Things text is on the screen
    const initialLoad = screen.getByRole('heading', { name: /Stranger Things/i });
    
    // Assert: Expect heading to exist
    expect(initialLoad).toBeInTheDocument();
  })


  
})