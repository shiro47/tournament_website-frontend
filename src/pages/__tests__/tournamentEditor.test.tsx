import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TournamentEditor from '../tournamentEditor';
TournamentEditor

describe('TournamentEditor', () => {
    const mockTournamentData = {
        id: 1,
        title: 'Tournament 1',
        date: '2023-10-25T18:30:00.000Z',
        description: 'Description 1',
        rewards: 'Rewards 1',
        rules: 'Rules 1',
        created_at: '2023-10-25T18:30:00.000Z',
        starting_at: '2023-10-25T18:30:00.000Z',
        teams: [],
    };

    it('renders without errors', () => {
        render(
            <MemoryRouter initialEntries={[{ state: { tournamentData: mockTournamentData } }]}>
                <TournamentEditor />
            </MemoryRouter>
        );
    });

    it('updates the form values correctly', async () => {
        const { getByLabelText, getByText } = render(
            <MemoryRouter initialEntries={[{ state: { tournamentData: mockTournamentData } }]}>
                <TournamentEditor />
            </MemoryRouter>
        );

        const titleInput = getByLabelText('Tournament title');
        const descriptionEditor = getByLabelText('Description');
        const rewardsEditor = getByLabelText('Rewards');
        const rulesEditor = getByLabelText('Rules');
        const startingAtInput = getByLabelText('Starting at');

        // Simulate user input
        fireEvent.change(titleInput, { target: { value: 'New Tournament Title' } });
        // Add more fireEvent.change() calls for other inputs as needed

        // Simulate form submission
        fireEvent.click(getByText('Submit changes'));

        // Add appropriate assertions here to check if the form values were updated correctly
        await waitFor(() => {
            // Add your assertions here
        });
    });
});