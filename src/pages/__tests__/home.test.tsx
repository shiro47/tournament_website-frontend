import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../home';

describe('HomePage', () => {
  it('renders without errors', () => {
    render(<HomePage />);
  });
});
