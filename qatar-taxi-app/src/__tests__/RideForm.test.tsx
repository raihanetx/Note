import React from 'react';
import { render, screen } from '@testing-library/react';
import RideForm from '../components/RideForm';

describe('RideForm', () => {
  it('renders all input fields and the submit button', () => {
    render(<RideForm />);

    expect(screen.getByLabelText(/pickup location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/drop-off location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/fare/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add ride/i })).toBeInTheDocument();
  });
});
