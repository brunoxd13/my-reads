import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "../book";

import "./index.css";

class BookShelf extends Component {
  static propTypes = {
		books: PropTypes.array.isRequired,
		onMoveBook: PropTypes.func.isRequired
	}

  render() {
    const { books, onMoveBook } = this.props
    
    return (
        <div
            className="shelf"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            {books.map(book => (
              <Book key={book.id} book={book} onMoveBook={onMoveBook} />
            ))}
          </div>
    );
  }
}

export default BookShelf;
