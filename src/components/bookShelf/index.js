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
      <Card title={title} style={{ margin: 10 }}>
        <div
          className="shelf"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            overflow: "auto",
            justifyContent: "flex-start"
          }}
        >
          {books.map(book => (
            <Book key={book.id} book={book} onMoveBook={onMoveBook} />
          ))}
        </div>
      </Card>
    );
  }
}

export default BookShelf;
