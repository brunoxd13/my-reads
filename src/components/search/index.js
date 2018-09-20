import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "../book";

import { Card } from "antd";

import "./styles.css";

class BookSearch extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };

  render() {
    const { books, onMoveBook } = this.props;

    return (
      <Card title={"Results of search..."} style={{ margin: 10 }}>
        <div
          className="shelf"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            overflow: "auto",
            justifyContent: "space-around"
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

export default BookSearch;
