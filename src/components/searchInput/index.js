import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

import "./styles.css";

const Search = Input.Search;

class SearchInput extends Component {
  static propTypes = {
    onSearchBook: PropTypes.func.isRequired
  };

  onChange = e => {
    const query = e.target.value;

    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.onSearchBook(query);
    }, 500);
  };

  render() {
    return (
      <Search
        className="search-input"
        placeholder="Input search text"
        onChange={this.onChange}
      />
    );
  }
}

export default SearchInput;
