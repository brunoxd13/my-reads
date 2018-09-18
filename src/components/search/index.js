import React, { Component } from "react";
import { Input } from "antd";
import * as BooksAPI from "../../api/BooksAPI";
import BookShelf from "../bookShelf";

const Search = Input.Search;

class SearchTab extends Component {
  state = {
    booksSearch: []
  };

  onSearchBook = searchText => {
    console.log(`teste do search ${searchText}`)
    BooksAPI.search(searchText).then(books => {
      console.log(`teste do search ${books}`)

      this.setState({  
        booksSearch: books
      });
      // console.log(`teste do search ${this.state.booksSearch}`)
    });
  };

  render() {
    return (
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Search
          style={{ width: "50%" }}
          placeholder="Input search text"
          onSearch={this.onSearchBook}
          size="large"
          enterButton
        />

        <BookShelf books={this.state.booksSearch} onMoveBook={this.props.onMoveBook} />
      </div>
    );
  }
}

export default SearchTab;
