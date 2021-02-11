import React, { Component } from "react";
import { Route } from "react-router-dom";

import * as BooksAPI from "./utils/BooksAPI";
import "./styles/App.css";
import SearchPage from "./components/SearchPage";
import BooksPage from "./components/BooksPage";

class BooksApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.getBooks = this.getBooks.bind(this);
    this.updateShelf = this.updateShelf.bind(this);
  }

  getBooks() {
    BooksAPI.getAll().then(books => this.setState(() => ({ books })));
  }

  componentDidMount() {
    this.getBooks();
  }

  updateShelf(bookId, shelf) {
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
          render={() => <SearchPage updateShelf={this.updateShelf} />}
        />
      </div>
    );
  }
}

export default BooksApp;
