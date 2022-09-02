import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  window.history.pushState({}, "Sage account", "/route");
  render(<App />);
});
