import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { message, Icon } from "antd";

import BookShelves from "../../components/bookShelves";
import SearchInput from "../../components/searchInput";
import BookShelf from "../../components/bookShelf";

import * as BooksAPI from "../../service/BooksAPI";

import "./styles.css";

class Main extends Component {
  state = {
    books: [],
    booksSearch: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    });
  }

  /*
  Filters all books except the one that underwent the change and adds the changed.
  */
  moveBookApi = book => {
    BooksAPI.update(book, book.shelf).then(() => {
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };

  /*
  Merge the books of search with my book's.
  */
  mergeBooks = books => {
    return books.map(book => {
      const found = this.state.books.find(b => b.id === book.id);
      return found ? found : book;
    });
  };

  /*
  Open the loading message and after process de api, 
  After process the moving of the book show the 
  */
  onMoveBook = book => {
    message
      .loading("Moving book", 1)
      .then(this.moveBookApi(book))
      .then(() => message.success("Book moved!", 1));
  };

  searchBookApi = searchText => {
    BooksAPI.search(searchText).then(books => {
      if (books.error) {
        message.error("No result on search!", 1);
        return;
      }

      this.setState({
        booksSearch: this.mergeBooks(books)
      });

      this.props.history.push("/search");
    });
  };

  onSearchBook = searchText => {
    if (!searchText) {
      this.props.history.push("/");
      return;
    }

    message
      .loading("Searching for books", 0.7)
      .then(this.searchBookApi(searchText));
  };

  render() {
    return (
      <div className="main-page">
        <div className="header">
          <Link to="/" className="link-home">
            <Icon className="icon-header" type="book" theme="outlined" />
          </Link>
          <div
            style={{ display: "flex", justifyContent: "center", width: "90%" }}
          >
            <SearchInput onSearchBook={this.onSearchBook} />
          </div>
        </div>

        <div className="content">
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <BookShelves
                  books={this.state.books}
                  onMoveBook={this.onMoveBook}
                />
              )}
            />

            <Route
              path="/search"
              render={({ history }) => (
                <div>
                  {this.state.booksSearch.length > 0 && (
                    <BookShelf
                      title="Results of search..."
                      books={this.state.booksSearch}
                      onMoveBook={this.onMoveBook}
                    />
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
