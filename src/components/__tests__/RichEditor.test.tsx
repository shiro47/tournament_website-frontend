import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomEditor from '../RichEditor';

describe('CustomEditor', () => {
  it('renders without errors', () => {
    const mockOnEditorChange = jest.fn();
    render(<CustomEditor onEditorChange={mockOnEditorChange} />);
  });
  
});
