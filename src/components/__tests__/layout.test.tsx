import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../layout';

jest.mock('../header', () => () => <div>MockHeader</div>);
jest.mock('../Footer', () => () => <div>MockFooter</div>);

describe('<Layout />', () => {
  it('renders Header, children, and Footer', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );

    expect(screen.getByText('MockHeader')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeInTheDocument();
    expect(screen.getByText('MockFooter')).toBeInTheDocument();
  });
});
