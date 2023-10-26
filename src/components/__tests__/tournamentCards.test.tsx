import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TournamentsCards from '../tournamentCards';
import { AuthContext } from '../AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

const authContextValue = {
    accessToken: 'your-access-token',
    refreshToken: 'your-refresh-token',
    setAccessToken: jest.fn(),
    setRefreshToken: jest.fn(),
    isLoggedIn: true,
    setIsLoggedIn: jest.fn(),
    logout: jest.fn(),
    getNewAccessToken: jest.fn(),
  };

describe('TournamentsCards', () => {
  const tournaments = [
    {
      id: 1,
      title: 'Tournament 1',
      date: '2023-10-25T18:30:00.000Z',
      description: 'Description 1',
      rewards: 'Rewards 1',
      rules: 'Rules 1',
      created_at: '2023-10-25T18:30:00.000Z',
      starting_at: '2023-10-25T18:30:00.000Z',
      teams: [],
    },
  ];

  it('renders without errors', () => {
    render(
      <Router>
        <AuthContext.Provider value={authContextValue}>
          <TournamentsCards tournaments={tournaments} />
        </AuthContext.Provider>
      </Router>
    );
  });

});
