import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home.component';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home Component Tests', () => {
  test('renders home page without crashing', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const headingElement = screen.getByText(/Welcome to the Home Page/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('checks if links are correctly configured', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const applicationsLink = screen.getByRole('link', { name: /Applications/i });
    expect(applicationsLink).toHaveAttribute('href', '/applications');

    const resourcesLink = screen.getByRole('link', { name: /Resources/i });
    expect(resourcesLink).toHaveAttribute('href', '/resources');
  });
});
