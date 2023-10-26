import React from 'react';
import { render } from '@testing-library/react';
import { AuthProvider, useAuth } from '../AuthContext';
import { BrowserRouter } from 'react-router-dom';

describe('AuthProvider', () => {
  it('provides the auth context values', () => {
    const ConsumerComponent = () => {
      const authContext = useAuth();
      return (
        <div>
          <span>{authContext.accessToken}</span>
          <span>{authContext.refreshToken}</span>
          <span>{authContext.isLoggedIn.toString()}</span>
        </div>
      );
    };

    const { getByText } = render(
      <BrowserRouter>
        <AuthProvider>
          <ConsumerComponent />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(getByText('null')).toBeInTheDocument(); // Change 'null' to expected values
    expect(getByText('null')).toBeInTheDocument(); // Change 'null' to expected values
    expect(getByText('false')).toBeInTheDocument(); // Change 'false' to expected values
  });
});

// Additional tests can be written to test other functions like 'logout' and 'getNewAccessToken'.
