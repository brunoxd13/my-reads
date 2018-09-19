import React, { Component } from "react";
import * as BooksAPI from "../../service/BooksAPI";

import { message } from "antd";
import "antd/dist/antd.css";

import BookShelves from "../../components/bookShelves";

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

  render() {
    return (
      <div>
        <BookShelves 
          onMoveBook={this.onMoveBook}
          books={this.state.books} />
      </div>
    );
  }
}

export default Main;
