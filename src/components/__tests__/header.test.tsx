import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header';


jest.mock('../AuthContext', () => ({
  useAuth: () => ({
    isLoggedIn: true,
    logout: jest.fn(),
  }),
}));

describe('<Header />', () => {
  it('renders navbar with links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Tournaments')).toBeInTheDocument();
  });

  it('renders different links when logged in', () => {
    render(<Header />);
    expect(screen.getByText('My tournaments')).toBeInTheDocument();
    expect(screen.getByText('Create')).toBeInTheDocument();
  });

  it('renders login button when not logged in', () => {
    jest.mock('../AuthContext', () => ({
      useAuth: () => ({
        isLoggedIn: false,
      }),
    }));
    render(<Header />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders logout button when logged in', () => {
    render(<Header />);
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});
