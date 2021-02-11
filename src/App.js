import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import * as BooksAPI from "./utils/BooksAPI";
import "./styles/App.css";
import SearchPage from "./components/SearchPage";
import BooksPage from "./components/BooksPage";

class BooksApp extends Component {
  /* Since I got error messages that suggested 'this' was undefined I added a
  constructor. I am pretty sure that I shouldn't have done that but could not
  think of another solution in the short term. */
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.getBooks = this.getBooks.bind(this);
    this.updateShelf = this.updateShelf.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  /* Isolated this function because it is used more than once */
  getBooks() {
    BooksAPI.getAll().then(books => this.setState(() => ({ books })));
  }

  updateShelf(bookId, shelf) {
    /* To see the actual changes in categories appear on the page, one has to
    fetch all the books again. */
    BooksAPI.update(bookId, shelf).then(() => this.getBooks());
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BooksPage
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              updateShelf={this.updateShelf}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

// BooksApp.propTypes = {};

export default BooksApp;
