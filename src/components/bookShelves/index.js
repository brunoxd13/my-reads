import React, { Component } from "react";
import PropTypes from "prop-types";

import BookShelf from "../bookShelf";

import "./styles.css";

class BookShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };

  booksByShelf(shelf) {
    return this.props.books.filter(book => book.shelf === shelf);
  }

  render() {
    const { books, onMoveBook } = this.props;

    return (
      <div className="container-book-shelves">
        <BookShelf
          title="Currently Reading"
          books={this.booksByShelf("currentlyReading")}
          onMoveBook={onMoveBook}
        />

        <BookShelf
          title="Want to Read"
          books={this.booksByShelf("wantToRead")}
          onMoveBook={onMoveBook}
        />

        <BookShelf
          title="Read"
          books={this.booksByShelf("read")}
          onMoveBook={onMoveBook}
        />
      </div>
    );
  }
}

export default BookShelves;
