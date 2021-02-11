import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import * as BooksAPI from "./utils/BooksAPI";
import "./styles/App.css";
import SearchPage from "./components/SearchPage";
import BooksPage from "./components/BooksPage";

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    BooksAPI.getAll().then(books => setBooks(books));
  };

  const updateShelf = (bookId, shelf) => {
    BooksAPI.update(bookId, shelf).then(() => getBooks());
  };

  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => <BooksPage books={books} updateShelf={updateShelf} />}
      />
      <Route path="/search" component={SearchPage} />
    </div>
  );
};

export default BooksApp;
