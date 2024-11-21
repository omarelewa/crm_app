import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Account Management title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Account Management/i);
  expect(titleElement).toBeInTheDocument();
});
