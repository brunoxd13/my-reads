import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

const Search = Input.Search;

class SearchInput extends Component {
  static propTypes = {
    onSearchBook: PropTypes.func.isRequired
  };

  render() {
    return (
      <Search
        style={{ width: "50%" }}
        placeholder="Input search text"
        onSearch={this.props.onSearchBook}
        enterButton
      />
    );
  }
}

export default SearchInput;
