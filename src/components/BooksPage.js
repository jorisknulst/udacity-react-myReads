import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BookShelf from "./BookShelf";

function BooksPage(props) {
  const { books, updateShelf } = props;

  return (
    <div className="books-page">
      <div className="list-books">
        <div className="list-books-title">
          <h1>Joris's reading list</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            shelf="Currently reading"
            books={books.filter(b => b.shelf === "currentlyReading")}
            updateShelf={updateShelf}
          />
          <BookShelf
            shelf="Want to read"
            books={books.filter(b => b.shelf === "wantToRead")}
            updateShelf={updateShelf}
          />
          <BookShelf
            shelf="Read"
            books={books.filter(b => b.shelf === "read")}
            updateShelf={updateShelf}
          />
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default BooksPage;
