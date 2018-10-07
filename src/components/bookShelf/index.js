import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "../book";

import { Card, Icon, Button } from "antd";

import "./styles.css";

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };

  state = {
    visible: true
  };

  showOrHideBooks = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { title, books, onMoveBook } = this.props;

    return (
      <Card
        className="card-shelf"
        title={title}
        extra={
          this.state.visible ? (
            <Button onClick={this.showOrHideBooks}>
              <Icon type="up" theme="outlined" />
            </Button>
          ) : (
            <Button onClick={this.showOrHideBooks}>
              <Icon type="down" theme="outlined" />
            </Button>
          )
        }
      >
        <div className="book-container">
          {this.state.visible &&
            books.map(book => (
              <Book key={book.id} book={book} onMoveBook={onMoveBook} />
            ))}
        </div>
      </Card>
    );
  }
}

export default BookShelf;
