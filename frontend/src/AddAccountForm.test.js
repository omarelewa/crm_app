import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddAccountForm from './AddAccountForm';

test('renders form and submits correctly', () => {
  const mockAddAccount = jest.fn();
  render(<AddAccountForm onAddAccount={mockAddAccount} />);

  const nameInput = screen.getByPlaceholderText(/Name/i);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const button = screen.getByText(/Add Account/i);

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.click(button);

  expect(mockAddAccount).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com',
  });
});
