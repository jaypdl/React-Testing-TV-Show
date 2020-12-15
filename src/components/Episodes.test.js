import React from 'react';
import {render, screen} from '@testing-library/react';
import Episodes from './Episodes';

test('renders without errors', () => {
  render(<Episodes episodes={[]} />);
})

test('renders with new data, after loading empty', () => {
  // Arrange: Render
  const { rerender } = render(<Episodes episodes={[]}/>);

  // Act: 
  let episodeObjects = screen.queryAllByTestId('episodeItem');

  expect(episodeObjects).toHaveLength(0);

  const episodesTest = [
    {name: 'test1', id: 1, image: null, season: 1, number: 1, summary: 'summary', runtime: 60}
    {name: 'test2', id: 2, image: null,season: 1, number: 2, summary: 'summary', runtime: 60}
    {name: 'test3', id: 3, image: null,season: 1, number: 3, summary: 'summary', runtime: 60}
  ];

  rerender(<Episodes episodes={episodesTest} />);
  // episodes = screen.queryAllByTestId('episodeItem');
  // expect(episodeObjects).toHaveLength(3);


})