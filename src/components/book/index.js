import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Icon, Radio, Popconfirm, Rate } from "antd";

import "./styles.css";

const { Meta } = Card;

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };

  moveBook = selected => {
    let book = this.props.book;
    book.shelf = selected.target.value;

    this.props.onMoveBook(book);
  };

  deleteBook = () => {
    let book = this.props.book;
    book.shelf = "none";

    this.props.onMoveBook(book);
  };

  render() {
    const { book } = this.props;

    const defaultCoverImage =
      "https://books.google.com/googlebooks/images/no_cover_thumb.gif";

    return (
      <Card
        className="card-book"
        type="inner"
        bordered={true}
        actions={[
          <Icon type="info-circle" theme="outlined" onClick={() => {}} />,
          <Popconfirm
            title="Are you sure delete this book?"
            onConfirm={this.deleteBook}
            okText="Yes"
            cancelText="No"
          >
            <Icon type="delete" theme="outlined" />
          </Popconfirm>
        ]}
      >
        <Meta
          style={{ height: 80 }}
          title={[book.title, book.subtitle].filter(Boolean).join(" - ")}
          description={book.authors && book.authors.join(", ")}
        />

        <div className="container-book-img">
          <img
            className="book-img"
            alt=""
            src={
              book.imageLinks ? book.imageLinks.thumbnail : defaultCoverImage
            }
          />
        </div>

        <div className="container-rate">
          <Rate disabled allowHalf defaultValue={book.averageRating} />
        </div>

        <p className="book-description">
          {book.description && book.description.substring(0, 150).concat("...")}
        </p>

        <RadioGroup
          className="book-select"
          size="small"
          defaultValue={book.shelf}
          onChange={this.moveBook}
        >
          <RadioButton value="currentlyReading">Reading</RadioButton>
          <RadioButton value="wantToRead">Want to read</RadioButton>
          <RadioButton value="read">Read</RadioButton>
        </RadioGroup>
      </Card>
    );
  }
}

export default Book;