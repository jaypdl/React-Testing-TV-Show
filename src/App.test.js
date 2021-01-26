import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import mockFetchShow from './api/fetchShow';


test('Renders without Error', () => {
  render(<App />);
})

jest.mock('./api/fetchShow.js');

test('Renders show information from API', async () => {
  //Arrange
  mockFetchShow.mockResolvedValueOnce({
    data:{
      name:'test name',
      summary:'Mock summary',
      image: {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
          },
      _embedded:{
        episodes: [{
          "id": 553946,
          "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
          "name": "Chapter One: The Vanishing of Will Byers",
          "season": 1,
          "number": 1,
          "type": "regular",
          "airdate": "2016-07-15",
          "airtime": "",
          "airstamp": "2016-07-15T12:00:00+00:00",
          "runtime": 60,
          "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
          },
          "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
          "_links": {
          "self": {
          "href": "http://api.tvmaze.com/episodes/553946"
          }
          }
          },]
      }
  }
  })
  render(<App />);
  //Assert
  await waitFor(() => {
    const summaryText = screen.getByText(/Mock summary/i);
    expect(summaryText).toBeInTheDocument();
  })
  
})

test('User can click dropdown', () => {
  render (<App />)
})