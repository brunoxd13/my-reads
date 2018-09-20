import React, { Component } from "react";
import { Input } from "antd";

import BookShelf from "../bookShelf";
import SearchInput from "../searchInput";

const Search = Input.Search;

class SearchBooks extends Component {
  render() {
    return (
      <div style={{ justifyContent: "center", display: "flex" }}>
        <BookShelf
          books={this.props.booksSearch}
          onMoveBook={this.props.onMoveBook}
        />
      </div>
    );
  }
}

export default SearchBooks;
