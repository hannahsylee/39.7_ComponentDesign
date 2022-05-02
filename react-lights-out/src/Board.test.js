import React from "react";
import { render } from "@testing-library/react";
import Board from "./Board";

/** Smoke Test */
it("renders without crashing", function() {
  render(<Board />);
});

/** Snapshot Test */
it("matches snapshot", function() {
  const {asFragment} = render(<Board />);
  expect(asFragment()).toMatchSnapshot();
});