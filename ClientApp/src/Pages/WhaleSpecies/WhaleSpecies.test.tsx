import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { WhaleSpecies } from "./WhaleSpecies";

it("renders without crashing", async () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <WhaleSpecies />
    </MemoryRouter>,
    div
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
});