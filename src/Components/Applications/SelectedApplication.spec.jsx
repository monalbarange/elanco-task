import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectedApplication from './SelectedApplication.component';


// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('SelectedApplication Component', () => {
  const mockSelectedApplication = [
    {
      ConsumedQuantity: 5,
      Cost: 50,
      Date: '2023-11-05',
      InstanceId: 1,
      MeterCategory: 'Test Category',
    },
  ];

  it("renders the 'Selected Application Details' heading", () => {
    render(<SelectedApplication selectedApplication={mockSelectedApplication} />);
    const heading = screen.getByText('Selected Application Details');
    expect(heading).toBeInTheDocument();
  });
});


