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
          <a
            data-testid="book-info-preview"
            href={book.previewLink}
            target="_blank"
          >
            <Icon type="info-circle" theme="outlined" />
          </a>,
          <Popconfirm
            data-testid="popup-delete"
            title="Are you sure delete this book?"
            onConfirm={this.deleteBook}
            okText="Yes"
            cancelText="No"
          >
            <Icon data-testid="btn-delete" type="delete" theme="outlined" />
          </Popconfirm>
        ]}
      >
        <Meta
          data-testid="book-meta"
          className="book-meta-info"
          style={{ height: 80 }}
          title={[book.title, book.subtitle].filter(Boolean).join(" - ")}
          description={book.authors && book.authors.join(", ")}
        />

        <div className="container-book-img">
          <img
            className="book-img"
            alt="Book"
            src={
              book.imageLinks ? book.imageLinks.thumbnail : defaultCoverImage
            }
          />
        </div>

        <div data-testid="container-rate" className="container-rate">
          <Rate
            className="book-rate"
            disabled
            allowHalf
            defaultValue={book.averageRating}
          />
        </div>

        <p data-testid="book-description" className="book-description">
          {book.description &&
            (book.description.length > 150
              ? book.description.substring(0, 150).concat("...")
              : book.description)}
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
