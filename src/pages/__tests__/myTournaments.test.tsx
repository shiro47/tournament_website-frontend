import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MyTournaments from '../myTournaments';
import { AuthContext } from '../../components/AuthContext';
import { MemoryRouter } from 'react-router-dom';

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

describe('MyTournaments', () => {
    it('renders without errors', () => {
        render(
            <MemoryRouter>
                <AuthContext.Provider value={authContextValue}>
                    <MyTournaments />
                </AuthContext.Provider>
            </MemoryRouter>
        );
    });

    it('handles the search functionality', async () => {
        const { getByPlaceholderText, getByText } = render(
            <MemoryRouter>
                <AuthContext.Provider value={authContextValue}>
                    <MyTournaments />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const searchInput = getByPlaceholderText('Search by tournament title...');
        fireEvent.change(searchInput, { target: { value: 'test search' } });
        fireEvent.click(getByText('Search'));

        // You might add more assertions here based on the expected behavior after search
        await waitFor(() => expect(getByText('Expected Element')).toBeInTheDocument());
    });

    // Add more tests for other user interactions and edge cases

});
