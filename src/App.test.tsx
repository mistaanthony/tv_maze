import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders headers for both sections", () => {
  render(<App />);
  const mainHeader = screen.getByText(/tv bland/i);
  const lastAddedShows = screen.getByText(/last added shows/i);

  expect(mainHeader).toBeInTheDocument();
  expect(lastAddedShows).toBeInTheDocument();
});
