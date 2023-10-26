import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TournamentDetails from '../tournamentDetails';

describe('TournamentDetails', () => {
    const mockTournamentData = {
        id: 1,
        title: 'Tournament 1',
        date: '2023-10-25T18:30:00.000Z',
        description: 'Description 1',
        rewards: 'Rewards 1',
        rules: 'Rules 1',
        created_at: '2023-10-25T18:30:00.000Z',
        starting_at: '2023-10-25T18:30:00.000Z',
        teams: [{name: "Team 1"}],
    };

    it('renders without errors', () => {
        render(
            <MemoryRouter initialEntries={[{ state: { tournamentData: mockTournamentData } }]}>
                <TournamentDetails />
            </MemoryRouter>
        );
    });

});
