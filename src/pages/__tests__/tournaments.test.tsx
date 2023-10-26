import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Tournaments from '../tournaments';
import { MemoryRouter } from 'react-router-dom';

describe('Tournaments component', () => {
    it('renders without errors', () => {
        render(
            <MemoryRouter>
                <Tournaments />
            </MemoryRouter>)
            ;
        // Add appropriate assertions here
    });

    it('performs search functionality correctly', async () => {
        render(<Tournaments />);
        const searchInput = screen.getByPlaceholderText('Search by tournament title...');
        const searchButton = screen.getByText('Search');

        fireEvent.change(searchInput, { target: { value: 'Sample search query' } });
        fireEvent.click(searchButton);

        await waitFor(() => {
            // Add assertions to check if the search functionality is working correctly
        });
    });

    it('performs reset functionality correctly', async () => {
        render(<Tournaments />);
        const resetButton = screen.getByText('Reset');

        fireEvent.click(resetButton);

        await waitFor(() => {
            // Add assertions to check if the reset functionality is working correctly
        });
    });
});
