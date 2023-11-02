import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
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

  it("renders TextField and handles input change", () => {
    render(
      <MemoryRouter>
        <Resources />
      </MemoryRouter>
    );

    const textField = screen.getByTestId("search-input");
    expect(textField).toBeInTheDocument();

    fireEvent.change(textField, { target: { value: "Test input" } });
    expect(textField).toHaveValue("Test input");
  });
});
