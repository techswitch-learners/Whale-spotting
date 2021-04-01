import React from "react";
import { ListOfUnconfirmed } from "./AdminSightingsList";
import { render } from "@testing-library/react";

test("renders the component without errors", () => {
  render(<ListOfUnconfirmed />);
});
