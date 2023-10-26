import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../login';
import { AuthContext } from '../../components/AuthContext';
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

describe('LoginPage', () => {
  it('renders without errors', () => {
    render(
      <Router>
        <AuthContext.Provider value={authContextValue}>
          <LoginPage />
        </AuthContext.Provider>
      </Router>
    );
  });

  it('submits the form with valid credentials', async () => {
    const { getByLabelText, getByText } = render(
      <Router>
        <AuthContext.Provider value={authContextValue}>
          <LoginPage />
        </AuthContext.Provider>
      </Router>
    );

    fireEvent.change(getByLabelText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'testpassword' } });
    fireEvent.click(getByText('Submit'));

    await waitFor(() => expect(getByText('Welcome to Our Tournament Website')).toBeInTheDocument());
  });

  // Add more tests for error cases and edge cases

});
