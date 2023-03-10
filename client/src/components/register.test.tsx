import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import RegisterPage from '../page1/register';

describe('RegisterPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders the registration form', () => {
    render(<RegisterPage />);

    expect(screen.getByLabelText('firstName')).toBeInTheDocument();
    expect(screen.getByLabelText('lastName')).toBeInTheDocument();
    expect(screen.getByLabelText('username')).toBeInTheDocument();
    expect(screen.getByLabelText('email')).toBeInTheDocument();
    expect(screen.getByLabelText('password')).toBeInTheDocument();
    expect(screen.getByLabelText('confirmPassword')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
  });
})