import React from "react";
import { ListOfUnconfirmed } from "./ConfirmSighting";
import { render } from "@testing-library/react";

test("renders the component without errors", () => {
  render(<ListOfUnconfirmed />);
});
