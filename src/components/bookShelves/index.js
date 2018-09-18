import React, { Component } from "react";
import * as BooksAPI from "../../service/BooksAPI";
import { Tabs, message, Icon } from "antd";

import BookShelf from "../bookShelf";
import SearchTab from "../search";


import "./styles.css";

const TabPane = Tabs.TabPane;

class BookShelves extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    });
  }

  booksByShelf(shelf) {
    return this.state.books.filter(book => book.shelf === shelf);
  }

  moveBookApi(book) {
    BooksAPI.update(book, book.shelf).then(() => {
      const booksChanged = this.state.books.map(b => {
        if (b.id === book.id) {
          b.shelf = book.shelf;
        }

        return b;
      });

      this.setState({
        books: booksChanged
      });
    });
  }

  /*
  Open the loading message and after process de api, 
  After process the moving of the book show the 
  */
  onMoveBook = book => {
    message
      .loading("Moving book", 1)
      .then(this.moveBookApi(book))
      .then(() => message.success("Book moved!", 2.5));
  };

  render() {
    return (
      <Tabs defaultActiveKey="0">
        <TabPane
          tab={
            <span>
              <Icon type="search" theme="outlined" />
              Search
            </span>
          }
          key="0"
        >
          <SearchTab 
            onMoveBook={this.onMoveBook}
          />
        </TabPane>

        <TabPane tab="Currently Reading" key="1">
          <BookShelf
            books={this.booksByShelf("currentlyReading")}
            onMoveBook={this.onMoveBook}
          />
        </TabPane>

        <TabPane tab="Want to Read" key="2">
          <BookShelf
            books={this.booksByShelf("wantToRead")}
            onMoveBook={this.onMoveBook}
          />
        </TabPane>

        <TabPane tab="Read" key="3">
          <BookShelf
            books={this.booksByShelf("read")}
            onMoveBook={this.onMoveBook}
          />
        </TabPane>
      </Tabs>
    );
  }
}

export default BookShelves;