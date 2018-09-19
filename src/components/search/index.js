import React, { Component } from "react";
import { Input } from "antd";
import * as BooksAPI from "../../service/BooksAPI";
import BookShelf from "../bookShelf";

const Search = Input.Search;

class SearchTab extends Component {
  state = {
    booksSearch: []
  };

  onSearchBook = searchText => {
    BooksAPI.search(searchText).then(books => {
      this.setState({  
        booksSearch: books
      });

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
        
        
        {this.state.booksSearch}
      </div>
    );
  }
}

export default SearchTab;
