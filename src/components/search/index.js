import React, { Component } from "react";
import { Input } from "antd";
import * as BooksAPI from "../../api/BooksAPI";
import BookShelf from "../bookShelf";

const Search = Input.Search;

class SearchTab extends Component {
  state = {
    books: []
  };

  onSearchBook = searchText => {
    BooksAPI.search(searchText).then(() => {
      this.setState({
        books: books
      });
    });
  };

  render() {
    return (
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Search
          style={{ width: "50%" }}
          placeholder="Input search text"
          onSearch={value => console.log(value)}
          size="large"
          enterButton
        />

        <BookShelf books={{}} onMoveBook={this.props.onMoveBook} />
      </div>
    );
  }
}

export default SearchTab;
