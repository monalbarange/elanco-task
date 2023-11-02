import React from 'react';
import { render, screen } from '@testing-library/react';
import Raw from './Raw.component';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Raw Component', () => {
  it('renders "All Raw Data" text in Typography component', () => {
    render(<Raw />);

    const allResourcesText = screen.getByText('All Raw Data');
    expect(allResourcesText).toBeInTheDocument();
  });

  it('renders text of "Back" button', () => {
    render(<Raw />);
    const backButton = screen.getByTestId('back-button');

    expect(backButton).toHaveTextContent('Back');
  });
});
                                                                                                                                                                   