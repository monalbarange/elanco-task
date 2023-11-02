import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Applications from "./Applications.component";

describe("Applications Component", () => {
  it('renders "All Applications" text in Typography component', () => {
    render(
      <MemoryRouter>
        <Applications />
      </MemoryRouter>
    );

    const allApplicationsText = screen.getByText("All Applications");
    expect(allApplicationsText).toBeInTheDocument();
  });
});
