import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "../book";

import { Card } from "antd";

import "./styles.css";

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };

  render() {
    const { title, books, onMoveBook } = this.props;

    return (
      <Card className="card-shelf" title={title} style={{ margin: 10 }}>
        <div className="book-container">
          {books.map(book => (
            <Book key={book.id} book={book} onMoveBook={onMoveBook} />
          ))}
        </div>
      </Card>
    );
  }
}

export default BookShelf;
