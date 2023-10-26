import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('renders current year and text', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    expect(screen.getByText(`© ${currentYear} Tournament Website`)).toBeInTheDocument();
  });
});
