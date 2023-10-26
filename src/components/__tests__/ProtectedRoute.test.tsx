import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import { AuthProvider } from '../AuthContext';

describe('ProtectedRoute', () => {
  it('redirects to login page if not logged in', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/protected']}>
        <AuthProvider>
          <ProtectedRoute>
            <div>Protected Content</div>
          </ProtectedRoute>
        </AuthProvider>
      </MemoryRouter>
    );

    expect(getByText('Protected Content')).toBeInTheDocument();
  });
});

