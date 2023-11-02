import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Applications from './Components/Applications/Applications.component';
import SelectedApplication from './Components/Applications/SelectedApplication.component';

describe('App Component', () => {
  it('renders Applications component at / route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Applications />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('All Applications')).toBeInTheDocument();
  });

  it('navigates to SelectedApplication component when the route is /applications/:id', () => {
    render(
      <MemoryRouter initialEntries={['/applications/123']}>
        <Routes>
          <Route path="/applications/:id" element={<SelectedApplication />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Selected Application Details')).toBeInTheDocument();
  });

  it('navigates to Applications component when the route is unknown', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <Routes>
          <Route path="/unknown" element={<Applications />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('All Applications')).toBeInTheDocument();
  });
});
