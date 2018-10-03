import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import Main from "../index";

describe("Main page", () => {
  it("Render the main component with shallow", () => {
    expect(shallow(<Main />));
  });

  it("Render the main component with mount", () => {
    expect(
      mount(
        <MemoryRouter initialEntries={["/"]}>
          <Main />
        </MemoryRouter>
      )
    );
  });

  it("Render the main component on search page with mount", () => {
    expect(
      mount(
        <MemoryRouter initialEntries={["/search"]}>
          <Main />
        </MemoryRouter>
      )
    );
  });
});
