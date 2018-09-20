import React, { Component } from "react";
import { Route } from "react-router-dom";
import { message } from "antd";

import BookShelves from "../../components/bookShelves";
import BookShelf from "../../components/bookShelf";
import SearchInput from "../../components/searchInput";

import * as BooksAPI from "../../service/BooksAPI";

import "antd/dist/antd.css";

import "./styles.css";

class Main extends Component {
  state = {
    books: [],
    booksSearch: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    });
  }

  moveBookApi(book) {
    BooksAPI.update(book, book.shelf).then(() => {
      const booksChanged = this.state.books.map(b => {
        if (b.id === book.id) {
          b.shelf = book.shelf;
        }

        return b;
      });

      this.setState({
        books: booksChanged
      });
    });
  }

  /*
  Open the loading message and after process de api, 
  After process the moving of the book show the 
  */
  onMoveBook = book => {
    message
      .loading("Moving book", 1)
      .then(this.moveBookApi(book))
      .then(() => message.success("Book moved!", 2.5));
  };

  onSearchBook = searchText => {
    BooksAPI.search(searchText).then(books => {
      if (books.error) {
        message.error("Error on search!", 2.5);
        return;
      }

      const booksMapped = books.map(book => {
        let stateBook = this.state.books.find(b => b.id === book.id);
        if (stateBook) {
          book.shelf = stateBook.shelf;
        } else {
          book.shelf = "none";
        }

        return book;
      });

      this.setState({
        booksSearch: booksMapped
      });
    });
  };

  render() {
    return (
      <div className="main-page">
        <div className="header">
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              paddingTop: 10
            }}
          >
            <SearchInput onSearchBook={this.onSearchBook} />
          </div>
        </div>

        <div className="content">
          <div style={{ backgroundColor: "#e6e6e6" }}>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  {this.state.booksSearch.length > 0 && (
                    <BookShelf
                      title="Result of search..."
                      books={this.state.booksSearch}
                      onMoveBook={this.onMoveBook}
                    />
                  )}
                  <BookShelves
                    books={this.state.books}
                    onMoveBook={this.onMoveBook}
                  />
                </div>
              )}
            />

            <Route
              path="/search"
              render={({ history }) => (
                <BookShelf
                  books={this.state.booksSearch}
                  onMoveBook={this.onMoveBook}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
