import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Icon, Radio, Popconfirm, Rate} from "antd";

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

    const limitDescription = ({ description = ''}) => {
      return description.substring(0, 150).concat("...");
    };

    return (
      <Card
        type="inner"
        bordered={true}
        style={{
          width: 300,
          margin: 15,
          boxShadow: "11px 10px 15px -12px rgba(0,0,0,0.75)"
        }}
        actions={[
          <Icon type="info-circle" theme="outlined" onClick={() => {}} />,
          <Popconfirm title="Are you sure delete this book?" onConfirm={this.deleteBook} okText="Yes" cancelText="No">
            <Icon type="delete" theme="outlined" />
          </Popconfirm>
        ]}
      >
        <Meta
          style={{ height: 80 }}
          title={[book.title, book.subtitle].filter(Boolean).join(" - ")}
          description={book.authors && book.authors.join(", ")}
        />

        <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
          <img
            alt=""
            src={book.imageLinks.thumbnail}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "200px",
              height: "280px"
            }}
          />
        </div>

        <div style={{ justifyContent: "center", display: "flex", marginTop:10, marginBottom:10 }} >
          <Rate disabled allowHalf defaultValue={book.averageRating} />
        </div>
        
        <p style={{ textAlign: "justify", height: 110 }}>
          {limitDescription(book)}
        </p>

        <RadioGroup
          size="small"
          style={{ justifyContent: "center", display: "flex" }}
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
