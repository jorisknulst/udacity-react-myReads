import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

function BookShelf(props) {
  const { shelf, books, updateShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => {
            return <Book key={book.id} book={book} updateShelf={updateShelf} />;
          })}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default BookShelf;
