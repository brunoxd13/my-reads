import React from "react";
import { shallow } from "enzyme";
import SearchInput from "../index";

describe("SearchInput", () => {
  const onSearchBook = jest.fn();
  const props = {
    onSearchBook: onSearchBook
  };

  it("Render the component search input", () => {
    expect(shallow(<SearchInput {...props} />));
  });

  it("search a book", () => {
    const wrapper = shallow(<SearchInput {...props} />);

    wrapper
      .find(".search-input")
      .simulate("change", { target: { value: "astronomy" } });

    expect(onSearchBook).toHaveBeenCalledTimes(1);
  });
});
