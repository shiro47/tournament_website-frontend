import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TeamCards from '../teamCards';
import { AuthContext } from '../AuthContext';

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

describe('TeamCards', () => {
  it('renders without errors', () => {
    const teams = [
      {
        id: 1,
        name: 'Team 1',
        player1: {
          name: 'Player 1',
          platform: 'Platform 1',
          discordID: 123,
          discordName: 'DiscordName1',
        },
        player2: {
          name: 'Player 2',
          platform: 'Platform 2',
          discordID: 456,
          discordName: 'DiscordName2',
        },
        player3: {
          name: 'Player 3',
          platform: 'Platform 3',
          discordID: 789,
          discordName: 'DiscordName3',
        },
      },
    ];
    render(
      <AuthContext.Provider value={authContextValue}>
        <TeamCards teams={teams} />
      </AuthContext.Provider>
    );
  });

});
