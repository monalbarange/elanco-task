import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Resources from "./Resources.component";

describe("Resources Component", () => {
  it('renders "All Resources" text in Typography component', () => {
    render(
      <MemoryRouter>
        <Resources />
      </MemoryRouter>
    );

    const allResourcesText = screen.getByText("All Resources");
    expect(allResourcesText).toBeInTheDocument();
  });

});
