import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Icon } from "antd";

import BookShelf from "../bookShelf";
import SearchBooks from "../search";


import "./styles.css";

const TabPane = Tabs.TabPane;

class BookShelves extends Component {
  static propTypes = {
		books: PropTypes.array.isRequired,
		onMoveBook: PropTypes.func.isRequired
	}

  booksByShelf(shelf) {
    return this.props.books.filter(book => book.shelf === shelf);
  }

  render() {
    const { books, onMoveBook } = this.props;

    return (
      <Tabs defaultActiveKey="currentlyReading">
        <TabPane
          tab={
            <span>
              <Icon type="search" theme="outlined" />
              Search
            </span>
          }
          key="0"
        >
          <SearchBooks 
            onMoveBook={onMoveBook}
          />
        </TabPane>

        <TabPane tab="Currently Reading" key="currentlyReading">
          <BookShelf
            books={this.booksByShelf("currentlyReading")}
            onMoveBook={onMoveBook}
          />
        </TabPane>

        <TabPane tab="Want to Read" key="wantToRead">
          <BookShelf
            books={this.booksByShelf("wantToRead")}
            onMoveBook={onMoveBook}
          />
        </TabPane>

        <TabPane tab="Read" key="read">
          <BookShelf
            books={this.booksByShelf("read")}
            onMoveBook={onMoveBook}
          />
        </TabPane>
      </Tabs>
    );
  }
}

export default BookShelves;