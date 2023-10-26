import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TournamentTeams from '../tournamentTeams'; // Update the path to the TournamentTeams component

describe('TournamentTeams component', () => {
  const mockTournamentData = {
    teams: [
      {
        id: 1,
        name: 'Team 1',
        player1: {
          name: 'Player 1',
          platform: 'Platform 1',
          discordID: 123,
          discordName: 'Discord 1'
        },
        player2: {
          name: 'Player 2',
          platform: 'Platform 2',
          discordID: 456,
          discordName: 'Discord 2'
        },
        player3: {
          name: 'Player 3',
          platform: 'Platform 3',
          discordID: 789,
          discordName: 'Discord 3'
        },
        isActive: false
      }
      // Add more mock teams as needed
    ]
  };

  it('renders without errors', () => {
    render(
      <MemoryRouter initialEntries={[{ state: { tournamentData: mockTournamentData } }]}>
        <TournamentTeams />
      </MemoryRouter>
    );
    // Add appropriate assertions here
  });

  it('displays the inactive teams correctly', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ state: { tournamentData: mockTournamentData } }]}>
        <TournamentTeams />
      </MemoryRouter>
    );

    // Add assertions to check if the inactive teams are displayed correctly
    expect(getByText('Team 1')).toBeInTheDocument();
    expect(getByText('Player 1')).toBeInTheDocument();
    // Add more assertions as needed
  });
});
