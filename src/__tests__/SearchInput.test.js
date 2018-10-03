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

  it("Search a book", () => {
    jest.useFakeTimers();

    const wrapper = shallow(<SearchInput {...props} />);

    wrapper
      .find(".search-input")
      .simulate("change", { target: { value: "astronomy" } });

    jest.runAllTimers();

    expect(onSearchBook).toHaveBeenCalledTimes(1);
  });

  it("Search a book after other one", () => {
    jest.useFakeTimers();

    const wrapper = shallow(<SearchInput {...props} />);

    wrapper
      .find(".search-input")
      .simulate("change", { target: { value: "astronomy" } });

    jest.runAllTimers();

    wrapper
      .find(".search-input")
      .simulate("change", { target: { value: "astronomy" } });

    expect(onSearchBook).toHaveBeenCalledTimes(2);
  });
});
