import React from "react";
import { render } from "@testing-library/react";
import Cell from "./Cell";

/** Smoke Test */
it("renders without crashing", function() {
  render(<Cell />);
});

/** Snapshot Test */
it("matches snapshot", function() {
  const {asFragment} = render(<Cell />);
  expect(asFragment()).toMatchSnapshot();
});