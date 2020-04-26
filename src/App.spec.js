import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App Component", () => {
  test("SMOKE: renders without crashing", () => {
    shallow(<App />);
  });
});
