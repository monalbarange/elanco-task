import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
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

  it("renders TextField and handles input change", () => {
    render(
      <MemoryRouter>
        <Applications />
      </MemoryRouter>
    );

    const textField = screen.getByTestId("search-input");
    expect(textField).toBeInTheDocument();

    fireEvent.change(textField, { target: { value: "Test input" } });
    expect(textField).toHaveValue("Test input");
  });
});
