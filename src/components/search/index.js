import React, { Component } from "react";
import { Input } from "antd";

import BookShelf from "../bookShelf";

const Search = Input.Search;

class SearchBooks extends Component {
  state = {
    booksSearch: []
  };

  render() {
    return (
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Search
          style={{ width: "50%" }}
          placeholder="Input search text"
          onSearch={this.props.onSearchBook}
          size="large"
          enterButton
        />
      </div>
    );
  }
}

export default SearchBooks;
