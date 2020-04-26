import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe("App Component", () => {
  test("SMOKE: renders without crashing", () => {
    render(<App />);
  });
});
