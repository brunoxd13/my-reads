import React, { Component } from "react";
import { Route } from "react-router-dom";
import { message } from "antd";

import BookShelves from "../../components/bookShelves";
import SearchBooks from "../../components/search";

import * as BooksAPI from "../../service/BooksAPI";

import "antd/dist/antd.css";

import "./styles.css"

class Main extends Component {
  state = {
    books: []
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
      this.setState({
        booksSearch: books
      });
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          
        </div>

        <div className="content">
          <Route
            exact
            path="/"
            render={() => (
              <BookShelves
                books={this.state.books}
                onMoveBook={this.onMoveBook}
              />
            )}
          />

          <Route path="/search" render={({ history }) => <SearchBooks />} />
        </div>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
      </div>
    );
  }
}

export default Main;
