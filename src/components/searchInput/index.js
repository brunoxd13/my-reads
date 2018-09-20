import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

import "./styles.css"

const Search = Input.Search;

class SearchInput extends Component {
  static propTypes = {
    onSearchBook: PropTypes.func.isRequired
  };

  render() {
    return (
      <Search
        style={{ width: 500 }}
        placeholder="Input search text"
        onSearch={this.props.onSearchBook}
      />
    );
  }
}

export default SearchInput;
