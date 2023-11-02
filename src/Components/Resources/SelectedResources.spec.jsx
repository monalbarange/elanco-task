import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectedResources from './SelectedResources.component';


// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('SelectedResources Component', () => {
  const mockSelectedResources = [
    {
      ConsumedQuantity: 5,
      Cost: 50,
      Date: '2023-11-05',
      InstanceId: 1,
      MeterCategory: 'Test Category',
    },
  ];

  it("renders the 'Selected Resource Details' heading", () => {
    render(<SelectedResources selectedResources={mockSelectedResources} />);
    const heading = screen.getByText('Selected Resource Details');
    expect(heading).toBeInTheDocument();
  });
});


